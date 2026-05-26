import { useEffect, useState, useCallback } from "react";
import { BoxAccent, BoxSecondary } from "../../components/ui/Boxes";
import { useNotify } from "../../components/modules/NotificationProvider";
import ProductsService from "../../app/ProductsService";
import type { Product, ProductResponse } from "../../core/types";
import { Link } from "react-router-dom";
import { ButtonDanger, ButtonMain } from "../../components/ui/Buttons";
import { useConfirm } from "../../components/modules/ConfirmationProvider";
import type { ConfirmationOptions } from "../../core/interfaces";

const ps = new ProductsService();

export default function ProductsPage() {
    const notifyContext = useNotify();
    const confirmContext = useConfirm();
    const [products, setProducts] = useState<Product[]>([]);
    const [limit] = useState(12);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getProducts = useCallback(async (currentSkip: number) => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const response: ProductResponse = await ps.getProducts(limit, currentSkip);

            if (response.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts(prevProducts => [...prevProducts, ...response.products]);
            }
        } catch (err: any) {
            notifyContext.setMessage(err);
            notifyContext.setMessageType("danger");
        } finally {
            setLoading(false);
        }
    }, [limit, loading, hasMore, notifyContext]);

    const deleteConfirm = async (id: number, title: string) => {
        const msg = `Do you want to delete the following product: ${title}?`;

        const confOptions:ConfirmationOptions = {
            title: "Product deletion",
            message: msg,
            messageType: "info",
            confirmText:"delete",
            confirmVariant: "danger",
            cancelVariant: "main",
            confirmIcon: "check",
            cancelIcon: "xmark",
            onConfirm: () => {deleteProduct(id)},
            onCancel: () => {}
        } as const;

        confirmContext.askConfirmation(confOptions);
    };

    const deleteProduct = async (id: number) => {
        try {
            const response = await ps.deleteProduct(id);

            const msg = response.isDeleted ? "You have successfully deleted the product."
                : "Something went wrong. Please, try againt later!";


        } catch (err: any) {
            notifyContext.setMessage(err);
            notifyContext.setMessageType("danger");
        }
    };

    useEffect(() => {
        getProducts(skip);
    }, [skip]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;

            if (scrollPosition + viewportHeight >= totalHeight - 5 && !loading && hasMore) {
                setSkip(prevSkip => prevSkip + limit);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore, limit]);

    return (
        <BoxSecondary rounded="rounded-none">
            <Link to="/user/product">
                <ButtonMain
                    text="Add product"
                    customClasses={["mx-auto my-2 block"]}
                />
            </Link>

            <div className="grid grid-cols-12">
                {products.map((p, index) => (
                    <div key={index} className="p-2 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 text-center">
                        <BoxAccent>
                            <b className="block font-bold">{p.title}</b>
                            <img className="py-3 mx-auto" src={p.thumbnail} alt={p.title} />

                            <div className="grid grid-cols-2">
                                <div className="col-span-1 flex justify-center">
                                    <Link to={`/user/product/${p.id}`}>
                                        <ButtonMain
                                            text="Open"
                                            icon="arrow-up-right-from-square"
                                            size="sm"
                                        />
                                    </Link>
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <ButtonDanger
                                        text="Delete"
                                        icon="trash"
                                        size="sm"
                                        onClick={()=>deleteConfirm(p.id, p.title)}
                                    />
                                </div>
                            </div>
                        </BoxAccent>
                    </div>
                ))}
            </div>

            {loading && <div className="text-center py-4 font-bold">Termékek betöltése...</div>}
            {!hasMore && <div className="text-center py-4 text-gray-500">Minden terméket betöltöttél.</div>}
        </BoxSecondary>
    );
}
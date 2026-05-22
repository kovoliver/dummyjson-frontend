import { useEffect, useState, useCallback } from "react";
import { BoxAccent, BoxSecondary } from "../../components/ui/Boxes";
import { useNotify } from "../../components/modules/NotificationProvider";
import ProductsService from "../../app/ProductsService";
import type { Product, ProductResponse } from "../../core/types";
import { Link } from "react-router-dom";
import { ButtonMain, ButtonPrimary } from "../../components/ui/Buttons";

const ps = new ProductsService();

export default function ProductsPage() {
    const notifyContext = useNotify();
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
                        </BoxAccent>
                    </div>
                ))}
            </div>

            {loading && <div className="text-center py-4 font-bold">Termékek betöltése...</div>}
            {!hasMore && <div className="text-center py-4 text-gray-500">Minden terméket betöltöttél.</div>}
        </BoxSecondary>
    );
}
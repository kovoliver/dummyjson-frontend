import { useState } from "react";
import type { Product } from "../../core/types";
import { useNotify } from "../../components/modules/NotificationProvider";
import { InputMain } from "../../components/ui/Inputs";
import { BoxSecondary } from "../../components/ui/Boxes";
import TagInput from "../../components/ui/TagInput";
import ProductsService from "../../app/ProductsService";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
    const ps = new ProductsService();
    const navigate = useNavigate();
    const [productData, setProductData] = useState<Product>({
        id: 0,
        brand: "",
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        tags: [],
        images: [],
        thumbnail: "",
        reviews: []
    });
    const notifyContext = useNotify();

    const addProduct = async () => {
        try {
            const product = await ps.addProduct(productData);

            notifyContext.setMessage("You have successfully added your product!");
            notifyContext.setMessageType("success");
            navigate(`/product/${product.id}`);
        } catch (err: any) {
            notifyContext.setMessage(err);
            notifyContext.setMessageType("danger");
        }
    };

    return (
        <>
            <h1 className="text-3xl my-3 text-center text-main">Add product</h1>

            <form
                className="grid grid-cols-2 gap-5 text-center"
                onSubmit={(e) => { e.preventDefault(); addProduct(); }}
            >
                {/* BAL OLDALI DOBOZ: Alapadatok */}
                <BoxSecondary customClasses={['col-span-1', 'flex', 'flex-col', 'gap-4']}>
                    <h2 className="text-xl font-bold text-main mb-2">Basic Info</h2>

                    <div>
                        <b className="block text-main mb-1">Brand</b>
                        <InputMain
                            type="text" customClasses={['w-75']} placeholder="Product brand"
                            value={productData.brand}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, brand: e.target.value }))}
                        />
                    </div>

                    <div>
                        <b className="block text-main mb-1">Product title</b>
                        <InputMain
                            type="text" customClasses={['w-75']} placeholder="Product title"
                            value={productData.title}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, title: e.target.value }))}
                        />
                    </div>

                    <div>
                        <b className="block text-main mb-1">Description</b>
                        <InputMain
                            type="text" customClasses={['w-75']} placeholder="Product description"
                            value={productData.description}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, description: e.target.value }))}
                        />
                    </div>

                    <div>
                        <b className="block text-main mb-1">Thumbnail URL</b>
                        <InputMain
                            type="text" customClasses={['w-75']} placeholder="https://example.com/image.jpg"
                            value={productData.thumbnail}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, thumbnail: e.target.value }))}
                        />
                    </div>
                </BoxSecondary>

                {/* JOBB OLDALI DOBOZ: Számok és Címkék */}
                <BoxSecondary customClasses={['col-span-1', 'flex', 'flex-col', 'gap-4']}>
                    <h2 className="text-xl font-bold text-main mb-2">Inventory & Pricing</h2>

                    <div>
                        <b className="block text-main mb-1">Price ($)</b>
                        <InputMain
                            type="number" customClasses={['w-75']} placeholder="Price"
                            value={productData.price || ""}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, price: Number(e.target.value) }))}
                        />
                    </div>

                    <div>
                        <b className="block text-main mb-1">Discount (%)</b>
                        <InputMain
                            type="number" customClasses={['w-75']} placeholder="Discount percentage"
                            value={productData.discountPercentage || ""}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, discountPercentage: Number(e.target.value) }))}
                        />
                    </div>

                    <div>
                        <b className="block text-main mb-1">Stock</b>
                        <InputMain
                            type="number" customClasses={['w-75']} placeholder="Available stock"
                            value={productData.stock || ""}
                            onChange={(e: any) => setProductData(prev => ({ ...prev, stock: Number(e.target.value) }))}
                        />
                    </div>

                    <div>
                        <b className="block text-main mb-1">Tags</b>
                        <TagInput
                            tags={productData?.tags}
                            addTag={(tag: string) =>
                                setProductData(prev => ({ ...prev, tags: [...prev.tags, tag] }))
                            }
                            removeTag={(index: number) =>
                                setProductData(prev => ({ ...prev, tags: prev.tags.filter((_, i) => i !== index) }))
                            }
                            placeholder="Add a tag"
                        />
                    </div>
                </BoxSecondary>

                {/* MENTÉS GOMB: Alul, középen, teljes szélességű konténerben */}
                <div className="col-span-2 mt-4 text-center">
                    <button
                        type="submit"
                        className="bg-main text-white px-8 py-3 rounded shadow font-semibold hover:opacity-90 transition-opacity"
                    >
                        Save Product
                    </button>
                </div>
            </form>
        </>
    );
}
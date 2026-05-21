import { useState } from "react";
import type { Product } from "../../core/types";
import { useNotify } from "../../components/modules/NotificationProvider";
import { InputMain } from "../../components/ui/Inputs";
import { BoxSecondary } from "../../components/ui/Boxes";
import TagInput from "../../components/ui/TagInput";

export default function ProductPage() {
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
        reviews: [],
    });
    const notifyContext = useNotify();

    const addProduct = async () => {
        try {

        } catch (err) {

        }
    };

    return (
        <>
            <h1 className="text-2xl my-3">Add product</h1>

            <form className="grid grid-cols-2 gap-5 text-center">
                <BoxSecondary customClasses={['col-span-1']}>
                    <b className="block text-main">Product title</b>

                    <InputMain
                        type="text" customClasses={['w-75']}
                        placeholder="product title"
                    />
                </BoxSecondary>

                <BoxSecondary customClasses={['col-span-1']}>
                    <b className="block text-main">Product title</b>

                    <InputMain
                        type="text" customClasses={['w-75']}
                        placeholder="product title"
                    />

                    <h1>Tag input</h1>
                    <TagInput
                        tags={productData?.tags}
                        addTag={(tag: string) =>
                            setProductData(prev => ({
                                ...prev,
                                tags: [...prev.tags, tag]
                            }))
                        }
                        removeTag={(index: number) =>
                            setProductData(prev => ({
                                ...prev,
                                tags: prev.tags.filter((_, i) => i !== index)
                            }))
                        }
                        placeholder="Írd ide a tagedet!"
                    />
                </BoxSecondary>
            </form>
        </>
    );
}
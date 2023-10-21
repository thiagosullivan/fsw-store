import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProducItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProducItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[70%]"
                    style={{
                        objectFit: "contain",
                    }}
                    alt={product.name}
                />
                {product.discountPercentage > 0 && (
                    <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                        <ArrowDownIcon size={14}/>
                        {product.discountPercentage}%
                    </Badge>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-full">
                    {product.name}
                </p>
                <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap text-ellipsis">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                                R$ {product.totalPrice.toFixed(2)}
                            </p>
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap opacity-75 line-through text-xs">
                                R$ {Number(product.basePrice).toFixed(2)}
                            </p>
                        </>
                    ) : (
                        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                            R$ {Number(product.basePrice).toFixed(2)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default ProductItem;
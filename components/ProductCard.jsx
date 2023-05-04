import Link from "next/link";

const ProductCard = () => {
    return ( 
        <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
           {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full" src="/product-1.webp" alt="product img" />
            <div className="p-4 text-black/[0.9]">
                <h2>product name</h2>
                <div className="flex items-center text-black/[0.5] ">
                    <p className="mr-2 text-lg font-semibold">R$20.00</p>
                    <p className="text-base font-medium line-through ">R$25.00 off</p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                </div>
            </div>
        </Link>
     );
}
 
export default ProductCard;
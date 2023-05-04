import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
                
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Proporcionando amortecimento para as suas corridas.
                    </div>
                    <div className="text-md md:text-xl">
                    A fim de fornecer amortecimento para corridas de longa distância, a Nike combinou uma entressola leve Nike ZoomX com alturas de pilha mais altas.
                    </div>
                </div>
                

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {/* {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* products grid end */}
            </Wrapper>
    </main>
  );
}

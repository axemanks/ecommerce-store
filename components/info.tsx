// Info section on the product page
"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
//import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
//   const cart = useCart();

//   const onAddToCart = () => {
//     cart.addItem(data);
//   }

  return ( 
    <div>
        {/* heading */}
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        {/* Price */}
        <p className="text-2xl text-gray-900">            
          <Currency value={data?.price} />
        </p>
      </div>

      {/* seperator */}
      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        {/* Size */}
        <div className="flex items-center gap-x-4">            
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
        {/* Color */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          {/* show the color */}
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      {/* Add to Cart */}
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={() => {}} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;
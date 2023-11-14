// List of products

import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
    title: string;
    items: Product[];
};

const ProductList: React.FC<ProductListProps> = ({
    title,
    items,
}) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {/* && operator is used here as a short-circuit operator to render NoResults */}
            {items.length ===  0 && <NoResults/>}
            {/* Grid to display the featured products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* map out the featured products */}
                {items.map((item) => (
                    // pass the data to the product card
                    <ProductCard 
                    key={item.id}
                    data={item}                    
                    />
                ))}
            </div>
        </div>
    )
};

export default ProductList;
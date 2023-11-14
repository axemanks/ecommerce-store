// Homepage

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    // fetch the billboard data
    const billboard = await getBillboard("87ba3cc2-8b67-4e8e-96e5-d249c1e53b08");
    // Fetch the products - this is the home page so we need featured products
    const products = await getProducts({ isFeatured: true});
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList 
                title="Featured Products"
                items={products}
                />
            </div>
</div>

        </Container>
    )
    
};

export default HomePage;
// Dynamic product page to display a single product
// Suggested items are items in the same category

import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react'

interface ProductPageProps {
    // Get the productId from the route
    params: {
        productId: string;
    }
};

const ProductPage: React.FC<ProductPageProps> = async ({
    params,
}) => {
    // Get the product
    const product = await getProduct(params.productId);
    // Get suggested products
    const suggestedProducts = await getProducts({
        // search for products in the same category
        categoryId: product?.category?.id
    })

  return (

    <div className='bg-white'>
        <Container>
            <div className='px-4 py-10 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                    {/* Image Gallery */}
                    <Gallery images={product.images} />
                    
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        {/* Info */}
                        <Info data={product} />
                    </div>
                </div>
                <hr className='my-10'/>
                <ProductList
                title='Related Items'
                items={suggestedProducts}
                ></ProductList>
            </div>
        </Container>
        </div>
  )
}

export default ProductPage
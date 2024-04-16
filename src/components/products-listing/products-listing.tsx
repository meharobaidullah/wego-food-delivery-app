import React, { useState } from 'react';
import { FoodProduct } from '../../types/product';
import { ProductCard } from '../product-card';
import { Button } from '../button';
import { PlusIcon } from '@heroicons/react/24/solid';

export const ProductsListing = ({ products }: { products: FoodProduct[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, pageSize));

  // Function to load more products
  const loadMoreProducts = () => {
    const nextPage = currentPage + 1;
    const nextProducts = products.slice(0, nextPage * pageSize);
    setDisplayedProducts(nextProducts);
    setCurrentPage(nextPage);
  };

  return (
    <React.Fragment>
      <div className="row mt-md">
        {(displayedProducts ?? []).map((product: FoodProduct) => {
          return (
            <div key={product.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-md">
              <ProductCard product={product} />
            </div>
          );
        })}

        {displayedProducts.length < products.length && (
          <div className="col-sm-12 d-flex justify-content-center mt-lg">
            <Button onClick={loadMoreProducts}>
              <PlusIcon className="icon" />
              Load more
            </Button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductsListing;

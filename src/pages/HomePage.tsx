import { useState } from 'react';

import { SearchInput } from '../components/search-input';
import { Tabs } from '../components/tabs';
import { ProductCard } from '../components/product-card';

import { FoodProduct } from '../types/product';
import useCategories from '../hooks/useCategories';
import useFoodProducts from '../hooks/useFoodProducts';

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const { data: categories } = useCategories();
  const { data: foodProducts } = useFoodProducts();

  const foodProductsList: FoodProduct[] = foodProducts?.foods ?? [];

  const filteredProducts = foodProductsList.filter((product) => {
    const isSearchMatch = product.name.toLowerCase().includes(searchValue.toLowerCase());
    const isCategoryMatch = selectedCategoryId ? product.categoryId === selectedCategoryId : true;
    return isSearchMatch && isCategoryMatch;
  });

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <SearchInput
            placeholder="Enter restaurant name..."
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchInputChange(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Tabs
            categories={categories ?? []}
            selectedCategoryId={selectedCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      </div>

      <div className="row mt-md">
        {filteredProducts.length > 0 ? (
          (filteredProducts ?? []).map((product: FoodProduct) => {
            return (
              <div key={product.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-md">
                <ProductCard product={product} />
              </div>
            );
          })
        ) : (
          <div className="col-lg-12">
            <h3>No result found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

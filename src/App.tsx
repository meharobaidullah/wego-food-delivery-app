import { useState } from 'react';
import { SearchInput } from './components/search-input';
import { Tabs } from './components/tabs';

import { Category } from './types/categories';
import { FoodProduct } from './types/product';
import ProductCard from './components/product-card/product-card';

const categories: Category[] = [
  {
    id: '6288a89f1f0152b8c2cd512b',
    name: 'Shushi',
  },
  {
    id: '6288a89f7338764f2071a8a8',
    name: 'Pizza',
  },
  {
    id: '6288a89f70dc8cf93b71609b',
    name: 'Hot Meals',
  },
  {
    id: '6288a89fe6c2fe0b758360fe',
    name: 'Deserts',
  },
  {
    id: '6288a89fac9e970731bfaa7b',
    name: 'Drinks',
  },
];

const foodProducts: FoodProduct[] = [
  {
    id: '628b5decc94a27754f30e6f1',
    index: 0,
    rating: 3.9508,
    promotion: 'gift',
    isNew: false,
    categoryId: '6288a89fac9e970731bfaa7b',
    minCookTime: 80,
    maxCookTime: 100,
    restaurant: 'Niquent',
    name: 'Niquent Drinks',
    imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
  },
  {
    id: '628b5decf39bcc4e982fc88a',
    index: 1,
    rating: 4.9874,
    promotion: '1+1',
    isNew: false,
    categoryId: '6288a89f1f0152b8c2cd512b',
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: 'Boilicon',
    name: 'Boilicon Shushi',
    imageUrl: 'https://source.unsplash.com/random/400x400?Shushi',
  },
  {
    id: '628b5dec6678e96d75f2f7de',
    index: 2,
    rating: 3.4518,
    promotion: null,
    isNew: true,
    categoryId: '6288a89f1f0152b8c2cd512b',
    minCookTime: 100,
    maxCookTime: 120,
    restaurant: 'Quinex',
    name: 'Quinex Shushi',
    imageUrl: 'https://source.unsplash.com/random/400x400?Shushi',
  },
  {
    id: '628b5dec97eacf5e8a604bd7',
    index: 3,
    rating: 1.5975,
    promotion: 'gift',
    isNew: false,
    categoryId: '6288a89f7338764f2071a8a8',
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: 'Perkle',
    name: 'Perkle Pizza',
    imageUrl: 'https://source.unsplash.com/random/400x400?Pizza',
  },
  {
    id: '628b5decf99b6a8dc80af3b6',
    index: 4,
    rating: 0.8644,
    promotion: null,
    isNew: true,
    categoryId: '6288a89fac9e970731bfaa7b',
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: 'Zanymax',
    name: 'Zanymax Drinks',
    imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
  },
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div>
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
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              onCategorySelect={handleCategorySelect}
            />
          </div>
        </div>

        <div className="row mt-md">
          {foodProducts.map((product) => {
            return (
              <div key={product.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-md">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { SearchInput } from './components/search-input';
import { Tabs } from './components/tabs';

import { Category } from './types/categories';

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

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  console.log({ selectedCategoryId, searchValue });

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
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

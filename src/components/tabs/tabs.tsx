import { Category } from '../../types/categories';
import './tabs.css';

export const Tabs = ({
  categories,
  selectedCategoryId,
  onCategorySelect,
}: {
  categories: Category[];
  selectedCategoryId?: string;
  onCategorySelect: (categoryId: string) => void;
}) => {
  const isAllActive = selectedCategoryId === undefined || selectedCategoryId === '' ? 'active' : '';

  const isCategoryActive = (id: string) => (selectedCategoryId === id ? 'active' : '');

  const handleCategoryClick = (id: string) => {
    onCategorySelect(id);
  };

  return (
    <ul className="tabs">
      <li className={isAllActive} onClick={() => handleCategoryClick('')}>
        All
      </li>

      {categories.map(({ id, name }) => (
        <li key={id} className={isCategoryActive(id)} onClick={() => handleCategoryClick(id)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;

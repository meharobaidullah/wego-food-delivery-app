import './input.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchInput = ({ ...props }) => {
  return (
    <div className="search-input-container">
      <MagnifyingGlassIcon className="icon" />

      <input {...props} />
    </div>
  );
};

export default SearchInput;

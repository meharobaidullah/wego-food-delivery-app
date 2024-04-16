import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { Category } from '../types/categories';

const API_URL = 'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593';

const useCategories = (): UseQueryResult<Category[], Error> => {
  const fetchCategories = async () => {
    const response = await axios.get<Category[]>(API_URL);
    return response.data;
  };

  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

export default useCategories;

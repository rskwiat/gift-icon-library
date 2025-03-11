import { useQuery } from '@tanstack/react-query';

export const fetchIcons = async () => {
  const res = await fetch('api/all-icons', { method: 'get' });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useFetchIcons = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gallery'],
    queryFn: fetchIcons,
  });

  return {
    isPending: isLoading,
    isError: error,
    data,
  };
};

export default useFetchIcons;

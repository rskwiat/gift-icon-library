import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFetchIcons } from '../apis/fetchIcons';
import { useGalleryStore } from '../store/useGalleryStore';
import ErrorComponent from './Error';
import Loading from './Loading';

const Gallery = () => {
  const { icons, setIcons } = useGalleryStore();
  const { isPending, isError, data } = useFetchIcons();

  useEffect(() => {
    if (data) {
      setIcons(data);
    }
  }, [setIcons, data]);

  if (isPending) return <Loading />;
  if (isError)
    return <ErrorComponent message="An error occured fetching the data" />;

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.info('URL Copied to clipboard', { toastId: 123 });
    } catch (err: unknown) {
      toast.error(`Failed to copy: ${JSON.stringify(err)}`, {
        toastId: 'error',
      });
    }
  };

  return (
    <div>
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl">{icons.length} Icons Loaded</h2>
        </div>
      </div>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div onClick={() => copyText(JSON.stringify(icons.length))}>
        <div className="grid grid-cols-1 gap-16 p-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
          {icons.map((icon) => {
            return (
              <div
                key={icon.id}
                className="flex h-20 p-4 rounded-lg transition-colors delay-150 duration-500 items-center justify-center hover:bg-gray-200"
              >
                <img
                  src={`/api/images/${icon.name}`}
                  alt={icon.name}
                  className="max-h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

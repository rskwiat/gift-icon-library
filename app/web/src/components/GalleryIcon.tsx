import { toast } from 'react-toastify';
interface GalleryIconProps {
  id?: number;
  name: string;
  path?: string;
}

const GalleryIcon = ({ name, id }: GalleryIconProps) => {
  const copyURL = async (text: string) => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}${text}`);
      toast.info('URL Copied to clipboard', { toastId: id });
    } catch (err: unknown) {
      toast.error(`Failed to copy: ${JSON.stringify(err)}`, {
        toastId: 'error',
      });
    }
  };

  return (
    <div className="flex relative h-36 p-4 rounded-lg transition-colors delay-150 duration-500 items-center hover:cursor-pointer justify-center group hover:bg-gray-200">
      <button
        type="button"
        className="absolute transition-opacity delay-150 duration-500 bottom-0 w-full h-full opacity-0 group font-bold color-brand hover:opacity-100"
        onClick={() => copyURL(`api/images/${name}`)}
        style={{ color: 'var(--color-brand)' }}
      >
        Copy URL
      </button>
      <img src={`/api/images/${name}`} alt={name} className="max-h-full" />
    </div>
  );
};

export default GalleryIcon;

import { toast } from 'react-toastify';

const GalleryIcon = () => {
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

  //   <div
  //   key={icon.id}
  //   className="flex h-20 p-4 rounded-lg transition-colors delay-150 duration-500 items-center justify-center hover:bg-gray-200"
  // >
  //   <img
  //     src={`/api/images/${icon.name}`}
  //     alt={icon.name}
  //     className="max-h-full"
  //   />
  //      <div onClick={() => copyText(JSON.stringify(icons.length))}>

  // </div>
  return <div>Gallery</div>;
};

export default GalleryIcon;

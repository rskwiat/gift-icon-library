import { useEffect } from 'react';
import { useFetchIcons } from '../apis/fetchIcons';
import { useGalleryStore } from '../store/useGalleryStore';
import Container from './Container';
import ErrorComponent from './Error';
import GalleryIcon from './GalleryIcon';
import Loading from './Loading';
import Subhead from './Subhead';

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

  return (
    <div>
      <Subhead iconTotal={icons.length.toString()} />

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <Container>
        <div className="grid grid-cols-2 gap-16 p-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
          {icons.map((icon) => {
            return <GalleryIcon key={icon.key} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;

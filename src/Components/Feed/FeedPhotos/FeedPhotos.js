import React from 'react';
import FeedPhotosItems from '../FeedPhotosItems/FeedPhotosItems';
import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../Api/api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItems
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';
import getImages from '../services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchImages() {
      setStatus('pending');
      try {
        const data = await getImages(searchQuery, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    }

    fetchImages();
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1> Sorry something went wrong</h1>}
      <ImageGallery images={images} />
      {images.length > 0 && <Button onClick={onLoadMore} />}
    </div>
  );
}

App.propTypes = { searchQuery: PropTypes.string };

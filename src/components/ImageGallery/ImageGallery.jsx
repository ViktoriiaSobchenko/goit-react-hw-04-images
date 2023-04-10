import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          tags={image.tags}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default ImageGallery;

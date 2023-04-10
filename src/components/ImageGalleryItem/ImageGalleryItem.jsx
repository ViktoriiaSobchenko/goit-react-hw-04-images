import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={css.item} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.image}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

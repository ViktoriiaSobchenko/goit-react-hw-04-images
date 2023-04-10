import { useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter word to search');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <TbSearch className={css.icon} />
        </button>
        <input
          className={css.input}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

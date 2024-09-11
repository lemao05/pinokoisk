import { Link } from 'react-router-dom';

import styles from './app.module.css';

export default function FilmItem({ name, poster, year, id, genres = [] }) {
  const imgUrl = poster?.url ? poster.url : 'http://placehold.it/213x320/';

  return (
    <>
      <div className={styles.filmItem}>
        <Link to={`${id}`} className='h-full self-center'>
          <img
            className='h-full max-sm:object-contain max-sm:max-w-56'
            src={imgUrl}
          />
        </Link>
        <div className='2xl:text-center text-lg max-sm:flex max-sm:flex-col justify-between'>
          <p className='font-bold'>
            {name} <span className='font-normal'>({year})</span>
          </p>
          <p className='2xl:hidden'>{genres.map((el) => el.name).join(', ')}</p>
        </div>
      </div>
    </>
  );
}

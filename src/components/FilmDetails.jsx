export default function FilmDetails({
  poster,
  name,
  description,
  year,
  rating,
  genres = [],
  countries,
  movieLength,
}) {
  const imgUrl = poster?.url ? poster.url : 'http://placehold.it/213x320/';
  const filmRating = rating?.imdb ? rating.imdb : null;
  return (
    <>
      <div className='flex max-sm:flex-col'>
        <figure className='self-center mb-3'>
          <h1 className='absolute bg-green-700 text-white font-semibold px-2 py-1 m-2 rounded'>
            {filmRating}
          </h1>
          <img src={imgUrl} className='' style={{ maxHeight: '30rem' }} />
        </figure>
        <ul className='px-10 flex-grow flex flex-col gap-3 max-sm:p-0'>
          <li className='film-info'>
            Название: <span className='text-right'>{name}</span>
          </li>
          <li className='film-info'>
            Год: <span>{year}</span>
          </li>
          <li className='film-info'>
            Длительность: <span>{movieLength}</span>
          </li>
          {countries ? (
            <li className='film-info'>
              Страны: <span>{countries.map((el) => el.name).join(', ')}</span>
            </li>
          ) : null}
          <li className='film-info'>
            Жанры: <span>{genres.map((el) => el.name).join(', ')}</span>
          </li>
        </ul>
      </div>
      <p className='text-justify max-sm:mt-3'>{description}</p>
    </>
  );
}

import FilmItem from './FilmItem';

export default function FilmList({ films }) {
  return (
    <div className='grid grid-cols-4 mt-10 gap-10 max-sm:grid-cols-1 max-sm:gap-0 max-sm:w-full'>
      {films &&
        films.map((el) => {
          return <FilmItem key={el.id} {...el} />;
        })}
    </div>
  );
}

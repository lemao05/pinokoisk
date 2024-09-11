import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from '../sevices/api.service';
import Header from '../components/Header';
import FilmDetails from '../components/FilmDetails';
import Footer from '../components/Footer';

export default function FilmPage() {
  const { filmId } = useParams();
  const [filmDetails, setFilmDetails] = useState();

  useEffect(() => {
    async function searchById() {
      const data = await fetchById(filmId);
      setFilmDetails(data);
    }
    searchById();
  }, [filmId]);
  return (
    <>
      <Header />
      <main className='container mx-auto px-20 py-10 max-sm:p-3'>
        <FilmDetails key={filmId} {...filmDetails} />
      </main>
      <Footer />
    </>
  );
}

import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import FilmList from '../components/FilmList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByName } from '../sevices/api.service';
import { Pagination } from '@mui/material';
import { fetchByPage } from '../sevices/api.service';

export default function FilmListPage() {
  const { filmName } = useParams('');
  const [films, setFilms] = useState([]);
  const [pagesInfo, setPagesInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function searchByName() {
      const data = await fetchByName(filmName);
      setFilms(data.docs);
      setPagesInfo(data);
      setCurrentPage(1);
    }
    searchByName();
  }, [filmName]);

  async function onPageChange(page, name) {
    const data = await fetchByPage(page, name);
    setFilms(data.docs);
    setCurrentPage(page);
  }

  return (
    <>
      <Header />
      <main className='container mx-auto pt-10 flex-col flex items-center'>
        <SearchField filmName={filmName} />
        <FilmList films={films} />
        <Pagination
          hideNextButton
          hidePrevButton
          count={pagesInfo.pages}
          className='mt-auto content-end py-5'
          onChange={(e, page) => onPageChange(page, filmName)}
          page={currentPage}
        />
      </main>
      <Footer />
    </>
  );
}

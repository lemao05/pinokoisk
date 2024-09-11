import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchField from '../components/SearchField';

export default function MainPage() {
  return (
    <>
      <Header />
      <main className='container mx-auto py-10 flex-col flex items-center'>
        <SearchField />
      </main>
      <Footer />
    </>
  );
}

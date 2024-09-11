import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full h-20  bg-black/90 flex px-10'>
      <Link className='self-center' to={'/'}>
        <img
          src='/pinokoisk.png'
          width='200'
          alt='logo'
          className='object-contain'
        />
      </Link>
    </header>
  );
}

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchField({ filmName = '' }) {
  const [inputValue, setInputValue] = useState(filmName);
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/films/${inputValue}`);
  };

  return (
    <>
      <div className='w-full text-center'>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Введите название фильма'
          type='text'
          className='w-4/5 border-none outline-none mx-5 rounded py-1 px-3 text-base'
          onKeyDown={(e) => e.key === 'Enter' && navigateTo()}
        />
        <button
          onClick={() => navigateTo()}
          className='bg-black text-amber-600 rounded-md px-3 py-1 text-base max-sm:hidden'
        >
          поиск
        </button>
      </div>
    </>
  );
}

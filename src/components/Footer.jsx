export default function Footer() {
  return (
    <div className='w-full h-10 bg-amber-950/95 text-center'>
      <p className='text-white'>
        Все права защищены. {new Date().getFullYear()}
      </p>
    </div>
  );
}

import cn from '../hooks/useClsx';

export default function Component() {
  return (
    <div
      className={cn(
        'new-container flex items-center justify-between',
        'bg-white',
        'px-4 py-6'
      )}
    >
      <div className='flex'>
        <div className='logo-left' />
        <div className='logo-right' />
      </div>
      <p className='text-sm font-semibold'>
        Created at <span className='text-primary'>May 25 - 28, 2023</span>
      </p>
    </div>
  );
}

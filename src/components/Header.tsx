import { Link } from 'react-router-dom';
import cn from '../hooks/useClsx';

export default function Component() {
  return (
    <div
      className={cn(
        'new-container bg-white text-[#03C988]',
        'font-bold text-lg text-center',
        'px-4 py-6',
        'cursor-pointer'
      )}
    >
      <Link to='https://github.com/xevorte' target='_blank'>Irham Muhammad Shidiq</Link>
    </div>
  );
}

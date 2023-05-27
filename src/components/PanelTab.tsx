/* eslint-disable @typescript-eslint/no-explicit-any */

import cn from '../hooks/useClsx';

type PropsTypes = {
  items: any[]
  active: string | number
}

export default function Component({
  items,
  active
}: Partial<PropsTypes>) {
  return (
    <div className='grid grid-cols-3 gap-1'>
      {items?.map((el) => (
        <button
          key={el.id}
          className={cn(
            'min-h-[50px] flex items-center justify-center',
            'text-base text-center font-semibold',
            'p-4 uppercase cursor-pointer transition-all',
            active === el.id
              ? 'bg-primary text-white'
              : 'bg-slate-200 text-gray-700'
          )}
        >
          {el.value}
        </button>
      ))}
    </div>
  );
}

Component.defaultProps = {
  items: [
    {
      id: 1,
      value: 'Tab One',
    },
  ],
  active: 1,
};

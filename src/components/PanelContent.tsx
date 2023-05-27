/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react';
import { Button } from './';
import cn from '../hooks/useClsx';

interface Data {
  title?: string;
  totalValue: number;
  value: any[];
  buttonLabel: string;
  buttonAction?: () => void;
}

export default function Component({
  active,
  setActive,
}: {
  active: string | number;
  setActive: (e?: any) => void;
}) {
  const dataDefaultValue = {
    totalValue: 1,
    value: [],
    buttonLabel: '',
  };
  const [data, setData] = useState<Data>(dataDefaultValue);

  let display;

  useEffect(() => {
    if (active === 1) {
      setData((prev) => ({
        ...prev,
        title: 'Enter Number Between 1 - 10000',
        buttonLabel: 'Confirm',
        buttonAction: () => setActive(2),
      }));
    } else if (active === 2) {
      setData((prev) => ({
        ...prev,
        title: 'Generate Integers',
        buttonLabel: 'Generate New',
        buttonAction: () => {
          setData((prev: any) => ({
            ...prev,
            value: Array.from(
              { length: parseInt(prev.totalValue) },
              () =>
                Math.floor(Math.random() * (10000 - -10000 + 1)) + -10000
            ),
          }));
        },
      }));
    } else {
      setData((prev) => ({
        ...prev,
        title: 'Generate Smallest Positive Integer',
        buttonLabel: 'Generate',
        buttonAction: () =>
          setData((prev: any) => ({
            ...prev,
            value: Array.isArray(prev.value)
              ? prev.value
                  .sort((a: any, b: any) => a - b)
                  .filter((e: any) => e > 0)[0] - 1 || 1
              : prev.value,
          })),
      }));
    }
  }, [active]);

  switch (active) {
    case 2:
      display = (
        <>
          <textarea
            value={data?.value}
            rows={5}
            className={cn(
              'w-full sm:w-[480px]',
              'bg-slate-200 font-medium text-gray-700 text-lg text-center',
              'ring-1 ring-transparent',
              'pt-8 sm:pt-7 pb-4 px-5 appearance-none outline-none'
            )}
            disabled
          />
          <Button
            action={() => setActive(3)}
            label='Confirm'
            disabled={data.value.length === 0}
          />
        </>
      );
      break;
    case 3:
      display = (
        <>
          <input
            type='number'
            value={data?.value}
            className={cn(
              'w-full sm:w-[480px]',
              'bg-slate-200 font-medium text-gray-700 text-lg text-center',
              'ring-1 ring-transparent',
              'pt-8 sm:pt-7 pb-4 px-5 outline-none'
            )}
            disabled
          />
          <Button
            action={() => {
              setActive(1);
              setData(dataDefaultValue);
            }}
            label='Reset'
            disabled={!data.value || Array.isArray(data.value)}
          />
        </>
      );
      break;
    default:
      display = (
        <input
          id='number'
          type='number'
          min={1}
          max={10000}
          value={data?.totalValue}
          onChange={(e: any) =>
            setData((prev) => ({
              ...prev,
              totalValue:
                e.target.value <= 0 || e.target.value > 10000
                  ? 1
                  : e.target.value,
            }))
          }
          className={cn(
            'w-full sm:w-[480px]',
            'bg-slate-200 font-medium text-gray-700 text-lg text-center',
            'ring-1 ring-transparent',
            data?.totalValue > 10000 || data?.totalValue <= 0
              ? 'focus:ring-rose-600'
              : 'focus:ring-primary',
            'pt-8 sm:pt-7 pb-4 px-5 appearance-none outline-none transition-all'
          )}
        />
      );
      break;
  }

  return (
    <div className='new-container flex-grow'>
      <div
        className={cn('flex items-center justify-center', 'h-full text-center')}
      >
        <div className='flex flex-col'>
          <label
            htmlFor='number'
            className={cn(
              'w-fit bg-primary text-white text-[13px] font-medium',
              'py-2 px-4 -mb-[17px] mx-auto z-10'
            )}
          >
            {data?.title}
          </label>
          {display}
          <Button action={data?.buttonAction} label={data?.buttonLabel} />
        </div>
      </div>
    </div>
  );
}

Component.defaultProps = {
  active: 1,
};

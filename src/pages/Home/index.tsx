import * as COMPONENT from '../../components';
import { useState } from 'react';
import cn from '../../hooks/useClsx';

export default function Page() {
  const tabData = [
    {
      id: 1,
      value: 'Input',
    },
    {
      id: 2,
      value: 'Generate',
    },
    {
      id: 3,
      value: 'Lowest Val',
    },
  ];
  const [tabActive, setTabActive] = useState(1);

  return (
    <div className='w-full flex items-center justify-center'>
      <div
        className={cn(
          'flex flex-col h-4/5 max-h-[85%] w-[1000px] max-w-[85%]',
          'bg-white',
          'border border-slate-200 rounded-2xl',
          'overflow-auto'
        )}
      >
        <COMPONENT.PanelTab items={tabData} active={tabActive} />
        <COMPONENT.PanelContent
          active={tabActive}
          setActive={(e) => setTabActive(e)}
        />
      </div>
    </div>
  );
}

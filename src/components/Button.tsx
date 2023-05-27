import cn from '../hooks/useClsx';

type PropsTypes = {
  action?: (e?: any) => void;
  label: string | number;
  disabled?: boolean;
};

export default function Component({ action, label, disabled }: PropsTypes) {
  return (
    <button
      className={cn(
        'w-full',
        'bg-primary hover:bg-emerald-600 text-white font-medium',
        'disabled:bg-slate-200 disabled:text-gray-400',
        'py-2 mt-4 transition-all'
      )}
      onClick={action}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

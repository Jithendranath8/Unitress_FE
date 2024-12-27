import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export const Button = forwardRef(({ className, variant = 'primary', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-all',
        {
          'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow': variant === 'primary',
          'bg-gray-100 hover:bg-gray-200 text-indigo-900': variant === 'secondary',
          'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow': variant === 'danger',
        },
        className
      )}
      {...props}
    />
  );
});

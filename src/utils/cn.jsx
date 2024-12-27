const buttonClass = cn('bg-blue-500', isActive && 'text-white', isDisabled && 'opacity-50');
const Button = () => {
    return <button className={buttonClass}>Click me</button>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-[rgb(190,137,41)] text-white hover:bg-[rgb(160,115,30)] hover:shadow-[rgb(190,137,41)]/25 active:bg-[rgb(140,100,25)] shadow-[rgb(190,137,41)]/15',
    secondary: 'bg-[rgb(229,229,223)] text-[rgb(45,45,42)] hover:bg-[rgb(210,209,203)] active:bg-[rgb(200,199,193)]',
    outline: 'border-2 border-[rgb(190,137,41)] text-[rgb(190,137,41)] hover:bg-[rgb(190,137,41)]/10 hover:shadow-[rgb(190,137,41)]/20 active:bg-[rgb(190,137,41)]/20',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg w-full',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
};

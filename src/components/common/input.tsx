interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-[rgb(45,45,42)] mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] placeholder-[rgb(150,148,142)] ${error ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
};

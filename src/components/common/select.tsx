interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  id,
  options,
  placeholder = 'Selecciona una opción',
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
      <select
        id={id}
        className={`mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] cursor-pointer appearance-none bg-no-repeat bg-right ${error ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''} ${className}`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem 1.25rem' }}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
};

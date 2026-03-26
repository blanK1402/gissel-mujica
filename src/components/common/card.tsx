interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-[rgb(240,239,233)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[rgb(190,137,41)]/10 hover:border-[rgb(190,137,41)]/30 hover:-translate-y-1 ${className}`}
    >
      {icon && (
        <div className="w-14 h-14 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center mb-5">
          <div className="text-[rgb(190,137,41)] text-3xl">{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-bold text-[rgb(45,45,42)] mb-3">{title}</h3>
      <p className="text-[rgb(100,98,92)] mb-4 leading-relaxed">{description}</p>
      {children}
    </div>
  );
};

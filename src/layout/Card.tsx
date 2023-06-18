export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-lg border border-zinc-700">
      <div className="p-6">{children}</div>
    </div>
  );
};

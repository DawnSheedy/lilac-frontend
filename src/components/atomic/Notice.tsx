export interface NoticeProps {
  title: string;
  text: string;
  buttonText?: string;
  onClick?: () => void;
}

export const Notice = ({ title, text, buttonText, onClick }: NoticeProps) => {
  return (
    <div className="w-full p-2 px-4 bg-pink-800 rounded space-y-2">
      <h1 className="font-semibold">{title}</h1>
      <hr />
      <p>{text}</p>
      {onClick && (
        <button
          onClick={onClick}
          className="w-full p-1 border border-zinc-200 rounded bg-pink-900 hover:bg-pink-950"
        >
          {buttonText ?? "Okay"}
        </button>
      )}
    </div>
  );
};

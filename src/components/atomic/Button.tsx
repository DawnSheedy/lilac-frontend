export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-pink-800 hover:bg-pink-900 text-white font-semibold py-2 px-4 rounded">
            {label}
        </button>
    );
}
import { ChangeEvent, useMemo } from "react";

export interface InlineEditProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

let uuidCounter = 0;

export const TextInput = ({ label, value, placeholder, onChange }: InlineEditProps) => {
  const uuid = useMemo(() => `${uuidCounter++}`, []);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={uuid} className="block font-semibold mb-1 pl-4">
        {label}
      </label>
      <input id={uuid} value={value} onChange={changeHandler} placeholder={placeholder ?? ''} className="bg-zinc-900 py-2 px-4 rounded focus:outline-none border border-zinc-600 focus:border-pink-900 transition-colors"></input>
    </div>
  );
};

import { ChangeEvent } from "react";

type InputProps = {
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  error?: string;
};

const InputComponent = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
}: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-400 outline-none w-full rounded-full text-left"
      />
      <div className="text-sm text-left">
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default InputComponent;

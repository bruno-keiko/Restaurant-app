import React from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={styles["input-field"]}
      />
    </div>
  );
};

export default InputField;

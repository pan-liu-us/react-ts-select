import { useState } from "react";
import styles from "./select.module.css";
import { TiTimes } from "react-icons/ti";
import { FaCaretDown } from "react-icons/fa";

export type SelectOption = {
  label: string;
  value: string;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

function Select({ multiple, options, onChange, value }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>
        {multiple
          ? value.map((o) => (
              <button
                key={o.label}
                className={styles["option-badge"]}
                onClick={(e) => selectOption(o)}
              >
                {o.value}
                <TiTimes />
              </button>
            ))
          : value?.value}
      </span>
      <TiTimes
        className={styles.delete}
        onClick={(e) => (multiple ? onChange([]) : onChange(options[0]))}
      />
      <div className={styles.divider}></div>
      <FaCaretDown
        className={styles.caret}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {multiple
          ? options.map((o) => (
              <li
                key={o.label}
                className={styles.option}
                onClick={(e) => {
                  selectOption(o);
                  setIsOpen(false);
                }}
              >
                {o.value}
              </li>
            ))
          : options.slice(1).map((o) => (
              <li
                key={o.label}
                className={styles.option}
                onClick={(e) => {
                  selectOption(o);
                  setIsOpen(false);
                }}
              >
                {o.value}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Select;

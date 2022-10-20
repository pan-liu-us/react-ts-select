import { useState } from "react";
import styles from "./select.module.css";
import { TiTimes } from 'react-icons/ti';
import { FaCaretDown } from 'react-icons/fa';

type SelectOption = {
  label: string;
  value: string;
}

type SelectProps = {
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
}

function Select({ options, onChange, value }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      className={styles.container}>
        <span className={styles.value}>{value?.label}</span>
        <TiTimes
          className={styles.delete}
          onClick={e => onChange(options[0])}/>
        <div
          className={styles.divider}>
        </div>
        <FaCaretDown
          className={styles.caret}
          onClick={() => setIsOpen(prev => !prev)}/>
        <ul
          className={`${styles.options} ${isOpen ? styles.show : ""}`}>
            {options.slice(1).map(o => (
              <li
                key={o.label}
                className={styles.option}
                onClick={e => {
                  o !== value ? onChange(o) : undefined;
                  setIsOpen(false);
                }}>
                  {o.value}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Select;
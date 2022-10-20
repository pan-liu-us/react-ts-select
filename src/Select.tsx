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
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>{value?.label}</span>
      <TiTimes className={styles.delete}/>
      <div className={styles.divider}></div>
      <FaCaretDown className={styles.caret}/>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map(o => (
          <li key={o.label} className={styles.option}>
            {o.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select;
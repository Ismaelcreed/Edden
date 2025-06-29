import { useState, useRef } from 'react';
import styles from '../../styles/AuthForm.module.scss';

const FormInput = ({ label, type, name, value, onChange, required }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    return (
        <div className={styles.inputGroup}>
            <input
                ref={inputRef}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required={required}
                className={styles.formInput}
            />
            <label 
                className={`${styles.formLabel} ${(isFocused || value) ? styles.floating : ''}`}
                onClick={() => inputRef.current.focus()}
            >
                {label}
            </label>
        </div>
    );
};

export default FormInput;
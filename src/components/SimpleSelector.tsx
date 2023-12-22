import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/ui/select.module.scss';
import { useDebounce } from '@/hooks/useDebounce';

type Option = {
  value: string;
  label: string;
};

type SimpleSelectorProps = {
  options: Option[];
};

const SimpleSelector: React.FC<SimpleSelectorProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [placeholderValue, setPlaceholderValue] = useState<string>(options?.[0]?.label || '');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [shouldRenderOptions, setShouldRenderOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const debouncedInputValue = useDebounce(inputValue ?? '', 300);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [options]);

  useEffect(() => {
    setFilteredOptions(filterOptions(debouncedInputValue));
  }, [debouncedInputValue, shouldRenderOptions]);

  const handleDocumentClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setDropdownVisible(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShouldRenderOptions(true);
  };

  const filterOptions = (searchText: string) => {
    if (!options) return [];
    const newFilteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchText.trim().toLowerCase()));
    // .sort((a, b) => a.label.localeCompare(b.label));

    return newFilteredOptions;
  };

  const handleInputClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (value: string) => {
    const option = filteredOptions.find((child) => child.value === value);
    if (option) {
      setPlaceholderValue(option.label);
      setSelectedOption(option);
    }
    setInputValue('');
    setDropdownVisible(false);
    setShouldRenderOptions(false);

    const dropdownContent = dropdownRef.current?.querySelector(`.${styles.dropdownContent}`);
    if (dropdownContent) {
      Array.from(dropdownContent.children).forEach((child) => {
        if (child.getAttribute('data-value') === value) return child.classList.add(styles.selected);
        child.classList.remove(styles.selected);
      });
    }
  };

  return (
    <div className={`${styles.simple} ${isDropdownVisible ? styles.show : ''}`} ref={dropdownRef}>
      <input
        type="text"
        id={styles.searchInput}
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder={placeholderValue}
        className={styles.input}
      />
      <div className={styles.dropdownContent}>
        {options &&
          filteredOptions.map((option, index) => (
            <a key={index} data-value={option.value} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SimpleSelector;

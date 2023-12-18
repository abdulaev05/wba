import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/ui/select.module.scss';
import { useDebounce } from '@/hooks/useDebounce';

type SimpleSelectorProps = {
  options: string[];
};

const SimpleSelector: React.FC<SimpleSelectorProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [placeholderValue, setPlaceholderValue] = useState<string>(options?.[0] && options[0]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [shouldRenderOptions, setShouldRenderOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const debouncedInputValue = useDebounce(inputValue ?? '', 3000);

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
    const newFilteredOptions = options
      .filter((option) => option.toLowerCase().includes(searchText.toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    return newFilteredOptions;
  };

  const handleInputClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (index: number) => {
    const option = filteredOptions[index];
    setInputValue('');
    setPlaceholderValue(option);
    setSelectedOption(option);
    setDropdownVisible(false);
    setShouldRenderOptions(false);

    const dropdownContent = dropdownRef.current?.querySelector(`.${styles.dropdownContent}`);
    if (dropdownContent) {
      Array.from(dropdownContent.children).forEach((child) => {
        child.classList.remove(styles.selected);
      });
    }

    const currentSelectedElement = dropdownContent?.children[index];
    currentSelectedElement?.classList.add(styles.selected);
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
            <a key={index} onClick={() => handleOptionClick(index)}>
              {option}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SimpleSelector;

import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default useInput;

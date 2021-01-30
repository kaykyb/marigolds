import { Dispatch, SetStateAction, useState } from "react";

export const useBoolean = (
  defaultValue: boolean = false
): [boolean, Dispatch<SetStateAction<boolean>>, () => boolean] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggle = () => {
    const valueToSet = !value;
    setValue(valueToSet);
    return valueToSet;
  };

  return [value, setValue, toggle];
};

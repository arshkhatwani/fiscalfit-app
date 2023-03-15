import React, { FC, useEffect, useState } from 'react';
import DropDown from 'react-native-paper-dropdown';

interface Props {
  values: any;
  setValues: any;
  categories: {
    label: string;
    value: string;
  }[];
}

const Dropdown: FC<Props> = ({ values, setValues, categories }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [v, setV] = useState<string>(values.category);

  useEffect(() => {
    setValues({ ...values, category: v });
  }, [v]);

  return (
    <DropDown
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={v}
      setValue={setV}
      list={categories}
    />
  );
};

export default Dropdown;

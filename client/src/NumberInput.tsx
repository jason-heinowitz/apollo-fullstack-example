import * as React from 'react';

interface PropType {
  setNumber: any;
}

const NumberInput: React.FC<PropType> = (props: PropType) => {
  const [inputNumber, setInputNumber] = React.useState('10');

  return (
    <>
      <input type="text" value={inputNumber} onChange={(e): void => setInputNumber(e.target.value)} />
      <button type="submit" onClick={(): void => props.setNumber(parseInt(inputNumber, 10))}>Roll!</button>
    </>
  );
};

export default NumberInput;

import Input from './components/input';
import Button from './components/button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [isResult, setIsResult] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setIsResult(false);
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(
      prev => (isResult ? number : `${prev === '0' ? '' : prev}${number}`)
    );
    setIsResult(false); // Reset the flag after starting a new number
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
      setIsResult(true); // Result is now displayed
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setFirstNumber('0');
      setOperation('');
      setIsResult(true);
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
      setIsResult(true);
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      if (Number(currentNumber) === 0) {
        alert("Cannot divide by zero");
        handleOnClear();
      } else {
        const div = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(div));
        setFirstNumber('0');
        setOperation('');
        setIsResult(true);
      }
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;
      }
      setIsResult(true); // Set flag to indicate result is displayed
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="/" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="*" onClick={handleMultNumbers} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;

import { useState } from "react";
import styled, { keyframes } from "styled-components";

const HeadingContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #4a8baf;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-family: "poppins", "sans-serif";
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const CalculatorContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #232946;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-family: "poppins", "sans-serif";
`;

const Display = styled.div`
  font-size: 36px;
  text-align: right;
  color: #ffffff;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Button = styled.button`
  font-size: 24px;
  padding: 15px;
  background-color: #4a8baf;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b6a8f;
    animation: none; /* Disable animation on hover */
  }

  &:active {
    animation: ${pulseAnimation} 0.2s ease;
  }
`;

const ClearButton = styled(Button)`
  grid-column: span 2;
  background-color: #da4167;

  &:hover {
    background-color: #c13a5e;
    animation: none; /* Disable animation on hover */
  }

  &:active {
    animation: ${pulseAnimation} 0.2s ease;
  }
`;

const EqualButton = styled(Button)`
  grid-column: span 2;
  background-color: #8ac926;

  &:hover {
    background-color: #7aba20;
    animation: none; /* Disable animation on hover */
  }

  &:active {
    animation: ${pulseAnimation} 0.2s ease;
  }
`;

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <CalculatorContainer>
      <HeadingContainer>
        <Title>Pie Calculator</Title>
      </HeadingContainer>
      <Display>{input || "0"}</Display>
      <ButtonContainer>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <Button onClick={() => handleButtonClick("+")}>+</Button>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <Button onClick={() => handleButtonClick("-")}>-</Button>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <Button onClick={() => handleButtonClick("*")}>*</Button>
        <Button onClick={() => handleButtonClick("0")}>0</Button>
        <Button onClick={() => handleButtonClick(".")}>.</Button>
        <Button onClick={() => handleButtonClick("/")}>/</Button>
        <ClearButton onClick={handleClear}>C</ClearButton>
        <EqualButton onClick={handleCalculate}>=</EqualButton>
      </ButtonContainer>
    </CalculatorContainer>
  );
};

export default Calculator;

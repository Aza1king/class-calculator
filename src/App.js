import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '',
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  handleClearButtonClick = () => {
    this.setState({
      input: '',
      result: '',
    });
  };

  handleEqualButtonClick = () => {
    try {
      const result = eval(this.state.input);
      this.setState({
        result,
        input: '',
      });
    } catch (error) {
      this.setState({
        result: 'Туура жаз',
        input: '',
      });
    }
  };

  handleSquareRootButtonClick = () => {
    try {
      const result = Math.sqrt(eval(this.state.input));
      this.setState({
        result,
        input: '',
      });
    } catch (error) {
      this.setState({
        result: 'Туура жаз',
        input: '',
      });
    }
  };

  handlePowerButtonClick = () => {
    this.setState((prevState) => ({
      input: prevState.input + '**',
    }));
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <div className="input">{this.state.input}</div>
          <div className="result">{this.state.result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('.')}>.</button>
          <button onClick={this.handleEqualButtonClick}>=</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={this.handleClearButtonClick}>C</button>
          <button onClick={this.handleSquareRootButtonClick}>√</button>
          <button onClick={this.handlePowerButtonClick}>^</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      firstVal: '',
      secondVal: '',
      resultValue: ''
    };
  }
  
  
  updateInputValue = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: parseInt(value)
    });
  };
  
  add = () => {
    const { firstVal, secondVal } = this.state;
    const result = firstVal + secondVal;
    this.props.addToTable(firstVal, secondVal, 'add', result);
    this.setState({ firstVal: '', secondVal: '' })
  };
  
  divide = () => {
    const { firstVal, secondVal } = this.state;
    const result = firstVal / secondVal;
    this.props.addToTable(firstVal, secondVal, 'divide', result.toFixed(2));
    this.setState({ firstVal: '', secondVal: '' })
  };
  
  remainder = () => {
    const { firstVal, secondVal } = this.state;
	 const result = firstVal % secondVal;
    this.props.addToTable(firstVal, secondVal, 'remaind', result);
    this.setState({ firstVal: '', secondVal: '' })	  
   };

	primeHighest = (low, high) => {
	if (low > high) {
		let temp = low;
		low = high;
		high = temp;
	}

	for (let i = high; i >= low; i--) {
		let flag = 0;
		for (let j = 2; j <= i / 2; ++j) {
			if (i % j === 0) {
				flag = 1;
				break;
			}
		}
		if (flag === 0) {
			console.log(i);
			return i
		}
	}
};


  prime = () => {
    const { firstVal, secondVal } = this.state;
	 const result = this.primeHighest(firstVal, secondVal);
	 console.log(result); 
	 this.props.addToTable(firstVal, secondVal, 'prime', result);
    this.setState({ firstVal: '', secondVal: '' })	  
  };
  
  render () {
    return (
      <div>
        <input
          placeholder="first value"
          value={this.state.firstVal}
          name="firstVal"
          onChange={evt => this.updateInputValue(evt)}
        />
        <input
          placeholder="second value"
          value={this.state.secondVal}
          name="secondVal"
          onChange={evt => this.updateInputValue(evt)}
        />
        <button onClick={this.add}>+</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.remainder}>rem</button>
        <button onClick={this.prime}>prime</button>
      </div>
    )
  }
};

export default Calculator;
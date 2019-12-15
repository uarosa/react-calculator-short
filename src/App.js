import React from "react";
// import { render } from "react-dom";
import "./style.css";
import Calculator from './Calculator';
import Table from './Table';


class App extends React.Component {
  state = {
    history: [],
  };
  
  pushToTable = (firstValue, secondValue, action, result) => {
    this.setState({ history: this.state.history
	 .concat([{ firstValue, secondValue, action, result }]) })
  };
 
  
  render() {
    const { history } = this.state;
    return (
      <div className="collection">
        <Calculator
          addToTable={this.pushToTable}
        />
        <Table className="collection-item"
          history={history}
        />     
      </div>
    );
  }
}
export default App;


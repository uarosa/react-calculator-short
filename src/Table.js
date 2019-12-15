import React from 'react';


const Table = ({ history }) => {
  
  console.log(history);
  return (
    <div>
      <table className="striped">
        <thead>
          <tr >
            <td>First Value</td>
            <td>Action</td>
            <td>Second Value</td>
            <td>Result</td>
          </tr>
        </thead>
        
	  	  <tbody>
          {
            history.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.firstValue}</td>
                  <td>{item.action}</td>
                  <td>{item.secondValue}</td>
                  <td>{item.result}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};

export default Table;

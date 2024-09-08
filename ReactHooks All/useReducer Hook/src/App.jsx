import React, { useReducer} from 'react';
import './IncrementDecrementButtons.css'; // Import the CSS file
import Reducer from './Reducer';

const IncrementDecrementButtons = () => {
  let initialValue = 0;
  const [count, dispatch] = useReducer(Reducer, initialValue)

  return (
    <div className="button-container">
      <button className="button decrement" onClick={() => dispatch({type:'INC'})}>+</button>
      <span className="count">{count}</span>
      <button className="button increment" onClick={() => dispatch({type:'DEC'})}>-</button>
    </div>
  );
};

export default IncrementDecrementButtons;

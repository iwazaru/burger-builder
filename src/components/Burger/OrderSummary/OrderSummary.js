import React from 'react';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:
        {props.ingredients[key]}
      </li>
    ));
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to checkout?</p>
    </React.Fragment>
  );
};

export default orderSummary;

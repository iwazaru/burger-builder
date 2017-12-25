import React from 'react';

import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Build controls</div>
      </React.Fragment>
    );
  }
}

import { Component } from 'react';
import { Person } from '../../types';

interface Props {
  item: Person;
}

interface State {}

class PersonItem extends Component<Props, State> {
  render() {
    const { name, height, mass, gender } = this.props.item;
    return (
      <div className="person">
        <div className="person__name">{name}</div>
        <ul className="person__list">
          <li>
            <span className="person__label">Height: </span>
            <span className="person__value">{height}</span>
          </li>
          <li>
            <span className="person__label">Mass: </span>
            <span className="person__value">{mass}</span>
          </li>
          <li>
            <span className="person__label">Gender: </span>
            <span className="person__value">{gender}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default PersonItem;

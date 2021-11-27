import React from 'react';
const Card = props => {
  return (
    <div className="ui placeholder segment">
      {props.children}
    </div>
  );
};

export default Card;

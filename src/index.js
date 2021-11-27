import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js'


const App = () => {
  return (
    <div>
      <Card>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer
        </div>
        <div className="ui primary button">Add document</div>
      </Card>
      <Card>
        <h4 class="ui header">For Your Information</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi doloremque omnis quaerat iure et veritatis sapiente accusantium consectetur hic nisi nam magni eaque eos aliquid officiis, ad saepe soluta.
        </p>
      </Card>
    </div>
  );
};

ReactDOM.render (<App/>, document.querySelector('#root'));

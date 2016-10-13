const React = require('react');

let Nav = require('Nav');

let Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className='row'>
        <div className='columns medium-6 large-5 small-centered'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
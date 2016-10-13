const React = require('react');

let About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a small weather app that I have made to learn <a href="https://facebook.github.io/react/" target="_blank">React</a>. It simply fetch data from the <a href="http://openweathermap.org/" target="_blank">Open Weather Map API</a> and display it. You can see its repo <a href="https://github.com/VonStruddle/React-Playground" target="_blank">here</a>.</p>
      <p>You can found me on <a href="https://github.com/VonStruddle" target="_blank">GitHub</a> and <a href="https://www.linkedin.com/in/qdurantay" target="_blank">Linkedin</a>. I'm currently seeking an internship in Digital Marketing and would be very happy to work with you ;)</p>
    </div>
  );
}

module.exports = About;
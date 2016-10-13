const React = require('react');
const {Link} = require('react-router');

let Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here are some examples you can try:</p>
      <ol>
        <li>
          <Link to='/?location=Bordeaux'>Bordeaux, France</Link>
        </li>
        <li>
          <Link to='/?location=New%20York'>New York, USA</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
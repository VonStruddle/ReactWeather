const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch(e) {
    e.preventDefault();

    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = `#\?location=${encodedLocation}`;
    }
  },

  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Weather App</li>
            <li>
              <IndexLink activeClassName='active' activeStyle={{fontWeight: 'bold'}} to='/'>Get Weather</IndexLink>
            </li>
            <li>
              <Link activeClassName='active' activeStyle={{fontWeight: 'bold'}} to='/about'>About</Link>
            </li>
            <li>
              <Link activeClassName='active' activeStyle={{fontWeight: 'bold'}} to='/examples'>Examples</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather..." ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
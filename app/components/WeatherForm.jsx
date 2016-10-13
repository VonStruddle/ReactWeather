const React = require('react');

let openWeatherMap = require('openWeatherMap');

let WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='search' placeholder='Search weather by city' ref='location'/>
        <button type='submit' className='button expanded hollow'>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
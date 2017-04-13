var React = require('react');
var ReactDOM = require('react-dom');


// ProductItems Component
var Nav = React.createClass({
	getInitialState() {
		return {
			logo: 'https://image.flaticon.com/icons/svg/67/67994.svg'
		}
	},
	render: function () {
		return (
			<div className='nav'>
				<img src={this.state.logo} />
			</div>
		)
	}
});

module.exports = Nav;
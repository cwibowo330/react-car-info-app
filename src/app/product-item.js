var React = require('react');
var ReactDOM = require('react-dom');

var CarItems = React.createClass({
	carInfo(){
		const carCopyInfo = document.querySelector('#car-info-wrap');
		carCopyInfo.innerHTML = `<h1>${this.props.item.prod}</h1>
								<img src=${this.props.item.info.img} />
								<div className="car-info-data">
									<p><img src="https://image.flaticon.com/icons/svg/246/246954.svg"/> ${this.props.item.info.epa} <span>EPA</span></p>
									<p><img src="https://image.flaticon.com/icons/svg/246/246957.svg" /> ${this.props.item.info.hp} <span>HP</span></p>
									<p><img src="https://image.flaticon.com/icons/svg/246/246958.svg"/> ${this.props.item.info.to60} <span>0-60</span></p>
									<p><img src="https://image.flaticon.com/icons/svg/87/87621.svg"/> ${this.props.item.info.speed} <span>TOP SPEED</span></p>
								</div>
								<p className="copy">${this.props.item.info.short}</p>
			`;
	},
	render: function () {
		return (
				<div className='products'>
					<img onClick={this.carInfo} src={this.props.item.img} alt={this.props.item.prod}/>
					<h1>{this.props.item.prod}</h1>
				</div>
		)
	}
});

module.exports = CarItems;
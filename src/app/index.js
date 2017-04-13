var React = require('react');
var ReactDOM = require('react-dom');

// CSS requires
require('./css/index.css');

// Module requires
var Nav = require('./nav');
var CarItems = require('./product-item');

var data = [
	{
		'prod': 'a3',
		'img': 'https://media.ed.edmunds-media.com/audi/a3/2017/oem/2017_audi_a3_sedan_20-tfsi-prestige-quattro_fq_oem_1_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7645.jpg',
			'epa': '24/33',
			'to60': '5.4',
			'hp': '220',
			'speed': '129',
			'short': 'The bite-size A3 wraps up everything we love about Audis in a handsome, nice-handling package. Steering is precise, the ride composed; fit and finish are superb. Four-door sedan and two-door softtop convertible versions are offered. A 220-hp 2.0-liter turbocharged four-cylinder and six-speed automatic drive either the front or all four wheels. A backup camera and 10-speaker audio are standard; adaptive cruise control and an infotainment system with Apple CarPlay and Android Auto are optional.'
		}
	},
	{
		'prod': 'a4',
		'img': 'https://media.ed.edmunds-media.com/audi/a4/2017/oem/2017_audi_a4_sedan_20t-prestige-quattro_fq_oem_12_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7085.jpg',
			'epa': '24/31',
			'to60': '5.1',
			'hp': '252',
			'speed': '130',
			'short': 'The A4 is swift, silent, and sporty—the standard by which its competitors are measured. The exterior is understated; its interior is handsome and sophisticated, with materials that are pleasing to see and touch. Handling is stable, but the overboosted steering is too light at highway speeds. The turbo four makes 252 hp and pairs with a seven-speed automatic. Front-drive is standard; all-wheel drive is optional. Apple CarPlay and Android Auto are standard; a 19-speaker audio system is optional.'
		}
	},
	{
		'prod': 'a5',
		'img': 'https://media.ed.edmunds-media.com/audi/a5/2018/oem/2018_audi_a5_4dr-hatchback_prestige-quattro_fq_oem_1_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7765.jpg',
			'epa': '21/30',
			'to60': '6.1',
			'hp': '220',
			'speed': '130',
			'short': 'Stylish and comfortable, the A5 is available as a coupe, convertible, and sporty four-door. Quattro all-wheel drive is standard for exceptional performance in all conditions. The coupe and convertible use a 220-hp 2.0-liter four-cylinder with a six-speed manual; an eight-speed automatic is optional. The Sportback sports a 2.0-liter turbo four making 252 horsepower with a seven-speed dual-clutch automatic. Those seeking more muscle might consider migrating to the mighty S5 or bahn-burning RS5.'
		}

	},
	{
		'prod': 'a6',
		'img': 'https://media.ed.edmunds-media.com/audi/a6/2017/oem/2017_audi_a6_sedan_30t-prestige-quattro_fq_oem_2_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7709.jpg',
			'epa': '20/30',
			'to60': '4.6',
			'hp': '333',
			'speed': '128',
			'short': 'Sharply creased bodywork and a refined cabin make the A6 a well-tailored option for discerning drivers. The base powertrain is a 252-hp 2.0-liter turbo four, seven-speed automatic, and front-drive; all-wheel drive with an eight-speed automatic is optional. A supercharged 3.0-liter V-6 with all-wheel drive is also available. A 7.0-inch infotainment system is standard; tech such as Apple CarPlay, Android Auto, night vision, adaptive cruise control, and automated emergency braking are optional.'
		}

	},
	{
		'prod': 'a7',
		'img': 'https://media.ed.edmunds-media.com/audi/a7/2017/oem/2017_audi_a7_sedan_prestige-quattro_fq_oem_2_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7731.jpg',
			'epa': '20/30',
			'to60': '4.7',
			'hp': '333',
			'speed': '130',
			'short': 'A fastback roofline gives the A7 both flair and hatchback practicality, while the luxury cabin pampers occupants. Standard all-wheel drive helps get all of the supercharged 3.0-liter V-6’s 333 hp to the ground through an eight-speed automatic. A taut suspension and confident brakes round out the A7’s performance credentials. Smartphone integration with Apple CarPlay and Android Auto is standard. Night vision, automated emergency braking, and adaptive cruise control are optional.'
		}

	},
	{
		'prod': 'a8',
		'img': 'https://media.ed.edmunds-media.com/audi/a8/2016/oem/2016_audi_a8_sedan_l-tdi-quattro_fq_oem_1_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7710.jpg',
			'epa': '18/29',
			'to60': '3.9',
			'hp': '450',
			'speed': '131',
			'short': 'Audi’s A8L is the pinnacle of German über-luxury sedans, with an understated yet impressive design. It’s beautiful inside, too, and the A8 can be athletic when the road gets twisty. A 333-hp 3.0-liter supercharged V-6 is standard; a 450-hp 4.0-liter twin-turbo V-8 is optional. All-wheel drive and an eight-speed automatic transmission are standard on all models.'
		}

	},
	{
		'prod': 'q3',
		'img': 'https://media.ed.edmunds-media.com/audi/q3/2017/oem/2017_audi_q3_4dr-suv_prestige_fq_oem_1_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/8155.jpg',
			'epa': '20/28',
			'to60': '7.8',
			'hp': '200',
			'speed': '126',
			'short': 'While not the quickest or the most efficient of the baby utes, the Q3 is quieter and has a better ride than the competition. Powered by a 200-hp, 2.0-liter turbo four mated to a six-speed automatic, front-wheel drive is standard, and of course, Quattro is optional. The Q3 offers standard HID headlamps, LED taillamps, heated power leather seats, and a panoramic sunroof. Sport and Prestige packages—as well as MMI nav, lane-change assist, a power liftgate, and Bose audio—are available, too.'
		}

	},
	{
		'prod': 'q5',
		'img': 'https://media.ed.edmunds-media.com/audi/q5/2016/oem/2016_audi_q5_4dr-suv_30t-prestige-quattro_fq_oem_1_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/7994.jpg',
			'epa': '22/30',
			'to60': '6.4',
			'hp': '220',
			'speed': '282',
			'short': 'While not the quickest or the most efficient of the baby utes, the Q3 is quieter and has a better ride than the competition. Powered by a 200-hp, 2.0-liter turbo four mated to a six-speed automatic, front-wheel drive is standard, and of course, Quattro is optional. The Q3 offers standard HID headlamps, LED taillamps, heated power leather seats, and a panoramic sunroof. Sport and Prestige packages—as well as MMI nav, lane-change assist, a power liftgate, and Bose audio—are available, too.'
		}

	},
	{
		'prod': 'q7',
		'img': 'https://media.ed.edmunds-media.com/audi/q7/2017/oem/2017_audi_q7_4dr-suv_prestige_fq_oem_2_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/6611.jpg',
			'epa': '19/25',
			'to60': '5.5',
			'hp': '333',
			'speed': '128',
			'short': 'In this class, we expect ample room and comfort, but the Q7 adds agility, earning it a 2017 10Best award. The base engine is a 252-hp 2.0-liter turbo four; a 333-hp 3.0-liter supercharged V-6 is optional. Both engines pair with an eight-speed automatic and all-wheel drive; available four-wheel steering and an air suspension help the Q7 remain composed. The high-quality interior features the latest in infotainment, including the optional Virtual Cockpit, a 12.3-inch driver-facing cluster.'
		}

	},
	{
		'prod': 'r8',
		'img': 'https://media.ed.edmunds-media.com/audi/r8/2017/oem/2017_audi_r8_coupe_v10-plus-quattro_fq_oem_1_276.jpg',
		'info': {
			'img': 'http://buyersguide.caranddriver.com/media/assets/submodel/5824.jpg',
			'epa': '14/22',
			'to60': '2.9',
			'hp': '610',
			'speed': '205',
			'short': 'Audi’s luscious R8 is beautiful to behold, easy to live with, and simply marvelous to drive—everything you’d want in a sports car. The base engine is a 5.2-liter 540-hp V-10; the V10 Plus makes 610 hp. All-wheel drive is standard, as is a seven-speed automatic. The handsome interior features a 12.3-inch configurable display in lieu of traditional gauges; there is also 4G LTE connectivity and Wi-Fi hotspot capability. Only a coupe is offered for now; expect the Spyder version in spring 2017.'
		}

	}
]


//Create CategoryComponent
var CategoryComponent = React.createClass({
	getInitialState() {
		return {
			data: data
		}	
	},
	render: function() {
		var products = this.state.data;
		products = products.map((item, index) => {
			return (
				<CarItems item={item} key={index} />
			)
		});

		return (
			<div className='container'>
				<Nav />
				<div id="product-container">
				{products}
				</div>
				<div id="car-info">
					<div id="car-info-wrap">Select A Car</div>
				</div>
			</div>
		)
	}
});



ReactDOM.render(<CategoryComponent />, document.getElementById('app'));
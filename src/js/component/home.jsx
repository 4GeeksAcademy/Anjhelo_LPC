import React from "react";
import NavBar from './navBar';
import Jumbotron from './Jumbotron';
import Card from './Card';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron/>
				<div className="row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
		</>
	);
};

export default Home;

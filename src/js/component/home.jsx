import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

//create your first component
const Home = (props) => {
	console.log(props)
	return (
<div className="bigCounter">
      <div className="calendar">
	  <FontAwesomeIcon icon={faClock} />
	  </div>			
		<div className="six">{props.hora2}</div>
		<div className="five">{props.hora1}</div>
      <div className="four">{props.minuto2}</div>
      <div className="three">{props.minuto1}</div>
      <div className="two">{props.segundo2}</div>
      <div className="one">{props.segundo1}</div>
		</div>
	);
};

export default Home;


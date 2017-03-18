import React from 'react';
import ReactDOM from 'react-dom';





//create component
const App = () => {


return (
	<div>
	React App #2
	</div>
);



};


// Render to screen

Meteor.startup(()=> {

ReactDOM.render(<App />, document.querySelector('.container'));

});




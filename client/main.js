import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';





//create component
const App = () => {


return (
	<div>
	<ImageList />
	</div>
);



};


// Render to screen

Meteor.startup(()=> {

ReactDOM.render(<App />, document.querySelector('.container'));
axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
.then(response => console.log(response));

});




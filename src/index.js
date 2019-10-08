import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// For importing the file which we create we need to give a file refrence for that.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCLPKBpS-yxjdmSL81Qsr-1FZ5rQjOTodI';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], selectedVideo: null };

		// Callback function similar to Jquery AJAX
		// YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
		// 	this.setState({ videos: data });
		// });

		// A handy way to setState
		// YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		// 	this.setState({ videos });
		// });		
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ videos: videos, selectedVideo: videos[0] });
		});
	}

	render() {
		//debounce takes inner videoSearch function and return another outer videoSearch function which helps in 
		//calling inner videoSearch function every 300 milliseconds
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

		// we are passing data list of videos to VideoList
		// Passing data from one component to another.
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}



// // Create a new component. This component will produce some HTML.
// // const is ES6 and hence can't be interpreted by the browser, using bable we can convert the following JSX to vanilla JS.
// const App = () => {
// 	// This return type is a JSX
// 	return (
// 		<div> 
// 			<SearchBar /> 
// 		</div>
// 	);
// };

/// Take this component's generated HTML and put it on the page(in the DOM).
// Find the element with class=container in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
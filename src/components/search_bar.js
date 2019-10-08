import React, { Component } from 'react';

// {Component} is similar to const 		Component = React.Component;

// Instead of creating a function we can create a class. 
// const SearchBar = () => {
// 	return <input />;
// };

// Class based approach is used whenever we have a concept of state in our component.

// Render is just like a constructor which is called whenver the class instance is created
// In the render function you always need to return some JSX.
// In the constructor we are creating state
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: '' };
	}

	render() {
		// We want to update the state whenever the user starts typing on searchbar.
		// While using javascript object with JSX, we enclose it with curly braces.
		return (
			<div className="search-bar"> 
				<input 
				value = {this.state.term}
				onChange={(event) => this.onInputChange(event.target.value)}/>
			</div>
		);
	}




	/// render() {
	// 	return <input onChange={event => console.log(event.target.value)} />;
	// }

	// User defined function to record the keypress on the searchbar
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}



export default SearchBar;
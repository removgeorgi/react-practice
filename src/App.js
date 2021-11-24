import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const stories = [
		{
			title: 'React',
			url: 'https://reactjs.org/',
			author: 'Jordan Walke',
			num_comments: 3,
			points: 4,
			objectID: 0
		},
		{
			title: 'Redux',
			url: 'https://redux.js.org/',
			author: 'Dan Abramov, Andrew Clark',
			num_comments: 2,
			points: 5,
			objectID: 1
		}
	];

	const [ searchTerm, setSearchTerm ] = React.useState(localStorage.getItem('search') || 'React');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);

		localStorage.setItem('search', event.target.value);
	};

	const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

	React.useEffect(() => {
		localStorage.setItem('search', searchTerm);
	}, []);

	return (
		<div>
			<h1>My hacker stories</h1>

			<InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch} />

			<hr />

			<List list={searchedStories} />
		</div>
	);
};

const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => (
	<div>
		<label htmlFor={id}>{label}</label>
		<input id={id} type={type} value={value} onChange={onInputChange} />
	</div>
	/* onChange attribute is needed first to add logging events of what was inputted
      and second to add synthetic events which prevents native browser behavior
      (e.g. refreshing a page after the user clicks a form's submit button) */
);

const List = ({ list }) => <ul>{list.map((item) => <Item key={item.objectID} item={item} />)}</ul>;

const Item = ({ item }) => (
	<li>
		<span>
			<a href={item.url}>{item.title}</a>
		</span>
		<span>{item.author}</span>
		<span>{item.num_comments}</span>
		<span>{item.points}</span>
	</li>
);

export default App;

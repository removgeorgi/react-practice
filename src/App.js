import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const stories = [
    {
      title:'React',
      url:'https://reactjs.org/',
      author:'Jordan Walke',
      num_comments:3,
      points:4,
      objectID:0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];
    const [searchTerm,setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');
  
    const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    localStorage.setItem('search', event.target.value)
    }

    React.useEffect(() => {
      localStorage.setItem('searh',searchTerm)
    },[searchTerm]);

    const searchedStories = stories.filter((story)=>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()));

    
  
    // const handleSearch = (event) => {
    //   console.log(event.target.value);
    // };

    return (
    <div>
      <h1>My hacker stories</h1>

  <Search search ={searchTerm} onSearch={handleSearch} />
      
    <hr />

  <List list={searchedStories} />

    </div>
  );
};

const List = (props) => (
      <ul>
          {props.list.map((item)=>(
            <Item key={item.objectID} item={item} />
          ))}
      </ul>
);

const Search = (props) => (
     // const handleChange = (event)=>{
    //   console.log(event.target.value);

  
    
  <div>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={props.onSearch} value={props.search} />
      {/* onChange attribute is needed first to add logging events of what was inputted
      and second to add synthetic events which prevents native browser behavior
      (e.g. refreshing a page after the user clicks a form's submit button) */}
  </div>
);


const Item = (props) => (
  <li key={props.item.objectID}>
            <span>
              <a href={props.item.url}>{props.item.title}</a>
            </span>
            <span>{props.item.author}</span>
            <span>{props.item.num_comments}</span>
            <span>{props.item.points}</span>
  </li>
);

export default App;


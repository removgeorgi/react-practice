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
    const handleSearch = (event) => {
      console.log(event.target.value);
    };

    return (
    <div>
      <h1>My hacker stories</h1>

  <Search onSearch={handleSearch} />
      
    <hr />

  <List list={stories} />

    </div>
  );
    }

const List = (props) => (
      <ul>
          {props.list.map((item)=>(
            <Item key={item.objectID} item={item} />
          ))}
      </ul>
);

const Search = (props) => {
  const [searchTerm,setSearchTerm] = React.useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    
      props.onSearch(event);
    }

    // const handleChange = (event)=>{
    //   console.log(event.target.value);

    

    const handleCLick = () =>{
      console.log('Button click...');
    } 
  
    return(
  <div>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={handleChange}/>
      {/* onChange attribute is needed first to add logging events of what was inputted
      and second to add synthetic events which prevents native browser behavior
      (e.g. refreshing a page after the user clicks a form's submit button) */}
    <hr />
    <p>
    Searching for:<strong>{searchTerm}</strong>
    </p>
  </div>
  );
};


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

const foo = ['one','two','three'];
const [red,yellow,green] = foo;

console.log(red);

export default App;


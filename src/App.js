import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';

const list = [
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
  },
];

const App = () => (
    <div>
      <h1>My hacker stories</h1>

    <Search />
      
    <hr />

  <List />

    </div>
  );
  

const List = () => (
  <ul>
          {list.map((item)=>{
          return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
          );
        })}
      </ul>
);

const Search = () => {
    const [count,setCount] = React.useState(0);

    function handleChange(event){
      console.log(event);
    }

    function handleCLick(){
      console.log('Button click...');
    } 
  
    return(
      <div>
  <div>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={handleChange}/>
      {/* onChange attribute is needed first to add logging events of what was inputted
      and second to add synthetic events which prevents native browser behavior
      (e.g. refreshing a page after the user clicks a form's submit button) */}
    <button id="search" type="button" onClick={handleCLick} >Search</button>
  </div>
  <div>
    Count: {count}
    <button
      type="button"
      onClick={function(){
        setCount(count + 1);
      }}
    >
    Test
    </button>
  </div>  
  </div>
  );
};


export default App;
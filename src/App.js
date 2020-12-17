//import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal';

function App() {
  
  // let dataArr = [
  //   { id: 2, name: "Ed", location: "Lake"},
  //   { id: 10, name: "Vin Cecil", location: "Tree"}
  // ]

  // let listItem = dataArr.map((currentItem) => {
  //   return (
  //     <li key={currentItem.id}> 
  //         ID: {currentItem.id}
  //         Name: {currentItem.name}
  //         Location: {currentItem.location}</li>
  //   )
  // })
  return (
    <div className="App">
      
      <Animal />
      {/* {listItem} */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

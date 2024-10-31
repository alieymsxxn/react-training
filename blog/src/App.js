import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  const title = "Welcome to the new blog";
  const names = ['mario', 'luigi', 'yoshi'];
  const google_url = 'https://www.google.com';
  const book = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pages: 394
  }
  return (
    <div className="App">
      <Navbar/>
      {/* <div className="content">
        <h1>{ title }</h1>
        <h2>{ [1, 2, 3, 4, 5] }</h2>
        <h2>{ Math.random() * 10 }</h2>
        <a href={ google_url }>Google</a>
      </div> */}
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bookshelf from './Components/Bookshelf';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <div>
      {/* <Searchbar/> */}
      {/* <Bookshelf/> */}
      <Routes>
        <Route path='/' element={<Searchbar/>}/>
        <Route path='/books' element={<Bookshelf/>}/>
        <Route path='/books/:id' element={<Bookshelf/>}/>
      </Routes>
    </div>
  );
}

export default App;




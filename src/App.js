import './App.css';
import Navbar from './components/Navbar';
import Pots from './components/Pots';
import AddPost from './components/AddPost';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div id='signInDiv'></div>
      <Routes>
        <Route path='/' element={<Pots/>}/>
        <Route path='/addpost' element={<AddPost/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

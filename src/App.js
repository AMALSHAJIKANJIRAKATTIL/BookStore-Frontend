import './App.css';
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import BookPage from './pages/BookPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>


<Route path='/' exact element={<LandingPage/>}></Route>
<Route path='/book/:id' exact element={<BookPage/>}></Route>
<Route path='/search' exact element={<SearchPage/>}></Route>
</Routes>

</BrowserRouter>
      

</div>
  );
}

export default App;

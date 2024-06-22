import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';

// To render multiple pages on a single page, we can use a Router and Switch between pages using Routes
function App(){
  
  return(
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './components/Home/Home'
import Police from './components/Police/Complaint'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Police' element={<Police/>}/>
      </Routes>
    </Router>
  );
}

export default App;
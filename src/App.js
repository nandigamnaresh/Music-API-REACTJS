import './App.css';
import Music from './Music';
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
// import Nav from './Nav';
// import Pvn from './pvn';
// import Artist from './Artist';
import Fav from './Fav';
import Login from './Login';
import Nav from './Nav';
import Release from './Release';
import Albums from './Albums';
import { useState } from 'react';


function App() {
const[a ,b]=useState(0)

const [favorites, setFavorites] = useState([]);

const setvenkat=(track)=>{
  setFavorites([...favorites,track])
}

  return (
    <div className='container-fluid'>
      <Router>
      <LoadingBar color='red' progress={a}  height="5px"   onLoaderFinished={()=>b(0)}/>
        <Nav/>
            <Routes>
              
              <Route path='/album' element={<Albums setProgress={b}/>}     />
              <Route path='/'      element={<Release setProgress={b}/>}    />
              <Route path='/music' element={<Music setProgress={b} setvenkat={setvenkat}/>}      />
              <Route path='/login' element={<Login setProgress={b}/>}        />
              <Route path='/fav'      element={<Fav setProgress={b} favorites={favorites} setFavorites={setFavorites}/>}    />
            </Routes>
         
      </Router>
  
    </div>
  );
}

export default App;

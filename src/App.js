import {Route,Routes} from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import Search from './pages/Search';
import Faviorites from './pages/Faviorites';
import Playlist from './pages/Playlist';
import './App.scss'
import React from 'react';
import Landing from './pages/Landing'

function App() {
React.useEffect(() => {
 if (! localStorage.getItem('myList','[]') && ! localStorage.setItem("myPlaylist","[]") ){
  localStorage.setItem("myList","[]")
  localStorage.setItem("myPlaylist","[]")
 } 
 else{
return

 }
}, [])

  return (
  <div className="App" >
   <SideNav/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/faviorites' element={<Faviorites/>} />
    <Route path='/playlist' element={<Playlist/>} />
</Routes>

    </div>
  );
}

export default App;

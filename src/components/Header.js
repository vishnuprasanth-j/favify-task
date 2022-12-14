import React from 'react'

//import {ReactComponent as Hsvg} from '../assets/wave.svg';
import './der.scss';

function Header({title}) {
  return (
    <div class="wave-container">
  <div class="text-container">
    <span>{title}</span>
   
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffe8ed" fill-opacity=".4" d="M0,32L21.8,74.7C43.6,117,87,203,131,250.7C174.5,299,218,309,262,282.7C305.5,256,349,192,393,186.7C436.4,181,480,235,524,245.3C567.3,256,611,224,655,218.7C698.2,213,742,235,785,245.3C829.1,256,873,256,916,256C960,256,1004,256,1047,261.3C1090.9,267,1135,277,1178,277.3C1221.8,277,1265,267,1309,256C1352.7,245,1396,235,1418,229.3L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
</svg>

</div>
  
  )
}

export default Header
import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Header from '../components/Header'
import './Home.scss'
import Cardcomp from '../components/Card';

const Home = () => {
  const[favdata,setfavdata]=React.useState()
  const[playlistdata,setplaylistdata]=React.useState()

React.useEffect(()=>{
  let fav = JSON.parse(localStorage.getItem("myList", "[]"));
   setfavdata(fav)
  let playlist=localStorage.getItem("myPlaylist","[]")
  setplaylistdata(playlist)
},[])
return <div className='home'>
<section className="header" style={{marginBottom:'5rem'}}>
<Header title={'Home'}/>
 </section>
 <Container fluid>
   <span id='heading'>Your Faviorites</span> 
   <Row className="mx-2 rows-cols-6  justify-content-lg-start  justify-content-sm-center row ">
          {
            favdata?favdata.map((data,index)=>{

return <Cardcomp data={data}  index={index} isbutton={false} Hover={false}/>

}):<h1>Nothing to show</h1>
            }
          </Row>
 </Container>
 
  </div>

}

export default Home

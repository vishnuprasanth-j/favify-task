import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './Faviorites.scss';
import Cardcomp from '../components/Card';
import Header from '../components/Header';


function Faviorites() {
  const[favdata,setfavdata]=React.useState()
  React.useEffect(() => {
    const myList = JSON.parse(localStorage.getItem("myList", "[]"));
   setfavdata(myList)
  }, [])
  
  return (
    <div className='favioritesPage'>
      <Header title="faviorites"/>
          <Row className="mx-2 rows-cols-6  justify-content-lg-start  justify-content-sm-center row ">
          {
            favdata&& favdata.map((data,index)=>{

return <Cardcomp data={data}  index={index} isbutton={false} Hover={false}/>

})
            }
          </Row>
    </div>
  )
}

export default Faviorites
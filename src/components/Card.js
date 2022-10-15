
import React from 'react'
import {Modal,Card,Button, ButtonGroup,ListGroup,ListGroupItem} from 'react-bootstrap'
import './Card.scss'



function Cardcomp({data,setfaviorite,index,isbutton,Hover}) {

    const[playlist,setPlaylist]=React.useState([])
    const [show, setShow] = React.useState(false);
    const[active,setactive]=React.useState(false)
   const[selectedsong,setSelectedsong]=React.useState('') 
  
    React.useEffect(()=>{
      let myPlaylist =JSON.parse(localStorage.getItem("myPlaylist", "[]"));
      if ((myPlaylist).length>0) {setPlaylist([...myPlaylist])}
    },[])
    const handleClose = () => setShow(false);
    const handleShow = (e) =>{
      console.log(data)
      setSelectedsong(data); setShow(true)
    }
  
    const handleClick=(e)=>{
      let myPlaylist =JSON.parse(localStorage.getItem("myPlaylist", "[]"));
      console.log(e.target.attributes.getNamedItem("name").value)
      const selectedPlaylist=e.target.attributes.getNamedItem("name").value
    
     let data= myPlaylist.map(i=>{
        if(i.name === selectedPlaylist){

                      if(i.songs.filter(j=>j.title===selectedsong.title).length>0){
                        return {
                          ...i
                        }
                    }
                    else{
               
                      return {
                        ...i,
                        songs:[...i.songs,selectedsong]
                      }
                    }

      }        else{
        return i
                }}, )
   //  setPlaylist([...playlist].map(i=>{
   //     if(i.name === selectedPlaylist){
//
   //                   if(i.songs.filter(j=>j.title===selectedsong.title).length>0){
   //                     return {
   //                       ...i
   //                     }
   //                 }
   //                 else{
   //            
   //                   return {
   //                     ...i,
   //                     songs:[...i.songs,selectedsong]
   //                   }
   //                 }
//
   //   }        else{
   //     return i
   //             }}))
   //;
   localStorage.setItem("myPlaylist", JSON.stringify(data))
    }
  return (<>

      <Card className={Hover?'card card card-hover ':'card card'}  style={{ width:'12rem',marginRight:'0.5rem', marginBottom:'0.5rem' ,backgroundColor:'rgb(246, 246, 242)'}} onMouseLeave={()=>setactive(false)} onMouseEnter={()=>{setactive(true)}} >
      {isbutton&&active&&<ButtonGroup className='d-flex position-absolute' style={{top:'50%',left:'30px'}}>
      <Button variant="primary" className='btn'  value={index} onClick={(e)=>setfaviorite(e.target.value)}>Faviorite</Button>
      <Button variant="primary" className='btn' value={data.id} onClick={(e)=>{
        handleShow(e)
      }}>+</Button>
      </ButtonGroup>}
    <Card.Img  className="c-img pt-1 img-fluid" variant="top" src={data.image} />
    <Card.Body>
      <Card.Title  className="c-title">{data.title}</Card.Title>
      <Card.Text  className="c-text">
       {data.artist}
      </Card.Text>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select the Playlist
            

          <ListGroup>
       {playlist&&playlist.map((i)=>{
        return <ListGroupItem name={i.name} onClick={(e)=>handleClick(e)}>
       <span>{i.name}</span>
        </ListGroupItem>
       })}
       </ListGroup>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>

  </>
  )
}

export default Cardcomp




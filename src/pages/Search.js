
import React, { useState } from "react";
import { Form, Button, Container, InputGroup, Row, Dropdown} from "react-bootstrap";
import Cardcomp from '../components/Card';
import SpotifyWebApi from 'spotify-web-api-node';
import './Search.scss';
import {ReactComponent as Sicon} from '../assets/search_black_24dp.svg'
import Header from '../components/Header'

function Search() {
  const [searchinput, setsearchinput] = React.useState("");
  const [songdata, setsongdata] = React.useState();

 const ClientID = 'f9706d547ea54882b36470c1e7f3beee'
 const ClientSecret ='46fa86972dc743d7bccd5b875a725fd7'
 const [accesstoken, setaccesstoken] = React.useState('')


  const [test, settest] = useState([])
 var spotifyApi = new SpotifyWebApi();

 React.useEffect(() => {
  const authparameters={
    method:'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
    },
    body:'grant_type=client_credentials&client_id=' + ClientID + '&client_secret=' + ClientSecret
  }
    fetch('https://accounts.spotify.com/api/token',authparameters).then((res)=>res.json()).then((res)=>setaccesstoken(res.access_token))
console.log("render")
  }, [])

  React.useEffect(()=>{
    if(accesstoken){
      spotifyApi.setAccessToken(accesstoken)
      if (searchinput.length>0){
      spotifyApi.searchTracks(searchinput).then(res=>settest(res.body.tracks.items.map((item)=>{      
        return{title:item.name}
      })
      )); console.log(test)}}
  },[searchinput])

  const search_func=async()=>{
  
   spotifyApi.setAccessToken(accesstoken)
   spotifyApi.searchTracks(searchinput)
   .then((res)=>setsongdata(res.body.tracks.items
    .map(item=>{

     const smallestimage=item.album.images.reduce((smallest,image)=>{
       if(image.height>smallest.height) return image
       return smallest
       
     },item.album.images[0])

    return{
     id:item.id,
     artist:item.artists[0].name,
     title:item.name,
     image:smallestimage.url
    }
   }
   ))
   )
  }

  const setfaviorite =(n)=>{
    let myList = JSON.parse(localStorage.getItem("myList", "[]"));
    console.log(songdata[n].id)

  if (myList.filter(item => item.id === songdata[n].id).length > 0){
     console.log('already exist')
  }
    else{
      myList.push(songdata[n])
      localStorage.setItem("myList", JSON.stringify(myList));
    }
  }

  const setplaylist =(n)=>{
    let myPlaylist =JSON.parse(localStorage.getItem("myPlaylist", "[]"));

  if (myPlaylist.filter(item => item.id === songdata[n].id).length > 0){
     console.log('already exist')
  }
    else{
      myPlaylist.push(songdata[n])
      localStorage.setItem("myPlaylist", JSON.stringify(myPlaylist));
    }
  }
  return (
    <div className="searchPage" > 
    <section className="header" style={{marginBottom:'5rem'}}>
    <Header title={'Search'}/>
     </section>
      <Container fluid>
        <InputGroup className="mb-3" size='lg'>
          <Form.Control
            type="text"
            placeholder="Enter the song Name"
            onChange={(event) => 
            { 
              setsearchinput(event.target.value)}}        
               onKeyPress={(e)=>{
            if(e.key === 'Enter' ){
              search_func()

     }
          }

                     }

 
            value={searchinput}
            className='S-bar w-75'
            style={{borderRadius:'30px'}}
          />
          <Button className='border-0'
     style={{borderRadius:'30px'}}
            onClick={(e) => {
              search_func()
            }}
            on
          >
            <Sicon/>
          </Button>
         
        </InputGroup>
      </Container>
{/*<Container fluid>
  {
    test&&test.map((i)=>{
    return  i.title
  })
  }
</Container>*/}
      <Container fluid>
      <Row className="mx-2 rows-cols-6 d-flex-column justify-content-lg-around  justify-content-sm-center row">
        {
          songdata&&songdata.map((data,index)=>{

          return <Cardcomp data={data} setplaylist={setplaylist} setfaviorite={setfaviorite} index={index} isbutton={true} Hover={true}/>

          })
        }
        </Row>
      </Container>
    </div>
  );
}

export default Search;

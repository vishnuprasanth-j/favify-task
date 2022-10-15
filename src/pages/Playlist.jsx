
import React from "react";
import {
  Form,
  Modal,
  Button,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./Playlist.scss";
import Header from '../components/Header';

function Playlist() {
  let textInput = React.createRef();
  const [show, setShow] = React.useState(false);
  const [playlistname, setPlaylistname] = React.useState([]);
  const [toggle, setToggle] = React.useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    let myPlaylist = JSON.parse(localStorage.getItem("myPlaylist", "[]"));
    if (myPlaylist.length > 0) {
      setPlaylistname([...myPlaylist]);
    }
  }, []);



  const toggleFunction=(id)=> {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }

  const handleSubmit = () => {
    const pname = textInput.current.value;

    if (pname.length < 1) {
      alert("Type something valid");
      return;
    }
    if (pname.length > 20) {
      alert("Max Length is 20");
      return;
    }
    let myPlaylist = JSON.parse(localStorage.getItem("myPlaylist", "[]"));
    if (!myPlaylist.filter((item) => item.name === pname).length > 0) {
      myPlaylist.push({ name: pname, songs: [] });
      setPlaylistname([...playlistname, { name: pname, songs: [] }]);
    }
    localStorage.setItem("myPlaylist", JSON.stringify(myPlaylist));
    handleClose();
  };

  const handleDelete = (e) => {
    let myPlaylist = JSON.parse(localStorage.getItem("myPlaylist", "[]"));
    let data = myPlaylist
      .map((i) => {
        if (i.name === e.target.value) {
          return;
        } else {
          return {
            ...i,
          };
        }
      })
      .filter((j) => j != null);
    localStorage.setItem("myPlaylist", JSON.stringify(data));
    setPlaylistname(data);
  };

  return (
    <div className="playlistPage w-100">
      <section className="header" style={{marginBottom:'5rem'}}>
     < Header title={'Playlist'}/>
      </section>
      <section className="body">
        <Container fluid className="mb-2 d-flex justify-content-center" >
          <Button variant="primary"   className='cp-btn' onClick={() => handleShow()}>
            Create a playlist
          </Button>
        </Container>

        <Container>
          <ListGroup>
            {playlistname &&
              playlistname.map((i, index) => {
                return (<>
                  <ListGroupItem  className='pl-grp' style={{ borderRadius: '42px'}}>
                    <span className="pl-name">{i.name}</span>
                    <Button  onClick={() => console.log( toggleFunction(index))}>view</Button>
                    <Button className="btn-danger" value={i.name} onClick={(e) => handleDelete(e)}>
                      delete
                    </Button>
                   
                  </ListGroupItem>
                  <ListGroupItem className='s-grp' style={{ display: toggle[index] ? 'block' : 'none',marginBottom:'20px' ,border:'none'}}>
                  <ListGroup > 
                    {
                      i.songs.map((j,index)=>{
                        return <ListGroupItem key={i.id} className='d-flex justify-content-start mb-1' style={{borderRadius:'30px',color:'black',backgroundColor:'#ffe8ed'}}> 
                         <img src={j.image} style={{width:'2rem',borderRadius:'20px',marginRight:'0.5rem'}}></img>
                         <span style={{flex:'1'}}>{j.title}</span> 
                         <span >{j.artist}</span> 
                        </ListGroupItem>
                       })
                    }
                    </ListGroup>
                  </ListGroupItem>
                  </>
                );
              })}
          </ListGroup>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Playlist Name</Form.Label>
                <Form.Control type="text" ref={textInput} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => handleSubmit()}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  );
}

export default Playlist;

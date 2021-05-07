import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'antd';
import '../App.css';
import { getAlbum } from '../services/APIservice';

export default function MainComponent() {
  const [itemList, setitemList] = useState([])

  useEffect(async() => {
    let tmp = []
    tmp.push(await getAlbum(4))
    tmp.push(await getAlbum(2))
    tmp.push(await getAlbum(5))
    setitemList(tmp)
  }, [])
  

  return (
  <div className="main_parent">
    {/* carrousel */}
    <form className="nav_search">
        <input className="form-control mr-sm-2 nav_input_bar" type="text" size="30" placeholder="Search" value="" />  {/* onChange={handleChange} */}
        <button className="btn btn-secondary my-2 my-sm-0" type="submit" >Search</button> {/* onClick={handleSubmit} */}
    </form>
    <div className="carousel_container" >
      <Carousel autoplay>
          <div className="carousel">
            <a>
              <img src="./image/baniere_jaune.jpg" style={{borderRadius: "6px", height: 750}} width="100%"></img>
            </a>
          </div>
          <div className="carousel">
            <a>
              <img src="./image/baniere_blanc.jpg" style={{borderRadius: "6px", height: 750}} width="100%"></img>
            </a>
          </div>
          <div className="carousel">
            <a>
              <img src="./image/baniere_blue.jpg" style={{borderRadius: "6px", height: 750}} width="100%"></img>
            </a>
          </div>
          <div className="carousel">
            <a>
              <img src="./image/banier_purpule.jpg" style={{borderRadius: "6px", height: 750}} width="100%"></img>
            </a>
          </div>
      </Carousel>
    </div>
    {/* nos produit */}
    <h3 className="text-center title_section">HOT DEALS</h3>
    <div className="Produit_phare">
      {
          itemList.map((album)=>{
          console.log('album', album)
          const imageURL = "url('http://localhost:1337" + album.image.url + "')"
          return(
            <div className="card_album mx-auto " style={{backgroundImage: imageURL}}>
              <p className="album_name">{album.name}</p>
            </div>
          )
        })
      }
    </div>
    {/* pres entreprise */}
    <h3 className="text-center title_section">ABOUT US</h3>
    <div className="pe">
      <div className="abtype">
        <p className="peP" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam cum autem veniam? Rem beatae explicabo doloremque, odio inventore non voluptates consequuntur quae est corrupti cumque dolorum necessitatibus, quasi officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores alias soluta non qui atque odio aperiam, autem ratione illum quaerat a quos fugiat officia hic sunt voluptatum adipisci distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequuntur quos non temporibus, sapiente quo ratione corporis rerum a, eveniet soluta, optio facilis reiciendis distinctio totam vel amet harum fugiat.</p>
        <img className="peImage" src="./image/buisness_pic.jpg" height="300px"/>
      </div>
    </div>
  </div>
  )
}

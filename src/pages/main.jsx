import React from 'react'
import { Carousel, Card } from 'antd';
import '../App.css';

export default function MainComponent() {

  const { Meta } = Card;

  return (
  <div className="main_parent">
    {/* carrousel */}
    <div className="carousel_container" >
      <Carousel autoplay>
          <div className="carousel">
            <a>
              <img src="https://picsum.photos/2500/500" ></img>
            </a>
          </div>
          <div className="carousel">
            <a>
              <img src="https://picsum.photos/2500/500" ></img>
            </a>
          </div>
          <div className="carousel">
            <a>
              <img src="https://picsum.photos/2500/500" ></img>
            </a>
          </div>
          <div className="carousel">
            <a>
              <img src="https://picsum.photos/2500/500" ></img>
            </a>
          </div>
      </Carousel>
    </div>
    {/* nos produit */}
    <h3>Nos Produits Phares</h3>
    <div className="Produit_phare">
      <Card className="cards card1" hoverable cover={<img alt="example" src="https://picsum.photos/300/400" />} >
        <Meta title="Music description" />
      </Card>
      <Card className="cards card2" hoverable cover={<img alt="example" src="https://picsum.photos/300/400" />} >
        <Meta title="Card description" />
      </Card>
      <Card className="cards card3" hoverable cover={<img alt="example" src="https://picsum.photos/300/400" />} >
        <Meta title="Card description" />
      </Card>
      <Card className="cards card4" hoverable cover={<img alt="example" src="https://picsum.photos/300/400" />} >
        <Meta title="Card description" />
      </Card>
      <Card className="cards card5" hoverable cover={<img alt="example" src="https://picsum.photos/300/400" />} >
        <Meta title="Card description" />
      </Card>
    </div>
    {/* pres entreprise */}
    <h3>Presentation de l'entreprise</h3>
    <div className="pe">
      <div className="abtype">
        <p className="peP" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam cum autem veniam? Rem beatae explicabo doloremque, odio inventore non voluptates consequuntur quae est corrupti cumque dolorum necessitatibus, quasi officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores alias soluta non qui atque odio aperiam, autem ratione illum quaerat a quos fugiat officia hic sunt voluptatum adipisci distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequuntur quos non temporibus, sapiente quo ratione corporis rerum a, eveniet soluta, optio facilis reiciendis distinctio totam vel amet harum fugiat.</p>
        <img className="peImage" src="https://picsum.photos/200/200" />
      </div>
    </div>
  </div>
  )
}

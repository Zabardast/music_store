import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../services/APIservice'
import { Carousel, Card } from 'antd';

export default function Artiste() {

    const { Meta } = Card;

    const [artists_list, set_lst] = useState([])
    useEffect(async () => {
        let artistslist = ((await getAllArtists()))
        console.log(artistslist)
        if(artistslist) {
            set_lst(artistslist)
            console.log(artistslist)
        }
    }
    , [])

  return (
    <div className="item_page">
      {artists_list.map((post)=>{
          console.log("loop++")
          return(
                <Card className="cards card1" hoverable cover={<img alt="example" src={post.image.name} />} >
                    <Meta title={post.name} />
                </Card>
            )
      })}
    </div>
  )
}

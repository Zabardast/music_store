import React, { useEffect, useState } from 'react'
import { getAllAlbum } from '../services/APIservice'
import { Card } from 'antd';
import '../App.css'
import AlbumModal from '../components/albumModal'

export default function Album({a_onCartChanged}) {
    const { Meta } = Card;
    //load data
    const [albums_list, set_lst] = useState([])
    useEffect(async () => {
        let albumslist = ((await getAllAlbum()))
        console.log(albumslist)
        if(albumslist) {
            set_lst(albumslist)
            console.log(albumslist)
        }
    }
    , [])

    const [modalState, setModalState] = useState(false)
    const [t_album, set_album]     = useState(false)

    const onCartChanged = () => {
        a_onCartChanged()
    }

    return (
    <div className="item_page">
        <AlbumModal album={t_album} modalVisible={modalState} handleModalState={setModalState} onCartChanged={onCartChanged} />
        {albums_list.map((album)=>{
            const imageURL = "url('http://localhost:1337" + album.image.url + "')"
            return(
                <div className="card_album mx-auto" style={{backgroundImage: imageURL}} onClick={ () => { set_album(album); setModalState(true)} } >
                    <p className="album_name">{album.name}</p>
                </div>
                // <Card key={album.id} className="cards card1" hoverable cover={<img alt="example" src={"http://localhost:1337"+album.image.url} />} onClick={ () => { set_album(album); setModalState(true)} }>
                //     <Meta title={album.name} description={album.price+"$"} />
                // </Card>
            )
        })}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Modal from 'antd/lib/modal/Modal';
import { getAllAlbum } from '../services/APIservice'
import { Card } from 'antd';
import '../App.css'

function send_data(modal_list) {

}

export default function Album() {
    const { Meta } = Card;
    const modal_list = []
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

    //display modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // const send_data = (music) => {
    //     modal_list = music
    // }

    return (
    <div className="item_page">
        <Modal title="list of musics in the album" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        {albums_list.map((post)=>{
            console.log("loop++")
            return(
                <Card className="cards card1" hoverable cover={<img alt="example" src={post.image.name} />} onClick={ showModal }>
                    <Meta title={post.name} description={post.price+"$"} />
                </Card>
            )
        })}
    </div>
  )
}

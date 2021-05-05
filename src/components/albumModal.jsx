import React, { useContext, useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import { Button } from 'antd';
import { Add } from '../services/APIcart'

export default function AlbumModal({ album, modalVisible, handleModalState, onCartChanged}) { //, modalVisible
    // debugger
    // console.log("modalVisible: ", modalVisible)
    // const [IsModalVisible, setIsModalVisible] = useState(modalVisible);
    const [ModalList, setModalList]  = useState(album ? album.music : []); //code mort
    
    const showModal = (album) => {
        //album
        setModalList(album.music)
    };

    const handleOk = (p_album) => {
        handleModalState(false);
        addToCart(p_album)
    };

    const handleCancel = () => {
        handleModalState(false);
    };

    const addToCart = (album) => {
        if (Add(album)) {
        }
        onCartChanged()
    }

  return album ?(
    <Modal title="list of musics in the album" visible={modalVisible} footer={null} maskClosable={true} onCancel={handleCancel}> {/*  onOk={handleOk} onCancel={handleCancel} */}
        {album.music.map((music) => {
            return(
                <div className="modal_line" ><p>{music.name}</p><p></p><p>{music.price}$</p></div>
            )
        })}
        <div className="transaction_buttons">
            <Button className="transaction_button" type="primary" onClick={handleCancel} >Cancel</Button>
            <Button className="transaction_button" type="primary" onClick={() => handleOk(album)} >Add to cart</Button>
        </div>
    </Modal>
  ) : (
      null
  )
}

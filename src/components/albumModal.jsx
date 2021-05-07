import React, { useContext, useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import { Form, Input, Button, Select } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Add } from '../services/APIcart'

export default function AlbumModal({ album, modalVisible, handleModalState, onCartChanged}) { //, modalVisible
    // debugger
    // console.log("modalVisible: ", modalVisible)
    // const [IsModalVisible, setIsModalVisible] = useState(modalVisible);
    const [ModalList, setModalList]  = useState(album ? album.music : []); //code mort

    const { Option } = Select;

    let select_format = 1
    
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
        album.audio_format = select_format
        if (Add(album)) {
        }
        onCartChanged()
    }

    //music format

    const onFormatChange = (value) => {
        switch (value) {
            case 'MP3':
                select_format = 1
                return;
    
            case 'FLAC':
                select_format = 1.2
                return;
        
            case 'WAV':
                select_format = 1.2
                return;

            case 'RAW':
                select_format = 1.7
                return;

            case 'MIDI':
                select_format = 4
                return;

          case 'other':
            select_format = 1
              //todo display a message and block the transaction
        }
    };

    // end music format

  return album ?(
    <Modal title="list of musics in the album" bodyStyle={{backgroundColor: "var(--background)"}} visible={modalVisible} footer={null} maskClosable={true} onCancel={handleCancel}>
        {/* <div>
            // separator for left to right
            <div></div>
            <div></div>
        </div> */}
        
        {album.music.map((music) => {
            console.log('music:', music)
            return(
                <div className="modal_line" >
                    <p>{music.name}</p>
                    <p></p>
                    <p>{music.price}$</p>
                </div>
            )
        })}
        <Form>
            <Form.Item
            name="format"
            label="Format"
            rules={[
                {
                required: true,
                },
            ]}
            >
                <Select
                placeholder="Select a option and change input text above"
                onChange={onFormatChange}
                value={select_format}
                >
                    <Option value="MP3">MP3</Option>
                    <Option value="FLAC">FLAC</Option>
                    <Option value="WAV">WAV</Option>
                    <Option value="RAW">RAW</Option>
                    <Option value="MIDI">MIDI</Option>
                </Select>
            </Form.Item>
        </Form>
        <div className="transaction_buttons">
            <Button className="transaction_button" type="primary" onClick={handleCancel} >Cancel</Button>
            <Button className="transaction_button" type="primary" onClick={() => handleOk(album)} >Add to cart</Button>
        </div>
    </Modal>
  ) : (
      null
  )
}

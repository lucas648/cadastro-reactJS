import React, {useState} from "react";
import Header from "../components/Header";
import Modal from "react-modal";
import Form from "./Form";
import image from '../assets/mao-cartao.png'

Modal.setAppElement('#root')

export default function Home(){

  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenForm (){
    setIsOpen(true)
  }

  function handleCloseModal (){
    setIsOpen(false)
  }
  
  const customStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

    return(
        <div class="home">
          <Header/>
          <div class="home__container">
            <div class="home__image">
              <img  src={image}/>
            </div>
            <div class="home__text">
              <div>
                <p class="home__paragraph">Já ta sabendo que a Sem Parar agora tem um cartão de crédito novinho e cheio de vantagens exclusivas que é sua cara?</p>
                <p class="home__paragraph">Faça seu pré cadastro e receba seu cartão antes de todo mundo</p>
              </div>
              <button class="default-button" onClick={handleOpenForm}>Quero me Cadastrar!!</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyle}
              >
                <Form />
              </Modal>
            </div>
          </div>
        </div>
    )
}

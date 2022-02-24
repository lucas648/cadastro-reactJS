import React, { Component } from "react";

class Form extends Component{

  state = {
    nome:'',
    cpf:'',
    celular:'',
    email:''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let {nome, cpf, celular, email } = this.state

    console.log({'nome ' : nome, 'cpf ': cpf, 'celular ': celular, 'email ': email})

  }

  handleInputChange = (e) =>{
    
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }

  render() {

    return( 
      <section>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} placeholder="Nome" name="nome"/>
          <input onChange={this.handleInputChange} placeholder="CPF"  name="cpf"/>
          <input onChange={this.handleInputChange} placeholder="Celular" name="celular"/>
          <input onChange={this.handleInputChange} placeholder="E-mail" name="email"/>

          <button type="submit">Enviar</button>
        </form>
      </section>
    )
  }
}

export default Form;
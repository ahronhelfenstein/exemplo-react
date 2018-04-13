import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const BASE_URL = 'http://localhost:5000'

class FormularioCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.salvar = this.salvar.bind(this)
        this.state = {email: 'murillo'}
    }


    handleInputChange(event) {
        const fieldName = event.target.name
        const value = event.target.value
        this.setState({ [fieldName]:  value })
    }

    salvar(){
        axios.post(`${BASE_URL}/usuarios`, this.state)
        .then(resp =>{})
    }

    render() {
        return (
          <Form
           onSubmit={this.salvar}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleInputChange}  placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Nome</Label>
              <Input type="text" name="nome" id="exampleEmail" onChange={this.handleInputChange} placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Sobrenome</Label>
              <Input type="text" name="sobrenome" id="exampleEmail" onChange={this.handleInputChange} placeholder="with a placeholder" />
            </FormGroup>
            <Button color="primary">Salvar!</Button>
          </Form>
        );
      }
}

export default FormularioCadastro

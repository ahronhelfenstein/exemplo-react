import React from 'react'
import { Table } from 'reactstrap'

class Listagem extends React.Component {
  constructor(props) {
    super(props)
  }

  renderContent(){
    return this.props.usuarios.map((usuario, index) => {
      return <tr key={index}>
          <td>{usuario.id}</td>
          <td>{usuario.nome}</td>
          <td>{usuario.sobrenome}</td>
          <td>{usuario.email}</td>
        </tr>
    })
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
        {this.renderContent()}
        </tbody>
      </Table>
    );
  }
}

export default Listagem

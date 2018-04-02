import React from 'react'
import Listagem from '../listagem/listagem'
import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inLoading: true,
            usuarios: []
        }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/usuarios`)
            .then((resp)=> {
                this.setState({
                    usuarios: resp.data,
                    inLoading: false
                })
            })
    }

    render() {
        if (this.state.inLoading) {
            return <span>carregando...</span>
        }

        return (
            <div>
                <Listagem usuarios={this.state.usuarios} />
            </div>
        );
    }
}

export default Dashboard

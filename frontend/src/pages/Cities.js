import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer'


class Cities extends React.Component {
    state = {
        cities:[],
        citiesFiltrada: []
    }
async componentDidMount() {
    const respuesta = await fetch('https://apipetshop.herokuapp.com/api/articulos')
    const info = await respuesta.json()
    this.setState({
        cities: info.response,
        citiesFiltrada: info.response
    })
    
}

capturarValor = e => {
    const valorDeseado = e.target.value.toLowerCase().trim()
    const filtrados = this.state.cities.filter(cities => cities.nombre.trim().toLowerCase().indexOf(valorDeseado) ===0)
    this.setState({    
        citiesFiltrada:filtrados
    })
    
}


    render() {
       
        return ( 
            <>
             <Header />
             <div style={{ width: '80%', margin: '0 30%'}}>
             <input type="text" placeholder="Enter city name" name='cities' id='cities'
             onChange={this.capturarValor} />   
             <ul>
                 {this.state.citiesFiltrada.map(cities =>{
                   return <li style={{backgroundImage: `url(${cities.imagen})`, width: '30%', padding: '10%',backgroundPosition: 'center', backgroundSize: 'cover'}}>{cities.nombre}</li>
                 })}
             </ul>

             </div>
             <Footer/>
            </>
        )
    }
}
export default Cities
import React from 'react'
import Footer from '../components/Footer'


class Formulario extends React.Component {
    state = {
        nombre:'',
        apellido:'',
        edad:''
    }
    imputHandler = e => {
        const campoAModificar = e.target.name
        const valorIngresado = e.target.value
        this.setState({
            [campoAModificar]: valorIngresado
        })
    }
    submitHandler = e => {
        e.preventDefault()
        alert(`Hola ${this.state.nombre}!Ya estas registrado en nuestra App`)
    }
    render() {
        return (
            <>
            <div className='fondoForm'>
            <h1 style={{width: '50%', margin: 'auto'}}>Registrate!</h1>
            <div className='formulario'>
            <form style={{width: '70%', margin: '0 auto'}}>
            <h2>Completa tus datos</h2>
            <label htmlfor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"
            onChange={this.inputHandler}></input>
            <label htmlfor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido"
            onChange={this.inputHandler}></input>
            <label htmlfor="edad">Edad:</label>
            <input type="text" id="edad" name="edad"
            onChange={this.inputHandler}></input>
            <button onClick={this.submitHandler}>Registrarme</button>
            </form>
            </div>
            <Footer/>
            </div>
            </>
        )
    }
}
export default Formulario
import React from 'react'
import Menu from "../components/Menu"
import { Dropdown } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'


class Header extends React.Component {
 
    render() {
        return ( 
        <>
        <div className='fondo'>
            <div className='barra'>
        
        <Dropdown>
            <div className= 'fotoMenu'>
  <Dropdown.Toggle variant="link">
  <h1 className= 'usua'><img src={process.env.PUBLIC_URL + '/logoPrincipal.png'} alt="Foto usuario" style={{width: '100%'}}/></h1>
  </Dropdown.Toggle>
</div>
  <Dropdown.Menu>
    <Dropdown.Item><NavLink to="/Formulario">Create Account</NavLink></Dropdown.Item>
    <Dropdown.Item href="#/action-2">Log In</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Menu/>
</div>
<div className= 'logo'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo pagina" />
        </div>
        </div>
        </>
        )
    }
}
export default Header
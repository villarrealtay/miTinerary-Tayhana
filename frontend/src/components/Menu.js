import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    render() {
        return (
            <>
            <div className= 'menu'>
           <DropdownButton id="dropdown-basic-button" variant="link" title="Menu">
           <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
           <Dropdown.Item><Link to="/Cities">Cities</Link></Dropdown.Item>
           <Dropdown.Item href="#/action-3">A confirmar</Dropdown.Item>
           </DropdownButton>
           </div>
            </>
        )
    }
}
export default Menu
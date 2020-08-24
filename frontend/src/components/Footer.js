import React from 'react';
import { NavLink } from 'react-router-dom'

class Footer extends React.Component {
    render() {

      return (
        <> 
        <div className='footer'>
           <div className='cajaUno'>
           <h3 className='tituloFooter'>Contactanos!</h3>
            <p>miTinerary@gmail.com</p>
            <p>+114356367234</p>
            </div>
            <div className='cajaDos'>
           <h5><NavLink to="/">Home</NavLink></h5>
           <h5><NavLink to="/Cities">Cities</NavLink></h5>
           </div>
           <div className='logoFooter'>
           <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="Logo footer"/>
           </div>
           </div>
        </>
      )
    }
}

export default Footer;

import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carrusel from '../components/Carrusel'
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
       
        return ( 
        <>
        <Header />
        <h1 className= 'frase'>Find your perfect trip, designed by insiders who know and love their cities</h1>
        <div>
            <div className='flecha'>
            <Link to="/Cities"><img src={process.env.PUBLIC_URL + '/flecha.png'} alt="flecha" /></Link> 
            <h6>explore cities</h6>
        </div>
        </div>
        <Carrusel/>
        <Footer />
        </>
        )
    }
}
export default Home
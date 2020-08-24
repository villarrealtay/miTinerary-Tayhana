import React from 'react'
import { Carousel } from 'react-bootstrap'


class Carrusel extends React.Component {
    render() {
        const paisajes = ['australia', 'italia', 'japon', 'seattle' ]
        const paisLati = ['brasil', 'argentina', 'mexico', 'NewYork' ]
        const paisEur = ['españa', 'francia', 'polinesiaFrancesa', 'india']
        return (
            <>
            <div className='Carrus' style={{width: '50%', height: '60%'}}>
          <Carousel>
              
  <Carousel.Item>
      <div style={{display: 'flex', flexWrap: 'wrap'}}
  className="d-block w-100"
      alt="Third slide"><div>{paisajes.map(paisaje => {
        const imagen = require(`../images/${paisaje}.jpg`)
        return (
           
            <div className= "fotoAustralia"
            style={{backgroundImage: `url(${imagen})`, width: '100%', height: '100%',
         backgroundPosition: 'center',  backgroundSize: 'cover'}} ><h4>{paisaje}</h4></div>)
        
         })}</div></div> 
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div 
       className="d-block w-100"
        alt="Third slide"><div>{paisLati.map(paisaje => {
        const imagen = require(`../images/${paisaje}.jpg`)
         return (
            <div className= "fotoAustralia"
            style={{backgroundImage: `url(${imagen})`, width: '100%', height: '100%',
            backgroundPosition: 'center',  backgroundSize: 'cover'}} ><h4>{paisaje}</h4></div>)
        
        })}</div></div>
    <Carousel.Caption>
    
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div
  className="d-block w-100"
      alt="Third slide"><div>{paisEur.map(paisaje => {
        const imagen = require(`../images/${paisaje}.jpg`)
        return (
            <div className= "fotoAustralia"
            style={{backgroundImage: `url(${imagen})`, width: '100%', height: '100%',
         backgroundPosition: 'center',  backgroundSize: 'cover'}} ><h4>{paisaje}</h4></div>)
        
        })}</div></div>
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
            </>
        )
    }
}
export default Carrusel
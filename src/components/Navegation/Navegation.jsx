import React from 'react'
import './Navegation.scss'
import faztCommunity from '../../img/faztCommunity.png'

const Navegation = () => {
    return (
        <div className="Navegation">
            <ul className='Navegation__ul-left-side'>
                //for now they are li but when the main componentsbe created we make routes 4 spa and use navlink/link
                <li className='Navegation__li'>Proyectos</li>
                <li className='Navegation__li'>Contribuidores</li>
                <li className='Navegation__li'>Inicio</li>
            </ul>
            <img className='Navegation__image' src={faztCommunity} alt="fazt-community"/>
            <ul className='Navegation__ul-right-side'>
                <li className='Navegation__li'>Registrarse</li>
                <li className='Navegation__li'>Iniciar sesión</li>
            </ul>
        </div>
    )
}

export default Navegation

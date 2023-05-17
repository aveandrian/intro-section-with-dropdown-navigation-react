import { useState } from 'react'
import '../styles/Navbar.css'
import featuresElements from '../featuresElements.json'
import companylements from '../companyElements.json'
import Dropdown from './Dropdown'
export default function Navbar(){
    const [isOpened, setIsOpened] = useState(false)
    function toggleIsOpen(){
        setIsOpened(prevValue => !prevValue)
    }

    return (
        <nav>
            <img src='/images/logo.svg' className='logo' alt='Main Logo'></img>
            <img src={`/images/icon-${isOpened ? "close-" : ""}menu.svg`} onClick={toggleIsOpen} className='menu-btn' alt='Mobile menu icon'></img>
            <div className={`nav-items ${isOpened ? "opened" : ""}`}>
                <div className='nav-links'>
                    <Dropdown title={'Features'} elements={featuresElements} />
                    <Dropdown title={'Company'} elements={companylements}/>
                    <a href='#'>Career</a>
                    <a href='#'>About</a>
                </div>
                <div className='nav-buttons'>
                    <button className='login-btn'>Login</button>
                    <button className='register-btn'>Register</button>
                </div>
            </div>
        </nav>
    )
}
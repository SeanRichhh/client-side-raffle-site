import '../Header/header.css'
import { Routes,Route,useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }

    const navigateToAccount = () => {
        navigate('/account')
    }

    return(
        <div className="nav-container">
            <div>
                <h1>ComputerGiveAWAYS</h1>
                <ul className='grid-auto'>
                    <li>
                        <button onClick={navigateHome} className='nav-btn'>HOME</button>
                    </li>
                    <li>
                        <button className='nav-btn'>ABOUT</button>
                    </li>
                    <li>
                        <button onClick={navigateToAccount} className='nav-btn'>ACCOUNT</button>
                    </li>
                    <li>
                        <button className='nav-btn'>LIVE DRAWS</button>
                    </li>
                </ul>
            

            </div>

        </div>
    )
}

export default Header
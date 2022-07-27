import '../Header/header.css'


const Header = () => {
    return(
        <div className="nav-container">
            <div>
                <h1>ComputerGiveAWAYS</h1>
                <ul className='grid-auto'>
                    <li>
                        <button className='nav-btn'>HOME</button>
                    </li>
                    <li>
                        <button className='nav-btn'>ABOUT</button>
                    </li>
                    <li>
                        <button className='nav-btn'>ACCOUNT</button>
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
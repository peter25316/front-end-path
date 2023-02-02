import logo from './logo192.png'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" alt='' />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
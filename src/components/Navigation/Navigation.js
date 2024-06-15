import './Navigation.css';
// import Link from 're'

function Navigation() {

    return (
        <div className="navigation-component">
            <div className='container'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Services</li>
                    <li>Potfolio</li>
                    {/* <Link to='/Contact'><li>ContactMe</li></Link> */}
                </ul>

            </div>
        </div>
    );
}

export default Navigation;

import './Home.css';
import logo from '../../images/logo.svg'

function Home() {
    return (
        <div className="home-component">
            <div className='container'>
                <div className='socials'>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div className='information'>
                    <h1>Hello, I'm Rashmi</h1>
                    <h5>FRONTEND DEVELOPER</h5>
                    <p>Holding around 4 years of industry experience in JavaScript-based technology stack. I specialize in building UI components, connecting to APIs, crafting unit tests, and creating automation scripts. I am enthusiastic about providing users with top-notch experiences.</p>
                    <button>ContactMe</button>
                </div>
                <div className='img'>
                    <img src={logo}></img>
                </div>
            </div>
        </div>
    );
}

export default Home;

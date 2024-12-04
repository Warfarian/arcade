import '../styles/App.css'
import { Link } from 'react-router-dom'
export default function HomePage(){

    return(
        <> 
    <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='cart'>Cart</Link></li>
        </ul>
    </nav>
    <div className="container" style={{
    backgroundImage: "url('https://steamuserimages-a.akamaihd.net/ugc/790858329433082572/7AFB90944739524B66E931AC5ED409ED84BA09B6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "150vh",
    padding: "12px"
}}
>
        <main className="main fade-in">
            <h1 id='arcade'>A R C A D E</h1>
        </main>
    </div>
    
    <footer>
        <div id='github'><a href="https://github.com/Warfarian/arcade">Arcade Enterprises</a></div>
    </footer>
    </>
        )
}
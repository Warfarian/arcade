import '../styles/App.css'
import { Link } from 'react-router-dom'
export default function HomePage(){

    return(
        <> 
    <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li ><Link to='cart'>Cart</Link></li>
        </ul>
    </nav>
    <div className="container" style={{
    backgroundImage: "url('https://files.peakd.com/file/peakd-hive/seryi13/23wqCv6iVTxZKpreSW9mnNhftoQVhcJcJ9KiiZiY9HsL7E4Xii3L6ND876vNZu6QaAGhY.gif')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "150vh",
    backgroundColor: 'black'
}}
>
        <main className="main fade-in">
            <h1 id='arcade'>A R C A D E</h1>
            <Link to='shop'><button id = "explore">Explore</button></Link>
        </main>
    </div>
    
    <footer>
        <div id='github'><a href="https://github.com/Warfarian/arcade">Arcade Enterprises</a></div>
    </footer>
    </>
        )
}
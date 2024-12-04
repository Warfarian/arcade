import { Link } from "react-router-dom";

export default function Cart(){
    return(
        <>
     <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='cart'>Cart</Link></li>
        </ul>
    </nav>
        </>
    );
}
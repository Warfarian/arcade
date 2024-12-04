import { Link } from "react-router-dom";
import Image from "../Image";
import "../styles/Shop.css"
export default function Shop(){
    return(
        <>
    <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='cart'>Cart</Link></li>
        </ul>
    </nav>

        <div className="listing">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1700154117794-277371e27705?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1591196702597-062a87208fed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
        </>
        
    );
}
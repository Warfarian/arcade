// import { Link } from "react-router-dom";
// import Image from "../Image";
// import Card from "./Card";
// import { useState } from "react";
// import "../styles/Shop.css"

// export default function Shop(){
//     const [cart, setCart] = useState([]);
//     const [quantity,setQuantity] = useState(0)

//     return(
//         <>
//     <nav className='navBar fade-in fade-out'>
//         <ul className='navLinks fade-in fade-out'>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='shop'>Shop</Link></li>
//             <li><Link to='cart'>Cart: {cart.length}</Link></li>
//         </ul>
//     </nav>

//         <div className="listing fade-in">
//             <Card image="https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Grand Theft Auto #1" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
//             <Card image="https://images.unsplash.com/photo-1700154117794-277371e27705?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="San Andreas #2" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
//             <Card image = "https://images.unsplash.com/photo-1591196702597-062a87208fed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Sonic #3" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
//             <Card image="https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Super Mario #4" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
//         </div>
//         </>  
//     );
// }

//  EXPERIMENT HERE


import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Shop.css"


export default function Shop(){
    const [cart, setCart] = useState([]);
    const [quantity,setQuantity] = useState(0)



// Card component
    function Card({name,image,id,price,rating,cart,quantity}){
        let handleAddToCart = () => {
            setCart([...cart, id]);
            setQuantity((quantity) => quantity + 1);
        }
    
    
        let handleAddItem = () => {
            setQuantity((quantity) => quantity + 1);
        }
    
        let handleRemoveItem = () => {
            quantity >= 0 && setQuantity((quantity) => quantity - 1)
        }
        
        return(
            <div className="card">
                <img src={image} />
                <h1>{name}</h1>
                <p style={{color : "black", marginTop:"20px", }}>{id}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <button onClick={handleAddToCart}>Add to cart</button>
                <button style={{width: "50px", marginLeft: "100px"}} onClick={handleAddItem}>+</button>
                <button style={{width: "50px", marginLeft: "10px"}} onClick={handleRemoveItem}>-</button>   
            </div>
        );
    }
    let apiKey = import.meta.env.VITE_API_KEY
    
    const [imageURL, setImageURL] = useState("https://images.unsplash.com/photo-1700154117794-277371e27705?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    const [rating, setRating] = useState(4.5)
    const [name, setName] = useState("Katana Zero");
    const [id, setId] = useState(1)
    const [allItems, setAllItems] = useState([]);
    const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2022-12-31&ordering=-added`

    useEffect(() => {
        fetch(url, { mode: "cors" }) 
            .then((response) => response.json())
            .then((response) => {
                setAllItems(response.results);
                // setImageURL(response.results[0].background_image);
                // setRating(response.results[0].rating);
                // setId(response.results[0].id);
                // setName(response.results[0].name);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    
    const price = Math.floor(Math.random() * 100)
    
    // fallback stuff 
    const fallBack = [
        {
            id: 1,
            name: "Katana Zero",
            background_image: "src/assets/Katana_Zero.png",
            rating: 4.5,
        },
        {
            id: 2,
            name: "0x0",
            background_image: "src/assets/0x0.jpg",
            rating: 4.3,
        },
        {
            id: 3,
            name: "Cyberpunk 2077",
            background_image: "src/assets/Cyberpunk_2077_box_art.jpg",
            rating: 4.7,
        },
        {
            id: 4,
            name: "DDLC+ Soundtrack",
            background_image: "src/assets/DDLC+_Soundtrack.jpg",
            rating: 4.2,
        },
        {
            id: 5,
            name: "Furi",
            background_image: "src/assets/Furi_video_game_logo.png",
            rating: 4.6,
        },
        {
            id: 6,
            name: "Garry's Mod",
            background_image: "src/assets/Garry's_Mod_logo.svg.png",
            rating: 4.4,
        },
        {
            id: 7,
            name: "GGyEnCkIXoyi",
            background_image: "src/assets/GGyEnCkIXoyiVlN9sRHkzUPo.avif",
            rating: 4.1,
        },
        {
            id: 8,
            name: "Ghost of Tsushima",
            background_image: "src/assets/Ghost_of_Tsushima.jpg",
            rating: 4.8,
        },
        {
            id: 9,
            name: "Grand Theft Auto V",
            background_image: "src/assets/Grand_Theft_Auto_V.png",
            rating: 4.9,
        },
        {
            id: 10,
            name: "Halo TMCC",
            background_image: "src/assets/Halo_TMCC_KeyArt_Vert_2019.png",
            rating: 4.7,
        },
        {
            id: 11,
            name: "Hollow Knight",
            background_image: "src/assets/Hollow_Knight_first_cover_art.webp.png",
            rating: 4.6,
        },
        {
            id: 12,
            name: "Hotline Miami 2",
            background_image: "src/assets/Hotline_Miami_2_cover.png",
            rating: 4.4,
        },
        {
            id: 13,
            name: "Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq",
            background_image: "src/assets/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.avif",
            rating: 4.3,
        },
        {
            id: 14,
            name: "Just Cause 3",
            background_image: "src/assets/Just_Cause_3_cover_art.jpg",
            rating: 4.5,
        },
        {
            id: 15,
            name: "Left 4 Dead 2",
            background_image: "src/assets/Left4Dead2.jpg",
            rating: 4.6,
        },
        {
            id: 16,
            name: "Sekiro",
            background_image: "src/assets/Sekiro_art.jpg",
            rating: 4.7,
        },
        {
            id: 17,
            name: "Sleeping Dogs",
            background_image: "src/assets/Sleeping_Dogs_-_Square_Enix_video_game_cover.jpg",
            rating: 4.4,
        },
        {
            id: 18,
            name: "TF2",
            background_image: "src/assets/Tf2_standalonebox.jpg",
            rating: 4.3,
        },
        {
            id: 19,
            name: "Titanfall 2",
            background_image: "src/assets/Titanfall_2.jpg",
            rating: 4.8,
        },
        {
            id: 20,
            name: "Y0 PC",
            background_image: "src/assets/Y0_PC.jpg",
            rating: 4.2,
        }
    ];
    


    return(
        <>
    <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/cart'>Cart: {cart.length}</Link></li>
        </ul>
    </nav>

    <div className="listing fade-in">
        {allItems.length > 0 ? (
            allItems.map((item)=>{
                return(
                    <Card 
                        name={item.name || ""}
                        key = {item.id || 1283}
                        image = {item.background_image || fallBack[`${Math.floor(Math.random() * 20)}`].background_image}
                        id = {item.id}
                        price = {`${Math.floor(Math.random()*100)}$`}
                        rating = {item.rating}
                        cart = {cart}
                    />
                )
            })
        ):(
            <p style={{marginTop:"20px", color:"white"}}>Loading Items...</p>
        )}
            </div>
        </>  
    );
}

{/* <Card image="https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Grand Theft Auto #1" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
            <Card image="https://images.unsplash.com/photo-1700154117794-277371e27705?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="San Andreas #2" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
            <Card image = "https://images.unsplash.com/photo-1591196702597-062a87208fed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Sonic #3" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
            <Card image="https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Super Mario #4" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/> */}
        
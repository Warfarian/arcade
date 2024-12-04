

export default function Card({image,item,price,rating}){
    return(
        <div className="card">
            <img src={image} />
            <h1>{item}</h1>
            <p>{price}</p>
            <p>{rating}</p>
            <button>Add to cart</button>
            <button style={{width: "50px", marginLeft: "100px"}}>+</button>
            <button style={{width: "50px", marginLeft: "10px"}}>-</button>
        </div>
    );
}
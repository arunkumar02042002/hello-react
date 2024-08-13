import { useState } from "react"
import AddToCartIcon from "../../../assets/icons/cart.png"

const ListItem = ({data}) => {

    const [counter, setCounter] = useState(0);

    const increaseCountHandler = () => {
        setCounter(counter+1);
    }

    const decreaseCountHandler = () => {
        if (counter === 0){
            return;
        }
        setCounter(counter-1);
    }

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            
            {
                counter < 1 ?
                <button className={"cart-add"} onClick={increaseCountHandler}>
                    <span>Add to Cart</span>
                    <img src={AddToCartIcon} alt="Cart Icon"/>
                </button>
                :
                <div className="cart-addon">
                    <button onClick={decreaseCountHandler}><span>-</span></button>
                    <span>{counter}</span>
                    <button onClick={increaseCountHandler}><span>+</span></button>
                </div>
            }

            
        </div>
    )
}

export default ListItem
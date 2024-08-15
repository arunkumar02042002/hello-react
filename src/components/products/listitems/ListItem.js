import { Fragment, useState } from "react"
import AddToCartIcon from "../../../assets/icons/cart.png"
import Modal from "../../ui/modal";

const ListItem = ({data}) => {

    const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false)

    const increaseCountHandler = (event) => {
        event.stopPropagation();
        setCounter(counter+1);
    }

    const decreaseCountHandler = (event) => {
        event.stopPropagation();
        if (counter === 0){
            return;
        }
        setCounter(counter-1);
    }

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    return (
        <Fragment>
        <div onClick={handleModal} className={"item-card"}>
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
        {
            showModal &&
            <Modal onClose={handleModal}>
                <div className="item-card__modal">
                    <div className="img-wrap">
                        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                    </div>
                    <div className="meta">
                        <h3>{data.title}</h3>
                        <div className={"pricing"}>
                            <span>₹{data.discountedPrice}</span>
                            <small>
                                <strike>₹{data.price}</strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {
                            counter < 1 ?
                            <button className={"cart-add card-add__modal"} onClick={increaseCountHandler}>
                                <span>Add to Cart</span>
                                <img src={AddToCartIcon} alt="Cart Icon"/>
                            </button>
                            :
                            <div className="cart-addon card-addon__modal">
                                <button onClick={decreaseCountHandler}><span>-</span></button>
                                <span>{counter}</span>
                                <button onClick={increaseCountHandler}><span>+</span></button>
                            </div>
                        }
                    </div>
                </div>
            </Modal>
        }
        </Fragment>
    )
}

export default ListItem
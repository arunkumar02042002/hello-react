import { useState } from "react";
import ListItem from "./listitems/ListItem";

const Products = () => {

    const [items, setItems] = useState([
        {
            id: 0,
            title: "Title of this Item 1",
            price: 450,
            discountedPrice: 340,
            thumbnail: "laptop.avif"
        },
        {
            id: 1,
            title: "Title of this Item 2",
            price: 100,
            discountedPrice: 80,
            thumbnail: "laptop.avif"
        },
        {
            id: 2,
            title: "Title of this Item 3",
            price: 100,
            discountedPrice: 80,
            thumbnail: "laptop.avif"
        },
        {
            id: 4,
            title: "Title of this Item 4",
            price: 100,
            discountedPrice: 80,
            thumbnail: "laptop.avif"
        }
    ])
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {
                    items.map(item => {
                        return <ListItem key={item.id} data={item}></ListItem>
                    })
                }
            </div>
        </div>
    )
}

export default Products
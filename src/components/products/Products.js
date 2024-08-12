import ListItem from "./listitems/ListItem";

const items = [
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
    }
]

const Products = () => {
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
            </div>
        </div>
    )
}

export default Products
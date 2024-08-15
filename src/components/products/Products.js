import { useState, useEffect } from "react";
import ListItem from "./listitems/ListItem";
import Loader from "../ui/loader";

const Products = () => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function fetchData (){
            try {
                const response = await fetch('https://hello-react-797ee-default-rtdb.asia-southeast1.firebasedatabase.app/items.json');
                const data = await response.json();

                const tranformedData = data.map((item) => {
                    return {
                        ...item,
                        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    }
                })
                setItems(tranformedData);
            }
            catch {
                alert("Unable to fetch data!")
            } 
            finally {
                setLoader(false);
            }
        }
        fetchData();
    }, [])

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products
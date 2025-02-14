import "./Popular.css"
import Item from "../Item/Item.jsx"
import data_product from "../Assests/data.js"


export default function Popular() {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {
                    data_product.map((item, idx) => {
                        return (<Item key={idx} id={item.id} name={item.name} image={item.image}
                            new_price={item.new_price} old_price={item.old_price} />)
                    })
                }
            </div>
        </div>
    )
}
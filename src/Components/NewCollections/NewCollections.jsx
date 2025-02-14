import "./NewCollections.css"
import new_collection from "../Assests/new_collections.js"
import Item from "../Item/Item.jsx"

export default function NewCollections() {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, idx) => {
                    return (
                        <Item key={idx} id={item.id} name={item.name} image={item.image}
                            new_price={item.new_price} old_price={item.old_price} />
                    )
                })}
            </div>

        </div>
    )
}
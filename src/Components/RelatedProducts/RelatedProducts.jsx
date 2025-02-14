import './RelatedProducts.css'
import data_product from '../Assests/data'
import Item from "../Item/Item.jsx"

export default function RelatedProducts() {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {
                    data_product.map((item, idx) => {
                        return <Item key={idx} id={item.id} name={item.name} image={item.image}
                            new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}
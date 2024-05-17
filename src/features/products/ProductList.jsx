import { Link } from "react-router-dom";

const ProductList = ({ data }) => {
    return (
        data?.map((item, index) => {
            return (
                <Link to={`/item/${item?.id}`}>
                    <div className="product" key={index}>
                        <div className="image-box">
                            <img className="images" id="image-1" src={item?.thumbnail} />
                        </div>

                        <div className="text-box">
                            <h2 className="item" title={item?.title}>{item?.title?.length > 20 ? `${item?.title.slice(0, 20)}...` : item?.title}</h2>
                            <h4 className="item" brand={item?.brand}>{item?.brand?.length > 20 ? `${item?.brand.slice(0, 20)}...` : item?.brand}</h4>
                            <h2 className="item" category={item?.category}>{item?.category?.length > 20 ? `${item?.category.slice(0, 20)}...` : item?.category}</h2>
                            <h3 className="price"> ₹{item?.price}/-</h3>
                            <p style={{ fontSize: '12px' }} className="description" title="description">{item?.description?.length > 12 ? `${item.description.slice(0, 65)}...` : item?.description}</p>

                        </div>
                    </div>
                </Link>
            )
        })
    )
}
export default ProductList;
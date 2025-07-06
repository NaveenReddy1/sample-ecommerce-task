import './ProductCategories.css';

function Categories () {
    const items = [
            {
                id: 1,
                image: "01.png"
            },
            {
                id: 2,
                image: "02.png"
            },
            {
                id: 3,
                image: "03.png"
            },
            {
                id: 4,
                image: "04.png"
            },
            {
                id: 5,
                image: "05.png"
            }
        ]

    return  (
        <div className="product-category-content">
            <div className='left-side'>
                <img className="category-image" src={require("../assets/card.png")} alt={"Carlie Anglemire"}></img>
            </div>
            <div className='right-side'>
                <div className='sub-images sub-top'>
                    <img className="sub-category-image" src={require("../assets/item-category-1.png")} alt={"Carlie Anglemire"}></img>
                    <img className="sub-category-image" src={require("../assets/item-category-2.png")} alt={"Carlie Anglemire"}></img>
                </div>
                <div className='sub-images'>
                    <img className="sub-category-image" src={require("../assets/item-category-3.png")} alt={"Carlie Anglemire"}></img>
                    <img className="sub-category-image" src={require("../assets/item-category-4.png")} alt={"Carlie Anglemire"}></img>
                </div>
            </div>
        </div>
    )
}

export default Categories;
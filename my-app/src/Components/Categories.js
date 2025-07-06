import './Categories.css';

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
        <div className="category-content">
            {/* {items.map((item) => {
                <img key={item.id} className="category-image" src={require("../assets/image-product.png")} alt={"Carlie Anglemire"}></img>
            })} */}
            <img className="category-image" src={require("../assets/categories/01.png")} alt={"Carlie Anglemire"}></img>
            <img className="category-image" src={require("../assets/categories/02.png")} alt={"Carlie Anglemire"}></img>
            <img className="category-image" src={require("../assets/categories/03.png")} alt={"Carlie Anglemire"}></img>
            <img className="category-image" src={require("../assets/categories/04.png")} alt={"Carlie Anglemire"}></img>
            <img className="category-image" src={require("../assets/categories/05.png")} alt={"Carlie Anglemire"}></img>
        </div>
    )
}

export default Categories;
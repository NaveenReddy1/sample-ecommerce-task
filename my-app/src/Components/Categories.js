import './Categories.css';
import { useSelector } from 'react-redux';

function Categories () {
    const storeItems = useSelector((state) => state.todos);
    const items = storeItems.categories;
    console.log(">>>>>>>>>>>>>", items);
    function localPath (img) {
        return require(`../assets/categories/${img}`);
    }
    return  (
        <div className="category-content">
            {/* {items.map((item) => {
                <div key={item.id}>
                    <img src={item.image} alt={item.id} />
                </div>
                // <img key={item.id} className="category-image" src={ item.image } alt={"Carlie Anglemire"}></img>
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
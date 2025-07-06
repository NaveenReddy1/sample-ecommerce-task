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
            {items.map((item) => (
                <img key={item.id} className="category-image" src={ item.image } alt={"Carlie Anglemire"}></img>
            ))}
        </div>
    )
}

export default Categories;

import './TopBar.css';
import { useSelector } from 'react-redux';

function TopBar() {
    const storeItems = useSelector((state) => state.todos);
    const items = storeItems.navItems;
  return (
    <div className="top-bar">
      <div className='header'>
        <ul className="nav">
            { items.map((item) => (
                <li key={item.id}>
                    <a exact to="/">{item.name}</a>
                </li>
            ))}
        </ul>
      </div>
      <div className="content">
            <div className="static-content">
                <div className='header-class'>Collections</div>
                <div className="span-class">You can explore Ans Shop Many Different Collection From Various Brands here</div>
                <div><button className='btn-shop'>Shop Now</button></div>
            </div>
            <img className="profile-photo" src={require("../assets/image-product.png")} alt={"Carlie Anglemire"}/>
      </div>
    </div>
  );
}

export default TopBar;
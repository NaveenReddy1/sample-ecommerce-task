
import './TopBar.css';
import { useSelector } from 'react-redux';

function TopBar() {
      const { navItems } = useSelector((state) => state.reducer);
      console.log("&&&&&&&&&&&&&&&", navItems);
    const items = [
            {
                id: 1,
                name: "Jewelleries & Accessories"
            },
            {
                id: 2,
                name: "Clothing & Shoes"
            },
            {
                id: 3,
                name: "Home & Living"
            },
            {
                id: 4,
                name: "Wedding Party"
            },
            {
                id: 5,
                name: "Toys & Entertainment"
            },
            {
                id: 6,
                name: "Art & Collectables"
            },
            {
                id: 7,
                name: "Creaft Supplies & Tools"
            }
        ];
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
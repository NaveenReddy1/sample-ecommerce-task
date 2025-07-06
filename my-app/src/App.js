
import './App.css';
import TopBar from './Components/TopBar';
import Categories from './Components/Categories';
import ProductCategories from './Components/ProductCategories'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Categories />
      <ProductCategories/>
    </div>
  );
}

export default App;

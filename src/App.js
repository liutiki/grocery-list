
import './App.css';
import { GroceryList } from './GroceryList';
import image from './shopping.jpg';
import imageTwo from './woman.jpg';
function App() {
  return (
    <div className='app'>
      <div className="container">
<img src={imageTwo} width="250px" alt="woman"/>
</div>
<div className="container">
    <h1>Grocery List</h1>
    </div>
    <GroceryList />
    <div className="container">
<img src={image} width="250px" alt="grocery"className="woman"/>
</div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import "./App.css";
import Food from "./components/Food";
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";
import food5 from "./images/food5.jpg";
import food6 from "./images/food6.jpg";

function App() {
  const food = [
    {
      name: "delicious",
      amount: 300,
      image: food1,
      offer: 20
    },
    {
      name: "burger",
      amount: 100,
      image: food2,
      offer: 40
    },
    {
      name: "ghee-food",
      amount: 200,
      image: food3,
      offer: 50
    },
    {
      name: "cake",
      amount: 150,
      image: food4,
      offer: 60
    },
    {
      name: "butter-leaf",
      amount: 230,
      image: food5,
      offer: 40
    },
    {
      name: "banana-bread",
      amount: 250,
      image: food6,
      offer: 35
    },
  ]
  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="header-wrapper">
            <div className="logo"><b>SWIGGY</b></div>
            <nav>
              <a href=''>Sign-in</a>
              <a href=''>Logout</a>
            </nav>
          </div>
        </div>
      </header>
      <div className='body'>
        <div className='container'>
          <div className='body-wrapper'>
            <Food name={food[0].name} amount={food[0].amount} image={food[0].image} offer={food[0].offer}></Food>
            <Food name={food[1].name} amount={food[1].amount} image={food[1].image} offer={food[1].offer}></Food>
            <Food name={food[2].name} amount={food[2].amount} image={food[2].image} offer={food[2].offer}></Food>
            <Food name={food[3].name} amount={food[3].amount} image={food[3].image} offer={food[3].offer}></Food>
            <Food name={food[4].name} amount={food[4].amount} image={food[4].image} offer={food[4].offer}></Food>
            <Food name={food[5].name} amount={food[5].amount} image={food[5].image} offer={food[5].offer}></Food>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
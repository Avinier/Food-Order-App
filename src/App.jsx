import { useState } from "react";
import CartModal from "./components/Cart/CartModal";
import CaptionCard from "./components/Layout/CaptionCard";
import Navbar from "./components/Layout/Navbar";
import MainMenu from "./components/Menu/MainMenu";
import MealContextProvider from "./store/MealContextProvider";

const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [onClose, setOnClose] = useState(false)

  function showCartModal() {
    setOnClose(true)
  }

  function hideCartModal() {
    setOnClose(false)
  }

  return (
    <MealContextProvider >
      <Navbar onCartClick={showCartModal}/>
      {onClose && <CartModal onCloseClick={hideCartModal}/>}
      <main>
        <CaptionCard/>
        <MainMenu data={MEALS}/>
      </main>
    </MealContextProvider>
      
  ) ;
}

export default App;

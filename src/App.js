import { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import menuFood from "./Data";
const allCategories = [
  "all",
  ...new Set(menuFood.map((item) => item.category)),
];
console.log(allCategories);
function App() {
  const [itemsMenu, setItemsMenu] = useState(menuFood);
  
  const filterItems = (category) => {
    if (category === "all") {
      setItemsMenu(menuFood);
    } else {
      const newItems = menuFood.filter((item) => item.category === category);
      setItemsMenu(newItems);
    }
  };
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterCategories={filterItems} categories={allCategories}/>
          <Menu item={itemsMenu}/>
        </section>
      </main>
    </>
  );
}

export default App;

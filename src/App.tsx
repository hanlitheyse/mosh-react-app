import ListGroup from "./Components/ListGroup/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button/Button";
import { useState } from "react";
import LikeButton from "./Components/LikeButton/LikeButton";
import NavBar from "./Components/NavBar";
import ShoppingCart from "./Components/ShoppingCart";
import UpdatePlayer from "./Components/Game";
import UpdatePizza from "./Components/UpdatePizza";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import { set } from "react-hook-form";
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [expenses, setExpenses] = useState([
    { description: "aaa", amount: 10, category: "Groceries", id: 1 },
    { description: "bbb", amount: 10, category: "Groceries", id: 2 },
    { description: "ccc", amount: 10, category: "Utilities", id: 3 },
    { description: "ddd", amount: 10, category: "Groceries", id: 4 },
  ]);

  const [filter, setFilter] = useState("");

  const filteredCategories = filter
    ? expenses.filter((e) => e.category === filter)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(newExpense) => {
          setExpenses([...expenses, { ...newExpense, id: 5 }]);

          // console.log([...expenses, { ...newExpense, id: 5 }]);
        }}
      />
      <ExpenseFilter onSelectFilter={(category) => setFilter(category)} />
      <ExpenseList
        expenses={filteredCategories}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );

  /*
  <ExpandableText onClick={() => console.log("clicked")}>
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah
      </ExpandableText>
   const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["Cheese", "Pepperoni"],
  });
   <UpdatePizza
        toppings={pizza.toppings}
        onUpdate={() => {
          setPizza({
            ...pizza,
            toppings: [...pizza.toppings, "Pineapple"],
          });
        }}
      />
     <UpdatePlayer
        name={game.player.name}
        onUpdate={() => {
          setGame({
            ...game,
            player: { ...game.player, name: "John " },
          });
        }}
      />
    const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [alertVisible, setAlertVisibility] = useState(false);
    const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
 let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  return (
    <div>
          <NavBar cartItemsCount={cartItems.length} />
      <ShoppingCart cartItems={cartItems} onClear={() => setCartItems([])} />
     <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My React Button
      </Button>
      <LikeButton onClick={() => console.log("Clicked")} />
    </div>
  );*/
}

export default App;

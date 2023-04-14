import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Biryani",
    description: "Basmati Rice and veggies",
    price: 230.00,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "corn and panner",
    price: 160.50,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Aloo tikki",
    price: 79.99,
  },
  {
    id: "m4",
    name: "Rice Bowl",
    description: "Healthy...and green...veggies",
    price: 180.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

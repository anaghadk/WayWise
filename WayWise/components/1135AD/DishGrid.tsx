import React from "react";
import { View, StyleSheet } from "react-native";
import { DishCard } from "./DishCard";

interface Props {
  filter: string;
  onAddDish: (dishName: string) => void;
  selectedDishes: string[]; // ✅ New prop
}

const dishes = [
  {
    name: "Laal Maas",
    image:
      "https://ik.imagekit.io/31g5nprim/9.PNG",
  },
  {
    name: "Dal Baati Churma",
    image:
      "https://ik.imagekit.io/31g5nprim/10.PNG",
  },
];

export const DishGrid: React.FC<Props> = ({ filter, onAddDish, selectedDishes }) => {
  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.gridContainer}>
        {filteredDishes.map((dish, idx) => (
          <DishCard
            key={idx}
            image={dish.image}
            name={dish.name}
            onAdd={() => onAddDish(dish.name)}
            selected={selectedDishes.includes(dish.name)} // ✅ Pass selected state
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  divider: {
    marginTop: 10,
    height: 1,
    backgroundColor: "rgba(209, 213, 219, 0.8)",
    width: 317,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 3,
    gap: 30,
  },
});

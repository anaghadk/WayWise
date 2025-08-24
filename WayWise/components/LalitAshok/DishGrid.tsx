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
    name: "Grilled Fish",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be4ae2bdd78d5615616e8a3b0ec83f80fb1eb109?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
  },
  {
    name: "Margarita Pizza",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d11095b0005fc2e9d028afb53e5ebdfc53bad80e?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
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

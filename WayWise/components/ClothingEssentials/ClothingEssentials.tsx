import * as React from "react";
import { StyleSheet, FlatList, View, ListRenderItem, SafeAreaView, Dimensions } from "react-native";
import ClothingGrid from "./ClothingGrid";
import { ClothingHeader } from "./ClothingHeader";
import { useWeatherStore } from "../../store/weatherStore";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";

const FOOTER_HEIGHT = 80;  // Adjust based on your footer actual height

const ClothingEssentials: React.FC = () => {
  const { selectedTemperature, condition } = useWeatherStore();
  const temp = parseInt(selectedTemperature);
const isCold = condition.toLowerCase().includes("cloudy") ||condition.toLowerCase().includes("rain")||condition.toLowerCase().includes("drizzle")||condition.toLowerCase().includes("thunderstorm")|| (!isNaN(temp) && temp < 20);


  const clothingItems = ClothingGrid.getItems(isCold);

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <ClothingGrid.Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clothingItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        ListHeaderComponent={<ClothingHeader />}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: FOOTER_HEIGHT + 20 }]} 
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.footer, { height: FOOTER_HEIGHT }]}>
        <ItineraryFooter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    
    borderTopColor: "#ddd",
    
    // elevation or shadow styles if needed
  },
});

export default ClothingEssentials;

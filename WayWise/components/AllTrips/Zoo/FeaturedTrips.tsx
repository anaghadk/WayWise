import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TripHeader } from "./TripHeader";
import { TripGallery } from "./TripGallery";
import { TripDetails } from "./TripDetails";
import { TripActivities } from "./TripActivities";
import { LocationInfo } from "./LocationInfo";
import { ActionButtons } from "./ActionButtons";
import { useItineraryStore } from "../../../store/useItineraryStore"; // adjust path as needed

export default function FeaturedTrips() {
  const [selectedActivity, setSelectedActivity] = useState(false);

 const toggleItem = useItineraryStore((state) => state.toggleItem);
 
 const handleAddToList = () => {
   if (selectedActivity) {
     toggleItem({
       id: "banerghatta-observe", // must be unique
       category: "places",
       name: "Banerghatta National Park",
       details: "Observe",
     });
   } else {
     console.log("No activity selected");
   }
 };

  return (
    <View style={styles.container}>
      <TripHeader />
      <TripGallery />
      <View style={styles.mainContent}>
        <TripDetails />
        <TripActivities
          selected={selectedActivity}
          toggleSelected={() => setSelectedActivity((prev) => !prev)}
        />
        <LocationInfo />
        <ActionButtons onAddToList={handleAddToList} />
      </View>
    </View>
  );
}

// styles... (unchanged)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    paddingBottom: 20,
  },
  mainContent: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
});

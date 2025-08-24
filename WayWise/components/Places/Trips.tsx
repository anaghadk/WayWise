import * as React from "react";
import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { DestinationHeader } from "./DestinationHeader";
import { SearchBar } from "./SearchBar";
import { Categories } from "./Categories";
import { FeaturedTrip } from "./FeaturedTrip";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";
import { useRouter } from "expo-router";
import { useTripStore } from "../../store/tripStore"; // Zustand store

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// Trip type
type Trip = {
  id: number;
  image: string;
  title: string;
  location: string;
  area: string;
  percentage: string;
  category: string;
};

// Sample trips data
const tripsData: Trip[] = [
  {
    id: 1,
    image:
      "https://ik.imagekit.io/31g5nprim/dd.PNG",
    title: "Ulsoor Lake",
    location: "Ulsoor Lake, Ulsoor",
    area: "Bangalore, Karnataka",
    percentage: "75%",
    category: "Lakes",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eb1952947465fc0af88a546e442d825219eb4156?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
    title: "Mountain Trip",
    location: "Nandi Hills",
    area: "Bangalore, Karnataka",
    percentage: "80%",
    category: "Mountain",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ffa9362c61f6008e96c939f49ae65b23f148655?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
    title: "Zoo Trip",
    location: "Bannerghatta National Park",
    area: "Bangalore, Karnataka",
    percentage: "40%",
    category: "Forest",
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/31g5nprim/mountain.PNG",
    title: "Mountain Trip",
    location: "Skandagiri",
    area: "Bangalore, Karnataka",
    percentage: "80%",
    category: "Mountain",
  },
  {
    id: 5,
    image: "https://ik.imagekit.io/31g5nprim/16-modified.png",
    title: "River Trip",
    location: "Beas River",
    area: "Manali, Himachal Pradesh",
    percentage: "90%",
    category: "Lakes",
  },
  {
    id: 6,
    image: "https://ik.imagekit.io/31g5nprim/17-modified.png",
    title: "Zoo Trip",
    location: "Nahargarh Biological Park",
    area: "Jaipur, Rajasthan",
    percentage: "70%",
    category: "Forest",
  },
];

// Routes for specific trips
const getRouteForTrip = (trip: Trip): string => {
  if (trip.title === "Ulsoor Lake") return "/ulsoorlake";
  if (trip.title === "Zoo Trip" && trip.location === "Bannerghatta National Park") return "/zoo";
  if (trip.title === "Mountain Trip" && trip.location === "Nandi Hills") return "/nandi";
  if (trip.title === "Mountain Trip" && trip.location === "Skandagiri") return "/skandagiri";
  if (trip.title === "River Trip" && trip.location === "Beas River") return "/manaliriver";
  if (trip.title === "Zoo Trip" && trip.location === "Nahargarh Biological Park") return "/jaipurpark";
  return "";
};

export default function Trips() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { destination } = useTripStore(); // ✅ Get selected destination
  const router = useRouter();

  // Filter trips
  const filteredTrips = tripsData.filter((trip) => {
    const matchesSearch =
      `${trip.title} ${trip.location} ${trip.area}`.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || trip.category === selectedCategory;

    const matchesDestination =
      destination === "" || trip.area.toLowerCase().includes(destination.toLowerCase());

    return matchesSearch && matchesCategory && matchesDestination;
  });

  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <DestinationHeader />
          <SearchBar value={search} onChange={setSearch} />
          <Categories
            selectedCategory={selectedCategory}
            onSelectCategory={(category) =>
              setSelectedCategory((prev) => (prev === category ? "" : category))
            }
          />

          {filteredTrips.map((trip: Trip) => {
            const route = getRouteForTrip(trip);
            return (
              <View key={trip.id} style={{ paddingHorizontal: 20, width: "100%" }}>
                <TouchableOpacity onPress={() => router.push(route as `/`)}>
                  <FeaturedTrip
                    image={trip.image}
                    title={trip.title}
                    location={trip.location}
                    area={trip.area}
                    percentage={trip.percentage}
                    style={styles.tripCard}
                  />
                </TouchableOpacity>
              </View>
            );
          })}

          {filteredTrips.length === 0 && (
            <Text style={{ marginTop: 20, color: "#71717A" }}>
              No trips found.
            </Text>
          )}

          <View style={{ height: 160 }} /> {/* Prevent scroll cutoff */}
        </View>
      </ScrollView>

      {/* ✅ Fixed button */}
      <TouchableOpacity
        style={styles.viewItineraryButtonFixed}
        onPress={() => router.push("/iternarylist")}
      >
        <Text style={styles.buttonText}>View Created Itinerary</Text>
      </TouchableOpacity>

      {/* ✅ Footer */}
      <View style={styles.footerContainer}>
        <ItineraryFooter />
      </View>
    </View>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#F5F5F5",
    paddingTop: 56,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#1C1917",
    position: "relative",
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  tripCard: {
    width: "100%",
    marginTop: 20,
  },
  viewItineraryButtonFixed: {
    position: "absolute",
    bottom: 72, // Adjust to match your footer height
    left: 80,
    right: 80,
    backgroundColor: "#008FA0",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
    zIndex: 10,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
});

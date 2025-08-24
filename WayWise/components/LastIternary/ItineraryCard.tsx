import React, { useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Animated,
  ScrollView,
} from "react-native";
import { ItineraryHeader } from "./ItineraryHeader";
import { DaySection } from "./DaySection";
import { useRouter } from "expo-router";
import { useItineraryStore } from "../../store/useItineraryStore";
import { useAuth } from "../../contexts/AuthContext"; // Add this import

export const ItineraryCard: React.FC = () => {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const items = useItineraryStore((state) => state.items);
  const { user, isAuthenticated } = useAuth(); // Get user from AuthContext

  // Display user's name if authenticated, otherwise show "Guest"
  const displayName = isAuthenticated && user?.name ? user.name : "Guest";

  const groupedActivities = {
    food: items.filter((item) => item.category === "food"),
    places: items.filter((item) => item.category === "places"),
    shopping: items.filter((item) => item.category === "shopping"),
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/73a93131dde859121269ba27e6b7212dd05af26a?placeholderIfAbsent=true&apiKey=7ceb83e8066846e7bc013a848d89dcd3",
      }}
      style={styles.background}
      resizeMode="cover" // ✅ full fit
    >
      <View style={styles.overlay}>
        <ItineraryHeader
          title={`${displayName}'s Itinerary`}

          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31fc0d493144ca6eb8c96c00c545b040001afe34?placeholderIfAbsent=true&apiKey=7ceb83e8066846e7bc013a848d89dcd3"
        />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <DaySection
            dayNumber={1}
            activities={{
              morning: groupedActivities.food.map(
                (item) => `${item.name} - ${item.details}`
              ),
              afternoon: groupedActivities.places.map(
                (item) => `${item.name} - ${item.details}`
              ),
              evening: groupedActivities.shopping.map(
                (item) => `${item.name} - ${item.details}`
              ),
            }}
          />
        </ScrollView>

        <Animated.View
          style={[
            styles.floatingButtonContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <Pressable
            onPress={() => router.push("/tripprep")}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.8 },
            ]}
          >
            <Text style={styles.buttonText}>Next Steps: Trip Prep</Text>
          </Pressable>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
  flex: 1,
  justifyContent: "flex-start",
  paddingBottom: 110, // ensures scrollable content doesn't hide behind the button
},
  scrollContent: {
    paddingHorizontal: 50,
    paddingBottom: 240,
  },
  floatingButtonContainer: {
  position: "absolute",
  bottom: 60, // ✅ slightly above footer
  left: 0,
  right: 0,
  alignItems: "center",
},
  button: {
    backgroundColor: "#f97316",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default ItineraryCard;

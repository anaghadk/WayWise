"use client";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import ProfileHeader from "./ProfileHeader";
import ProfilePicture from "./ProfilePicture";
import ProfileInfoItem from "./ProfileInfoItem";
import LogoutButton from "./LogoutButton";
import LocationIcon from "./LocationIcon";
import { useTripStore } from "../../store/tripStore";

interface ProfilePageProps {
  onRequestLogout: () => void;
}

// 🔧 Fake trip generator based on email length
const getFakeTrips = (email: string | undefined): string[] => {
  if (!email) return ["Bangalore", "Manali"];
  const seed = email.length;
  const options = [
    ["Bangalore", "Jaipur"],
    ["Manali"],
    ["Jaipur", "Manali"],
    ["Jaipur"],
    ["Manali"],
    ["Bangalore", "Jaipur", "Manali"],
  ];
  return options[seed % options.length];
};

const ProfilePage: React.FC<ProfilePageProps> = ({ onRequestLogout }) => {
  const { user } = useAuth();
  const destination = useTripStore((state) => state.destination);

  return (
    <ImageBackground
      source={{
        uri: "https://ik.imagekit.io/31g5nprim/fgg.PNG",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileHeader />
        <ProfilePicture />

        <View style={styles.infoBox}>
          <ProfileInfoItem
            icon={
              <Image
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b88cf7a9c05a4440b6838e0f57a2f9d392ba710",
                }}
                style={styles.icon}
              />
            }
            title="Name"
            value={user?.name || "Guest User"}
          />

          <ProfileInfoItem
            icon={
              <Image
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0986476b81d45e081d1481c35d56ab8435696a15",
                }}
                style={styles.icon}
              />
            }
            title="E-Mail"
            value={user?.email || "No email provided"}
          />

          <ProfileInfoItem
  icon={<LocationIcon />}
  title="Current Trip"
  value={
    destination ? (
      <Text style={styles.valueText}>
        <Text></Text>
        <Text>{destination}</Text>
      </Text>
    ) : (
      <Text style={styles.valueText}>No trip selected</Text>
    )
  }
/>

        </View>

        <View style={styles.logoutContainer}>
          <LogoutButton onLogoutPress={onRequestLogout} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 120,
    paddingTop: 40,
  },
  infoBox: {
    marginTop: 40,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 1,
    width: "85%",
    alignItems: "center",
    gap: 24,
  },
  icon: {
    width: 37,
    height: 40,
    marginRight: 10,
  },
  valueText: {
    fontSize: 20,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  logoutContainer: {
    marginTop: 72,
  },
});

export default ProfilePage;

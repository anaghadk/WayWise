import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Modal, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import FinalSteps from "../components/IternaryCart/FinalSteps";
import ItineraryFooter from "../components/FoodIternary/ItineraryFooter";
import { useRouter } from "expo-router";

const ItineraryCart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
    router.push("/lastiternary"); // replace this with your new file route
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FinalSteps onConfirm={handleConfirm} />
      </ScrollView>
      <ItineraryFooter />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Itinerary Confirmed!</Text>
                <TouchableOpacity style={styles.okButton} onPress={handleOk}>
                  <Text style={styles.okText}>OK</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
     backgroundColor: "white",// to leave space for footer
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 250,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  okButton: {
    backgroundColor: "#14532D",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  okText: {
    color: "white",
    fontSize: 16,
  },
});

export default ItineraryCart;

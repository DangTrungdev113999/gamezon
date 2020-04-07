import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import Card from '../components/Card';
import { globalStyles } from "../styles/global";

function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Leaning nodejs", body: "this is body", rating: 4, key: "1" },
    { title: "Leaning reactjs", body: "this is body", rating: 5, key: "2" },
    { title: "Leaning react-native", body: "this is body", rating: 3, key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>

      <Modal visible={openModal} animationType='slide'>
        <View style={styles.modalContainer} >
          <Text>This is modal</Text>
          <TouchableOpacity onPress={() => setOpenModal(false)} >
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }} />
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setOpenModal(true)} >
        <MaterialIcons name='add' size={24} style={styles.modalToggle} />
      </TouchableOpacity>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("review_detail", { item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {

  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0,
  }
})

export default Home;

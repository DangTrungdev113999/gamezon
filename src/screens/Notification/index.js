import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575d" />
          <Ionicons name="md-more" size={24} color="#52575d" />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../../assets/coders-x.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#dfd8c8" />
          </View>

          <View style={styles.active}></View>

          <View style={styles.add}>
            <Ionicons
              name="ios-add"
              size={46}
              color="#dfd8c8"
              style={{ marginTop: 5, marginLeft: 2 }}
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            TRUNG
          </Text>
          <Text style={[styles.text, { color: "#aeb5bc", fontSize: 14 }]}>
            Developer
          </Text>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>333</Text>
            <Text style={[styles.text, styles.subText]}>Post</Text>
          </View>

          <View
            style={[
              styles.statusBox,
              {
                borderColor: "#Dfd8c8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>666</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>

          <View style={styles.statusBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>888</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../../assets/bg-1.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../../assets/bg-2.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../../assets/bg-1.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 24, fontWeight: "500", color: "#dfd8c8" },
              ]}
            >
              70
            </Text>
            <Text style={[styles.subText, { color: "#dfd8c8" }]}>Media</Text>
          </View>
        </View>

        <Text style={[styles.subText, styles.recent]}>Recent Activaty</Text>

        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { fontWeight: "500", color: "#41444b" }]}
              >
                Start Flolowing
                <Text style={{ fontWeight: "400" }}>
                  Jake Challeate and
                  <Text style={{ fontWeight: "400" }}>Desgin To Code</Text>
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { fontWeight: "500", color: "#41444b" }]}
              >
                Start Flolowing
                <Text style={{ fontWeight: "400" }}>Jake Challeate</Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { fontWeight: "500", color: "#41444b" }]}
              >
                Start Flolowing
                <Text style={{ fontWeight: "400" }}>Jake Challeate</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575d",
  },
  subText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#AEB5bc",
    textTransform: "uppercase",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  dm: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: "#41444b",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#34ffb9",
    position: "absolute",
    bottom: 15,
    left: 15,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statusContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 32,
  },
  statusBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444b",
    height: 100,
    width: 100,
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignContent: "flex-start",
    marginBottom: 16,
  },
  recentItemIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#CAbfab",
    padding: 4,
    marginTop: 3,
    marginRight: 20,
  },
});

export default Notification;

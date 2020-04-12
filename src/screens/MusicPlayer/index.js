import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Slider from "react-native-slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";

function MucsicPlayer() {
  const [maximumValue, setMaximumValue] = useState(300);
  const [timeElapsed, setIimeElapsed] = useState("0:00");
  const [timeRemainging, setTimeRemainging] = useState("5:00");

  const changeTime = (seconds) => {
    setIimeElapsed(Moment.utc(seconds * 1000).format("m:ss"));

    console.log(timeElapsed);
    setTimeRemainging(
      Moment.utc((timeElapsed - seconds) * 1000).format("m:ss")
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <View style={{ alignContent: "center", marginTop: 24 }}>
            <Text style={[styles.textLight, { fontSize: 24 }]}>PLAY LIST</Text>
            <Text
              style={[
                styles.text,
                { fontSize: 15, fontWeight: "500", marginTop: 8 },
              ]}
            >
              I am red cat
            </Text>
          </View>

          <View style={styles.coverContainer}>
            <Image
              source={require("./../../../assets/corverArt.jpeg")}
              style={styles.cover}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: 32 }}>
            <Text
              style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}
            >
              Enable
            </Text>
            <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>
              jerremy Blake
            </Text>
          </View>
        </View>

        <View style={{ margin: 32 }}>
          <Slider
            minimumValue={0}
            maximumValue={maximumValue}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor="#93abb3"
            onValueChange={(seconds) => changeTime(seconds)}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: -12,
            }}
          >
            <Text style={[styles.textLight, styles.timeStamp]}>
              {timeElapsed}
            </Text>
            <Text style={[styles.textLight, styles.timeStamp]}>
              {timeRemainging}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="backward" size={32} color="#93b8b3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButtonContainer}>
            <FontAwesome5
              name="play"
              size={32}
              color="#3d425c"
              style={[styles.playButton, { marginLeft: 8 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="forward" size={32} color="#93b8b3" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEC",
  },
  textLight: {
    color: "#B6B7Bf",
  },
  textDark: {
    color: "#3d425c",
  },
  text: {
    color: "#8e97A6",
  },
  coverContainer: {
    marginTop: 32,
    width: 250,
    height: 250,
    shadowColor: "#5d3f6a",
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: "#fff",
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: "tomato",
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: "500",
    color: "#000",
  },
  playButtonContainer: {
    backgroundColor: "#fff",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    shadowColor: "#5d3f63",
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});

export default MucsicPlayer;

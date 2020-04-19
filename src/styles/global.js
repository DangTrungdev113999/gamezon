import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleText: {
    fontFamily: "nunito-regular",
    fontSize: 18,
    padding: 10,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const images = {
  "1": require("../../assets/rating-1.png"),
  "2": require("../../assets/rating-2.png"),
  "3": require("../../assets/rating-3.png"),
  "4": require("../../assets/rating-4.png"),
  "5": require("../../assets/rating-5.png"),
};

export const colors = {
  darkBg: "#222",
  lightBg: "#333",
  darkHl: "#666",
  light: "#888",
  pink: "#ea3372",
  text: "#fff",
  textSec: "#aaa",
};

export const gs = {
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: colors.lightBg,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 15,
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.text,
    fontSize: 20,
  },
  divider: {
    borderBottomColor: "#444",
    borderBottomWidth: 1,
    marginVertical: 24,
  },
};

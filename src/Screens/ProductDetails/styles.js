import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
  detailsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
  },
  paragraph: {
    fontSize: 14,
  },
  pricing: {
    fontSize: 26,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});

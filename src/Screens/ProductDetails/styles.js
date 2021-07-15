import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 30,
    alignSelf: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
  },
  payment: {
    marginBottom: 15,
  },
  pricing: {
    fontSize: 26,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  description: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});

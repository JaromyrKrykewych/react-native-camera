import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 60,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  buttonsContainer: {
    marginVertical: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
  noImage: {
    borderWidth: 1,
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

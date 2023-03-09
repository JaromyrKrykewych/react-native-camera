import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 30,
    fontSize: 22,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center'
  },
  imageList: {
    flex: 1,
    marginTop: 30,
  },
  flatlist: {
    flexGrow: 0,
    maxHeight: height * 0.6,
  },
  image: {
    width: 300,
    height: 200,
  },
  buttonContainer: {
    marginTop: 30,
    marginHorizontal: '20%',
  },
})
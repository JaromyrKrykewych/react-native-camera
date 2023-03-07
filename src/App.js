import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Button, Image, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "./styles";

const App = () => {
  const [pickedUrl, setPickedUrl] = useState(null);
  const [isImagePicked, setIsImagePicked] = useState(false);
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Necesitamos permisos para usar la cámara",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.assets[0].uri);
  };

  const onHandleSearchImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    setPickedUrl(image.assets[0].uri);
  };

  useEffect(() => {
    pickedUrl !== null && setIsImagePicked(true);
  }, [pickedUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Image Picker</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          color={"blue"}
          title={"Take a picture"}
          onPress={onHandleTakeImage}
        />
        <Button
          color={"blue"}
          title={"Search a picture"}
          onPress={onHandleSearchImage}
        />
      </View>

      <View style={styles.imageContainer}>
        {!isImagePicked ? (
          <View style={styles.noImage}>
            <Text>No image selected</Text>
          </View>
        ) : (
          <Image
            style={styles.image}
            source={{ uri: pickedUrl }}
            resizeMode={"center"}
            alt={"picture"}
          />
        )}
      </View>
    </View>
  );
};

export default App;

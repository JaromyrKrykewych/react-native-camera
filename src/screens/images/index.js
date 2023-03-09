import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { deleteImage, getImages } from "../../db";
import { useEffect, useState } from "react";

import { styles } from "./styles";

const Images = () => {
  const [images, setImages] = useState([]);

  const onHandleDelete = async () => {
    const result = await deleteImage();
    setImages([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.uri }}
        resizeMode={"contain"}
        style={styles.image}
      />
    </View>
  );

  const keyExtractor = (item) => item.id;

  useEffect(() => {
    (async () => {
      const result = await getImages();
      setImages(result?.rows?._array);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {images.length === 0 ? (
        <Text style={styles.title}>There's no images</Text>
      ) : (
        <Text style={styles.title}>Images</Text>
      )}
      {images.length > 0 && (
        <View style={styles.imageList}>
          <View>
            <FlatList
              data={images}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              style={styles.flatlist}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              color={"blue"}
              title={"Delete images"}
              onPress={onHandleDelete}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Images;

import * as Location from 'expo-location';

import { Button, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const LocationPicker = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onHandlerCurentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
  }
  useEffect(() => {
    
  }, []);

  let text = "There's no location";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Button
          color={"blue"}
          title={"Add location"}
          onPress={onHandlerCurentLocation}
        />
      <Text>{text}</Text>
    </View>
  );
}

export default LocationPicker
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`).then((response) => response.json()).then((responseJSON) => { alert(responseJSON) })
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    fetch(`https://world.openfoodfacts.org/api/v0/product/0014100099680.json`)
      .then(response => response.json())
      .then(responseJSON => {
        alert(responseJSON.product.ingredients_debug);
      });
  };
  //fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json').then((response) => response.json()).then((responseJSON) => alert(responseJSON.product.ingredients_text))

  if (hasPermission === null) {
    return (
      <Text style={{ justifyContent: 'center', alignContent: 'center' }}>
        Requesting for camera permission
      </Text>
    );
  }
  if (hasPermission === false) {
    return (
      <Text style={{ justifyContent: 'center', alignContent: 'center' }}>
        No access to camera
      </Text>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity onPress={() => setScanned(false)}>
          <Text
            style={{
              backgroundColor: '#00c400',
              borderColor: 'white',
              borderWidth: 1,
              margin: 15,
              color: 'white',
              fontSize: 15,
              textAlign: 'center',
              padding: 10,
            }}>
            Tap Here to Scan Again
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

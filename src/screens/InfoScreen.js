import { SocialIcon } from 'react-native-elements';

import React, { Component } from 'react';
import { View, Button, Text, SafeAreaView, Linking } from 'react-native';

export default class App extends Component {
  state = {
    loaded: false,
    data: null,
  };
  render() {
    let view = this.state.loaded ? (
      <View>
        <Text>{this.state.data}</Text>
      </View>
    ) : (
      <View>
        <Text>Loading</Text>
      </View>
    );
    return (
      <SafeAreaView>
        <View>
          <Button
            style={{ marginTop: 9, padding: 5 }}
            title="Get"
            onPress={() => {
              fetch(
                'https://world.openfoodfacts.org/api/v0/product/0014100099680.json'
              )
                .then(response => response.json())
                .then(responseJSON =>
                  this.setState({
                    loaded: true,
                    data: responseJSON.product.ingredients_text,
                  })
                );
            }}
          />
          {view}
          <SocialIcon
            title="Join Our Community"
            button
            type="facebook"
            onPress={() =>
              Linking.openURL('https://www.facebook.com/communityName/')
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

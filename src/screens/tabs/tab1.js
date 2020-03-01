import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  WebView,
} from 'native-base';
import { View, Text, ActivityIndicator, Linking } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAu9lZ0umC-ey1kT69zwA0wfQQ4mRKl6jI',
  authDomain: 'veapp-9cdb6.firebaseapp.com',
  databaseURL: 'https://veapp-9cdb6.firebaseio.com',
  storageBucket: 'veapp-9cdb6.appspot.com',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let database = firebase
  .database()
  .ref('users/3Aocbjp03Ltzqq6WDSzm')
  .child('news');
export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newNews: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    database.on('value', snap => {
      let newNewsVals = snap.val();
      this.setState({
        newNews: newNewsVals,
        isLoading: false,
      });
    });
  }
  render() {
        let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator
          style={{ justifyContent: 'center', alignItems: 'center' }}
          color="#00c400"
          size="large"
          animating={this.state.isLoading}
        />
        <Text>Getting you all the gossip</Text>
      </View>
    ) : (
      this.state.newNews.map(obj => (
        <ListItem
          thumbnail
          button
          onPress={() => {
            Linking.openURL(obj.link)
          }}>
          <Left>
            <Thumbnail square source={{ uri: 'https://picsum.photos/200' }} />
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 3 }}>
              {obj.title}
            </Text>
            <Text note numberOfLines={3}>
              {obj.description}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text note style={{ padding: 2, marginTop: 3, fontSize: 7 }}>
                by {obj.author} -{' '}
              </Text>
              <Text note style={{ padding: 2, marginTop: 3, fontSize: 7 }}>
                {obj.time}
              </Text>
            </View>
          </Body>
          <Right>
            <Button transparent onPress={() => alert('to browser function')}>
              <Text style={{ color: 'blue' }}>View</Text>
            </Button>
          </Right>
        </ListItem>
      ))
    );
    return (
      <Container>
        <Content>{view}</Content>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem
              thumbnail
              button
              onPress={() => alert('tobrowser function')}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: 'https://i.picsum.photos/id/100/200/300.jpg' }}
                />
              </Left>
              <Body>
                <Text>Recepie</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . . Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => alert('to browser function')}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail button onPress={() => alert('broski')}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: 'https://i.picsum.photos/id/100/200/300.jpg' }}
                />
              </Left>
              <Body>
                <Text>Recepie</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . . Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: 'https://i.picsum.photos/id/100/200/300.jpg' }}
                />
              </Left>
              <Body>
                <Text>Recepie</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . . Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: 'https://i.picsum.photos/id/100/200/300.jpg' }}
                />
              </Left>
              <Body>
                <Text>Recepie</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .Its time to build a
                  difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

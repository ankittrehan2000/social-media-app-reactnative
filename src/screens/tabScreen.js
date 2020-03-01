import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Drawer,
  ScrollableTab,
} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#00c400' }} hasTabs>
          <Left />
          <Body>
            <Title style={{ color: 'white' }}>News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
          <Tab
            tabStyle={{ backgroundColor: '#00c400' }}
            activeTabStyle={{ backgroundColor: '#00c400' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="News">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#00c400' }}
            activeTabStyle={{ backgroundColor: '#00c400' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Videos">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#00c400' }}
            activeTabStyle={{ backgroundColor: '#00c400' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Companies">
            <Tab3 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#00c400' }}
            activeTabStyle={{ backgroundColor: '#00c400' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Featured">
            <Tab4 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#00c400' }}
            activeTabStyle={{ backgroundColor: '#00c400' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
            heading="Reddit">
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

//https://world.openfoodfacts.org/

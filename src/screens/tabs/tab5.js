import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator, Text } from 'react-native';

const Header = ({ loading }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cruelty Free WebSite: PETA</Text>
    {loading ? (
      <View>
        <ActivityIndicator color="#00c400" size="large" />
        <Text>Helping you save these animals</Text>
      </View>
    ) : null}
  </View>
);

export default class MyWeb extends Component {
  state = {
    WEBVIEW_REF: 'weViewRed',
    loading: false,
  };
  LoadingIndicatorView() {
    return <ActivityIndicator color="#00c400" size="large" />;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header loading={this.state.loading} />
        <WebView
          source={{
            uri: 'https://www.reddit.com/r/vegan/new/',
          }}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
          renderLoading={this.LoadingIndicatorView}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

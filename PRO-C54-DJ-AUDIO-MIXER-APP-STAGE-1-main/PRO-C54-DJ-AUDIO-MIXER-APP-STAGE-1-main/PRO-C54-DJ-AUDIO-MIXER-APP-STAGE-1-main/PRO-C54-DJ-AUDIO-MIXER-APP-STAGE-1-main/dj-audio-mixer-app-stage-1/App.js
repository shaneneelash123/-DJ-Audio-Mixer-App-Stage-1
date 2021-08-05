import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Sound1 extends Component {
  displayAlert = () => {
    alert('I am SOUND 1');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 1"
        onPress={this.displayAlert}
      />
    );
  }
}
class Sound2 extends Component {
  displayAlert = () => {
    alert('I am SOUND2');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 2"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound3 extends Component {
  displayAlert = () => {
    alert('I am SOUND 3');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 3"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound4 extends Component {
  displayAlert = () => {
    alert('I am SOUND 4');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 4"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound5 extends Component {
  displayAlert = () => {
    alert('I am SOUND 5');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 5"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 50, marginBottom: 500 }}>
        <View style={{ backgroundColor: 'green' }}>
          <Text style={{ marginTop: 50, marginBottom: 50, marginLeft: 50 }}>
            DJ AUDIO MIXER APP STAGE 1
          </Text>
        </View>
        <Sound1 Mycolor="yellow" />
        <Text> </Text>
        <Sound2 Mycolor="red" />
        <Text> </Text>
        <Sound3 Mycolor="purple" />
        <Text> </Text>
        <Sound4 Mycolor="black" />
        <Text> </Text>
        <Sound5 Mycolor="brown" />
      </View>
    );
  }
}

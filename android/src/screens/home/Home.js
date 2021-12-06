import React from 'react';
import {View as V, StyleSheet} from 'react-native';
export class Home extends React.Component {
  render() {
    return <V style={styles.container} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

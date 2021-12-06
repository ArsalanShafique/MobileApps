import React from 'react';
import {TouchableOpacity, View as V, Text} from 'react-native';
import {styles} from './styles';

export class AppBtn extends React.Component {
  render() {
    return (
      <V
        style={{
          width: '100%',
        }}>
        <V style={styles.AppbtnmainView}>
          <TouchableOpacity
            onPress={this.props.btnPressed}
            style={styles.AppBtn}>
            <Text style={styles.Appbtnstyling}>{this.props.title}</Text>
          </TouchableOpacity>
        </V>
      </V>
    );
  }
}

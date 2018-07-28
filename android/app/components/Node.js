import React, {Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

export default class todoapp extends Component{
	render(){
		return(
      <View style = {this.props.keyval} style={styles.node}>
        <Text style={styles.nodeText}>{this.props.val.date}</Text>
        <Text style={styles.nodeText}>{this.props.val.node}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.nodeDelete}>
          <Text style={styles.nodeDeleteText}>D</Text>
      </TouchableOpacity>

      </View>

		);
	}
}
const styles = StyleSheet.create({
  node: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFF00',
  },
  nodeText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  nodeDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  nodeDeleteText:{
    color: 'white',
  }
});

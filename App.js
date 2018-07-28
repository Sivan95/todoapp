import React, {Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import Node from './android/app/components/Node';

export default class todoapp extends Component{
	state = {
		nodeArray:[],
		nodeText: '',
	}
	render(){
		let nodes = this.state.nodeArray.map((val,key) => {
			return <Node key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNode(key)}/>

		});
		return(
			<View style={styles.container} >
				<View style={styles.header}>
					<Text style={styles.headerText}>- TASK REMINDER -</Text>
				</View>

				<ScrollView style={styles.scrollContainer}>
					{nodes}
				</ScrollView>
				<View style={styles.footer}>
					<TouchableOpacity onPress={this.addNode.bind(this)} style={styles.addButton}>
						<Text style={styles.addButtonText}>+</Text>
					</TouchableOpacity>

					<TextInput style={styles.textInput}
						onChangeText={(nodeText)=> this.setState({nodeText})} value={this.state.nodeText}
						placeholder=">Task"
						placeholderTextColor='white'
						underlineColorAndroid='transparent'
					/>
			</View>
		 </View>
		);
	}
	addNode(){
		if(this.state.nodeText){
			var d = new Date();
			this.state.nodeArray.push({'date':d.getFullYear()+ "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'node': this.state.nodeText});
			this.setState({nodeArray:this.state.nodeArray})
			this.setState({nodeText: ''});
		}
	}
	deleteNode(key){
		this.state.nodeArray.splice(key, 1);
		this.setState({nodeArray: this.state.nodeArray});
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header:{
		backgroundColor: '#E91E63',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 10,
		borderBottomColor: '#ddd',
	},
	headerText: {
		color: 'white',
		fontSize: 30,
		padding: 26,
	},
	scrollContainer:{
		flex: 1,
		marginBottom: 100,
	},
	footer:{
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		right: 0,
	},
	addButton:{
		backgroundColor: '#E91E63',
		width: 90,
		height: 90,
		borderRadius: 50,
		borderColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8,
		marginBottom: -45,
		zIndex: 10,
	},
	addButtonText:{
		color: '#fff',
		fontSize: 24,
	},
	textInput:{
		alignSelf:'stretch',
		color: '#fff',
		padding: 20,
		paddingTop: 46,
		backgroundColor: '#252525',
		borderTopWidth: 2,
		borderTopColor: '#ededed',
		fontSize: 30,
	}
});

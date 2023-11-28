import { StyleSheet, Text, View , Button, Alert} from 'react-native'
import React from 'react'

const List = () => {
	return(
		<View style={styles.list}>
			<View style={styles.all}>
				<Text style={styles.text}>All</Text>
			</View>
			<View style={styles.action}>
				<Text style={styles.text}>Action</Text>
			</View>
			<View style={styles.comedy}>
				<Text style={styles.text}>Comedy</Text>
			</View>
			<View style={styles.romance}>
				<Text style={styles.text}>Anime</Text>
			</View>
		</View>
	)
}


export default List

const styles = StyleSheet.create({
	list:{
		flexDirection:'row',
		gap: 30,
		marginTop:20,
	},

	text:{
		color: 'white',
	},

	all:{
		width:70,
		height:30,
		borderRadius:5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#445D48',
	},

	action:{
		width:70,
		height:30,
		borderRadius:5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#445D48',
	},

	comedy:{
		width:70,
		height:30,
		borderRadius:5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#445D48',
	},

	romance:{
		width:70,
		height:30,
		borderRadius:5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#445D48',
	},

	pencet:{
		backgroundColor: 'red',
		color:'red'
	},
})
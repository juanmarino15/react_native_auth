import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
	const navigation = useNavigation();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error) => alert(error.message));
	};

	return (
		<View style={styles.container}>
			<Text>Email: {auth.currentUser?.email}</Text>
			<TouchableOpacity style={styles.button} onPress={handleSignOut}>
				<Text style={styles.buttonText}>Sign out</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#0782F9",
		windth: "60%",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 40,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
});

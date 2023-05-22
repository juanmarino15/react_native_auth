import React from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

const LoginScreen = () => {
	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Email"
					// value={} onChangeText={text=>()}
					style={styles.input}
				/>
				<TextInput
					placeholder="Password"
					// value={} onChangeText={text=>()}
					style={styles.input}
					secureTextEntry
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

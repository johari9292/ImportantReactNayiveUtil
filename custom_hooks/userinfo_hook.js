import { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import analytics from "@react-native-firebase/analytics";

export const useUserAuth = () => {
	const [user, setUser] = useState(auth().currentUser);
	async function loginAnalaytics() {
		await analytics().logEvent("user_login", {
			user_name: user?.displayName,
			user_email: user?.email,
			user_phone: user?.phoneNumber,
			date: Date.now(),
		});
	}
	useEffect(() => {
		const subscribe = auth().onUserChanged(async (user) => {
			if (user) {
				setUser(user);
				loginAnalaytics();
			} else {
				setUser(null);
			}

			return () => subscribe();
		});
	}, []);
	return [user === null ? false : true, user];
};

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-community/async-storage";

import { setProfile, resetProfile } from "../redux/actions/profileActions";
import { setAuth } from "../redux/actions/authActions";

export const useAuth = () => {
	const [isAuthStateLoading, setAuthStateLoading] = useState(true);
	const dispatch = useDispatch();

	const setAuthInfo = async (signInProvider, token) => {
		dispatch(setAuth(signInProvider, token));
		setAuthStateLoading(false);
	};

	useEffect(() => {
		const subscribe = auth().onUserChanged(async (user) => {
			if (user) {
				const { signInProvider, token } = await user.getIdTokenResult();
				dispatch(
					setProfile({
						email: user.email,
						emailVerified: user.emailVerified,
						photoUrl: user.photoURL,
						phoneNumber: user.phoneNumber,
						displayName: user.displayName,
						uid: user.uid,
					})
				);
				await setAuthInfo(signInProvider, token);
			} else {
				try {
					const { user: _user } = await auth().signInAnonymously();
					const { signInProvider, token } = await _user.getIdTokenResult();
					dispatch(resetProfile());
					await setAuthInfo(signInProvider, token);
				} catch (error) {
					console.log(error);
				}
			}
		});
		return () => subscribe();
	});

	return [isAuthStateLoading];
};

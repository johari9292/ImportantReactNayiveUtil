import { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { useDispatch } from "react-redux";

import { setFCMToken } from "../redux/actions/notifcationActions";

export const useNotification = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	const getFCMToken = async () => {
		try {
			const authStatus = await messaging().requestPermission();
			const enabled =
				authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
				authStatus === messaging.AuthorizationStatus.PROVISIONAL;
			// if (enabled) {
			// 	console.log("Authorization status:", authStatus);
			// }
			const token = await messaging().getToken();
			dispatch(setFCMToken(token));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getFCMToken();
		const subscribe = messaging().onTokenRefresh((token) => {
			dispatch(setFCMToken(token));
		});

		return subscribe;
	});

	return [loading];
};

export const useBackgroundNotification = (callback) => {
	messaging()
		.getInitialNotification()
		.then((remoteMessage) => {
			if (remoteMessage) {
				callback(remoteMessage);
			} else {
			}
		});
	return null;
};

export const useForegroundNotification = (callback) => {
	useEffect(() => {
		const unsubscribe = messaging().onMessage((remoteMessage) =>
			callback(remoteMessage)
		);
		return () => {
			unsubscribe();
		};
	}, []);
	return null;
};

export const useNotificationOpenedApp = (callback) => {
	useEffect(() => {
		const unsubscribe = messaging().onNotificationOpenedApp((remoteMessage) =>
			callback(remoteMessage)
		);
		return () => {
			unsubscribe();
		};
	}, []);
	return null;
};

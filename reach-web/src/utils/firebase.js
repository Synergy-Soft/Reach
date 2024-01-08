import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	sendEmailVerification,
	updateEmail,
	updatePassword,
	reauthenticateWithCredential,
} from "firebase/auth";
import { getDatabase, ref, set, push, remove, get } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCw417C7upiZrUOCnHB71pQHlftk_BZiFA",
	authDomain: "visual-lite.firebaseapp.com",
	projectId: "visual-lite",
	storageBucket: "visual-lite.appspot.com",
	messagingSenderId: "740556318357",
	appId: "1:740556318357:web:ad282a03cb6fff2e741d9c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		// This gives you a Google Access Token. You can use it to access Google APIs.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		return user;
	} catch (error) {
		console.error(error);
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
		// ...
	}
};

// Function to sign in with email and password
const signIn = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

// Function to create a user with email and password
const signUp = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password).then(
		(userCredential) => {
			// Send verification email
			return sendEmailVerification(userCredential.user);
		}
	);
};

// Function to update user's email
const updateUserEmail = (newEmail) => {
	return updateEmail(auth.currentUser, newEmail);
};

// Function to update user's password
const updateUserPassword = (newPassword) => {
	return updatePassword(auth.currentUser, newPassword);
};

// Function to sign out
const signOutUser = () => {
	return signOut(auth);
};

const reauthenticateUser = (currentUser, credential) => {
	return reauthenticateWithCredential(currentUser, credential);
};

const sendVerificationEmail = (user) => {
	return sendEmailVerification(user);
};

const database = getDatabase();

export const addToLikes = async (userId, beerId) => {
	const likesRef = ref(database, "likes/" + userId);
	const snapshot = await get(likesRef);
	if (snapshot.exists()) {
		const likes = snapshot.val();
		// Check if the beerId is already in the likes
		if (Object.values(likes).some((like) => like.beerId === beerId)) {
			return "Beer already liked";
		}
	}
	const newLikeRef = push(likesRef);
	set(newLikeRef, { beerId: beerId });
	return "Beer added to likes";
};

export const removeFromLikes = async (userId, beerId) => {
	const likesRef = ref(database, "likes/" + userId);
	const snapshot = await get(likesRef);
	if (snapshot.exists()) {
		const likes = snapshot.val();
		// Find the key of the like entry that matches the beerId
		const likeKey = Object.keys(likes).find(
			(key) => likes[key].beerId === beerId
		);
		if (likeKey) {
			await remove(ref(database, "likes/" + userId + "/" + likeKey));
			return "Beer removed from likes";
		} else {
			return "Beer not found in likes";
		}
	} else {
		return "No likes found for user";
	}
};

export const fetchLikedBeers = async (userId) => {
	const likesRef = ref(database, "likes/" + userId);
	const snapshot = await get(likesRef);
	if (snapshot.exists()) {
		return snapshot.val();
	} else {
		return {};
	}
};

export {
	auth,
	signIn,
	signUp,
	signOutUser,
	updateUserEmail,
	updateUserPassword,
	reauthenticateUser,
	sendVerificationEmail,
};

import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export function getFirebaseApp() {
	if (!firebaseConfig.apiKey) return null
	return getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
}

export function getDb() {
	const app = getFirebaseApp()
	return app ? getFirestore(app) : null
}

export function getAuthInstance() {
	const app = getFirebaseApp()
	return app ? getAuth(app) : null
}

export function getGoogleProvider() {
	return new GoogleAuthProvider()
}

export function getStorageBucket() {
	const app = getFirebaseApp()
	return app ? getStorage(app) : null
}



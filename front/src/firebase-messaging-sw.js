importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyD9CxihmhjZYx7coxsRvjNY1WOUCumJGDU",
  authDomain: "push-notifications-96ab3.firebaseapp.com",
  projectId: "push-notifications-96ab3",
  storageBucket: "push-notifications-96ab3.appspot.com",
  messagingSenderId: "265925964312",
  appId: "1:265925964312:web:e05d6f5246c1d9eb5a496d",
  measurementId: "G-QBJE50HT2H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging(firebaseApp);

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBqJZuvoZM2VBhlFbnoAzNBoPKsejkcqBs",
    authDomain: "pushnotification-872fa.firebaseapp.com",
    databaseURL: "https://pushnotification-872fa.firebaseio.com",
    projectId: "pushnotification-872fa",
    storageBucket: "pushnotification-872fa.appspot.com",
    messagingSenderId: "221030782365"
});
const messaging = firebase.messaging();



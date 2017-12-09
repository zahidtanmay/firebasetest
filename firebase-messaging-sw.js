importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyC2a8HKKypnN642yYQkapGCvK3A_3_QzUA",
    authDomain: "fcm-test-9ecd9.firebaseapp.com",
    databaseURL: "https://fcm-test-9ecd9.firebaseio.com",
    projectId: "fcm-test-9ecd9",
    storageBucket: "fcm-test-9ecd9.appspot.com",
    messagingSenderId: "771837354143"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
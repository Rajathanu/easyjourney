// firebase.auth().onAuthStateChanged((user)=>{
//     if(!user){
//         location.replace("welcome.html")
//     }else{
//         location.replace("index.html")
//     }
// })


function logout(){
    firebase.auth().signOut()
}
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

// Define Firebase configuration object
const firebaseConfig = {
  // Your Firebase configuration object goes here
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication service
const auth = getAuth(app);

// Set up a listener for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    location.replace(index.html)
  } else {
    // User is signed out
    location.replace(welcome.html)
  }
});
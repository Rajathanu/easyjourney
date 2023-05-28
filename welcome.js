// var firebaseConfig = {
//     apiKey: "AIzaSyCZRewtYKf1pdYmZDbjm8Wp86Hhotoeg68",
//     authDomain: "easy-journey-965da.firebaseapp.com",
//     databaseURL: "https://easy-journey-965da-default-rtdb.firebaseio.com",
//     projectId: "easy-journey-965da",
//     storageBucket: "easy-journey-965da.appspot.com",
//     messagingSenderId: "739946591795",
//     appId: "1:739946591795:web:16ef6c9ec8ed8e746c9546",
//     measurementId: "G-7J0NF7980V"
//   };
//   const app=firebase.initializeApp(firebaseConfig);
//   const analytics=firebase.analytics();


// import { initializeApp } from 'firebase/app';
// const app = initializeApp(firebaseConfig);

// const user=firebase.auth().currentUser;
// document.getElementById("loginForm").addEventListener("submit",(event)=>{
//     event.preventDefault()
// })


// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("index.html")
//     }
// })

// function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     firebase.auth().onAuthStateChanged((user)=>{
//         if(user){
//             location.replace("index.html")
//         }
//     })
//     .catch((error)=>{
//         document.getElementById("error").innerHTML = error.message
//     })
// }

// function signUp(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch((error) => {
//         document.getElementById("error").innerHTML = error.message
//     });
// }

// function forgotPass(){
//     const email = document.getElementById("email").value
//     firebase.auth().sendPasswordResetEmail(email)
//     .then(() => {
//         alert("Reset link sent to your email id")
//     })
//     .catch((error) => {
//         document.getElementById("error").innerHTML = error.message
//     });
// }

// function signUp() {

//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     // var username = document.getElementById("username");
    
//     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     promise.then(u => {
  
//       const user = firebase.auth().currentUser;
//     //   user.updateProfile({
//     //     displayName: username.value
  
//     //   })
//     then(() => {
  
//         alert("Signed Up with " + email.value);
  
//         window.location.assign('index.html');
  
//       }).catch((e) => {
//         alert(e.message);
//       })
//     })
  
//     promise.catch(e => alert(e.message));
//   }
  
  
//     function login(){
  
//        var email = document.getElementById("email");
//        var password = document.getElementById("password");
//        const user = firebase.auth().currentUser;
       
  
//        const promise = auth.signInWithEmailAndPassword(email.value, password.value).then(function() {
       
//          console.log(user);
         
//          window.location.assign('index.html');
       
//        });
//         promise.then(u =>{
//         alert("Signed In");})
//         promise.catch(e => alert(e.message));
//     }
  
//     function signOut(){
//       auth.signOut().then(function() {
  
//         alert("Signed Out");
//         window.location.assign('welcome.html');
    
//       });
//     }
function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var username = document.getElementById("username");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.then(u => {
  
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username.value
  
      }).then(() => {
  
        alert("Signed Up with " + email.value);
  
        window.location.assign('homepage.html');
  
      }).catch((e) => {
        alert(e.message);
      })
    })
  
    promise.catch(e => alert(e.message));
  }
  
  
    function signIn(){
  
       var email = document.getElementById("email");
       var password = document.getElementById("password");
       const user = firebase.auth().currentUser;
       
  
       const promise = auth.signInWithEmailAndPassword(email.value, password.value).then(function() {
       
         console.log(user);
         
         window.location.assign('index.html');
       
       });
        promise.then(u =>{
        alert("Signed In");})
        promise.catch(e => alert(e.message));
    }
  
    function signOut(){
      auth.signOut().then(function() {
  
        alert("Signed Out");
        window.location.assign('welcome.html');
    
      });
    }
// import firebase from "firebase/compat/app";
// import "firebase/compat/app";
// import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB515HosMXoNkx8thFhVxQJOevnd1GckxU",
//   authDomain: "js14-auth.firebaseapp.com",
//   projectId: "js14-auth",
//   storageBucket: "js14-auth.appspot.com",
//   messagingSenderId: "169580476806",
//   appId: "1:169580476806:web:e826a8e5f130e1917d5407"
// };

// const fire = firebase.initializeApp(firebaseConfig);

// export default fire;

// ====

// Import the functions you need from the SDKs you need
import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQDS6Z7aiaTzpgdbs3_lJPwUzoEmefzY0",
  authDomain: "check-13.firebaseapp.com",
  projectId: "check-13",
  storageBucket: "check-13.appspot.com",
  messagingSenderId: "70653200433",
  appId: "1:70653200433:web:ff0a56b9c8d935ca54ed10"
};

// Initialize Firebase
export default fire.initializeApp(firebaseConfig);
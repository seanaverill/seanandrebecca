
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

  // const { initializeApp } = require("firebase/app");
// const { initializeAppCheck } = require("firebase/app-check");

  const firebaseConfig = {
    apiKey: "AIzaSyBEdWmkUZevWmgconY80z2yUGCbyNzaL1o",
    authDomain: "my-first-project-dc3f5.firebaseapp.com",
    projectId: "my-first-project-dc3f5",
    storageBucket: "my-first-project-dc3f5.appspot.com",
    messagingSenderId: "983010598149",
    appId: "1:983010598149:web:208ede56aed42ffd8c6b6c",
    measurementId: "G-BXW9KDVBTT",
    databaseURL: "https://my-first-project-dc3f5-default-rtdb.firebaseio.com"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);



// Reference messages collection
var messagesRef = firebase.database().ref('messages');


// List for Form Submit
document.getElementById('rsvpForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
  e.preventDefault();

  // Get Values
  var attend = document.getElementById('attend').checked;

  var email = getInputVal('email');
  var name = getInputVal('name');
  var meal1 = getInputVal('meal1');
  var plus1Name = getInputVal('plus1Name');
  var meal2 = getInputVal('meal2');

  var gf = document.getElementById('gf').checked;
  var nuts = document.getElementById('nuts').checked;
  var vegan = document.getElementById('vegan').checked;
  var otherallergy = getInputVal('otherallergy');

  var gf2 = document.getElementById('gf2').checked;
  var nuts2 = document.getElementById('nuts2').checked;
  var vegan2 = document.getElementById('vegan2').checked;
  var otherallergy2 = getInputVal('otherallergy2');

  var brunch = document.getElementById('brunch').checked;


  // Save message
  saveMessage(attend, email, name, meal1, plus1Name, meal2, gf, nuts, vegan, otherallergy, gf2, nuts2, vegan2, otherallergy2, brunch);

  // Show alert
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.rsvpshrink').style.display = 'none';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    document.querySelector('.rsvpshrink').style.display = 'block';

  }, 6000);

}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to FIrebase
function saveMessage(attend, email, name, meal1, plus1Name, meal2, gf, nuts, vegan, otherallergy, gf2, nuts2, vegan2, otherallergy2, brunch){

let mGroupId = messagesRef.push().getKey();

messagesRef.child(mGroupId).set({
user:mGroupId,
attend: attend,
email: email,
name: name,
meal1: meal1,
plus1Name: plus1Name,
meal2: meal2,
gf: gf,
nuts: nuts,
vegan: vegan,
otherallergy: otherallergy,
gf2: gf2,
nuts2: nuts2,
vegan2: vegan2,
otherallergy2: otherallergy2,
brunch: brunch
  });
}




// https://my-first-project-dc3f5-default-rtdb.firebaseio.com/messages/-NK9cZB1aocEHqE0col-/email


// const db = getDatabase("https://my-first-project-dc3f5-default-rtdb.firebaseio.com/");
// const starCountRef = ref(db, 'messages/' + postId + '/email');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
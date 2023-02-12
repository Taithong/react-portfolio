import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Add Firebase storage
import 'firebase/compat/storage';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDGSJq7OejFpsmtDDIxiAtt8LERGnr6j34",
  authDomain: "portfolio-55d0a.firebaseapp.com",
  projectId: "portfolio-55d0a",
  storageBucket: "portfolio-55d0a.appspot.com",
  messagingSenderId: "222897287743",
  appId: "1:222897287743:web:a6ea98b688d79489533e8a",
  measurementId: "G-TF2KT97EF8",
};

function listAll(folder) {
    const storageRef = firebase.storage().ref();

  // [START storage_list_all]
  // Create a reference under which you want to list
  var listRef = storageRef.child(folder);

  // Find all the prefixes and items.
  listRef
    .listAll()
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        //   console.log("item ref:" + itemRef);
        itemRef.getDownloadURL().then((url) => {
          console.log("download url:" + url);
        });
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  // [END storage_list_all]
}

//   function listPaginate() {
//     const storageRef = firebase.storage().ref();

//     // [START storage_list_paginate]
//     async function pageTokenExample(){
//       // Create a reference under which you want to list
//       var listRef = storageRef.child('files/uid');

//       // Fetch the first page of 100.
//       var firstPage = await listRef.list({ maxResults: 100});

//       // Use the result.
//       // processItems(firstPage.items)
//       // processPrefixes(firstPage.prefixes)

//       // Fetch the second page if there are more elements.
//       if (firstPage.nextPageToken) {
//         var secondPage = await listRef.list({
//           maxResults: 100,
//           pageToken: firstPage.nextPageToken,
//         });
//         // processItems(secondPage.items)
//         // processPrefixes(secondPage.prefixes)
//       }
//     }
//     // [END storage_list_paginate]
//   }

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export { storage, listAll, firebase as default };

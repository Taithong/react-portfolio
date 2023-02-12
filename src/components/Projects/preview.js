// import React, { useState, useEffect } from "react";
// import {firebase, db} from 'firebase/compat/app';
// import { collection, setDoc, doc, getDocs } from "firebase/firestore";

// function Preview() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     loadAllImages();
//   }, []);

//   const loadAllImages = async () => {
//     const querySnapshot = await getDocs(
//       collection(db, "Pregraduation FEN")
//     );
//     let currImages = [];
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, "=>", doc.data());
//       currImages = [...currImages, doc.data().imageUrl];
//     });
//     setImages(currImages);
//   };
//   return (
//     <div>
//         <h1>Hello</h1>
//       {images &&
//         images.map((imageUrl) => {
//           return <img src={imageUrl} />;
//         })}
        
//     </div>
//   );
// }
// export default Preview;

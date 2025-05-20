import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

const fetchAllPeople = async () => {
  const querySnapshot = await getDocs(collection(db, "people"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default fetchAllPeople;

// EXAMPLE RESPONSE - fetchAllPeople

// [
//     {
//         id: '60xaR2IGiMK9l56r9Qtb',
//         age: 22,
//         firstName: 'James',
//         lastName: 'Daniel'
//     },
//     {
//         id: 'JSPodNwcCwisZ78g7aiG',
//         age: 19,
//         lastName: 'Doe',
//         firstName: 'John'
//     }
// ]

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

const fetchAllPeople = async () => {
  const querySnapshot = await getDocs(collection(db, "people"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default fetchAllPeople;

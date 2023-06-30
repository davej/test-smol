import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getBlogPosts() {
  const querySnapshot = await getDocs(collection(db, "blogPosts"));
  return querySnapshot.docs.map(doc => doc.data());
}

async function getPortfolioItems() {
  const querySnapshot = await getDocs(collection(db, "portfolioItems"));
  return querySnapshot.docs.map(doc => doc.data());
}

export { getBlogPosts, getPortfolioItems };
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCr9e8ZBFNYn1_UhEJJ1nlHQ9K8VcwdrPo",
//   authDomain: "dutu-a3d9e.firebaseapp.com",
//   projectId: "dutu-a3d9e",
//   storageBucket: "dutu-a3d9e.firebasestorage.app",
//   messagingSenderId: "1080106403900",
//   appId: "1:1080106403900:web:60d39175b45011e3809b39",
//   measurementId: "G-YPSZ1FZL8G"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export interface FeedbackData {
//   type: 'like' | 'dislike';
//   rating?: number;
//   improvements?: string[];
//   comment?: string;
//   timestamp: Timestamp;
//   language: string;
// }

// export const submitFeedback = async (feedback: Omit<FeedbackData, 'timestamp'>): Promise<void> => {
//   try {
//     await addDoc(collection(db, "feedback"), {
//       ...feedback,
//       timestamp: Timestamp.now()
//     });
//   } catch (error) {
//     console.error("Error submitting feedback:", error);
//     throw error;
//   }
// };

// export { db };
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

// 🔥 Firebase config (same as your screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyCr9e8ZBFNYn1_UhEJJ1nlHQ9K8VcwdrPo",
  authDomain: "dutu-a3d9e.firebaseapp.com",
  projectId: "dutu-a3d9e",
  storageBucket: "dutu-a3d9e.firebasestorage.app",
  messagingSenderId: "1080106403900",
  appId: "1:1080106403900:web:60d39175b45011e3809b39",
  measurementId: "G-YPSZ1FZL8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ---------------- TYPES ----------------

type FeedbackPayload = {
  reaction: "like" | "dislike";
  improvements?: string[];
  comment?: string;
  language?: string;
};

// 🔹 MAIN FUNCTION
export async function submitFeedback(data: FeedbackPayload) {
  try {
    await addDoc(collection(db, "review"), {
      reaction: data.reaction,
      improvements:
        data.reaction === "dislike" ? data.improvements || [] : [],
      comment: data.comment || "",
      createdAt: serverTimestamp(),
    });

    // // 2️⃣ If LIKE → also store in "google_review"
    // if (data.reaction === "like") {
    //   await addDoc(collection(db, "google review"), {
    //     reaction: "like",
    //     language: data.language || "en",
    //     createdAt: serverTimestamp(),
    //   });
    // }
  } catch (error) {
    console.error("Firestore write failed:", error);
    throw error; // important so frontend can catch
  }
}
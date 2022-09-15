import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";
//firebase doesn't have to fetch data => it's alreadt there...cool!!!
// all firebase requires AWAIT

// interface Post has to be exported for the post.tsx component
export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Kendrick Lamar Appreciation Moment!! 👽</h1>
      <div>
        {postsList?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

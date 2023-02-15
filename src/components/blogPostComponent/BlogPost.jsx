import styles from "./style.module.css";
import { useEffect, useState } from "react";

async function fetchURL(callback) {
  const response = await fetch(" https://dummyjson.com/posts");
  const fetchData = await response.json();
  callback(fetchData.posts);
}

function BlogPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchURL(setData);
  }, []);

  return (
    <ul className={styles.ListItem}>
      {data &&
        data.map((blog, id) => {
          return (
            <div key={id} className={styles.blogBody}>
              <h3>{blog.title}</h3>
              <li>{blog.body}</li>
              <p>{blog.tags.join(" ")}</p>
            </div>
          );
        })}
    </ul>
  );
}

export default BlogPost;

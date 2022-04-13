import Link from "next/link";
import styles from "../styles/Post.module.scss";
import { useState, useEffect, useRef, createRef } from "react";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.animated}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    ref.forEach((element) => {
      observer.observe(element.current);
    });
  }, [ref]);
  return isIntersecting;
}

const Post = (posts) => {
  const refs = useRef([]);
  const refsArray = (refs.current = posts.post.map(
    (element, i) => refs.current[i] ?? createRef()
  ));
  const onScreen = useOnScreen(refsArray);

  return (
    <>
      {posts.post.map((post, i) => (
        <article
          key={i}
          ref={refs.current[i]}
          className={`${styles.card} ${onScreen ? styles.animated : ""}`}
        >
          <Link href={`/blog/${post.id}`}>
            <a>
              <div className={styles.cardWrapper}>
                <div className={styles.cardAbout}>
                  <h2 className={styles.title}>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
                <div className={styles.cardStatus}>
                  <p className={styles.topic}>{post.topic}</p>
                  <p className={styles.postDate}>{post.date}</p>
                </div>
              </div>
            </a>
          </Link>
        </article>
      ))}
    </>
  );
};

export default Post;

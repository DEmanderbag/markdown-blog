import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "../../styles/Content.module.scss";

const postsDirectory = path.join(process.cwd(), "./posts");
const { defaultLocale } = require("../../i18n.json");

const BlogPage = ({ frontmatter: { title, excerpt }, content }) => {
  let { t } = useTranslation("common");

  return (
    <main className={styles.wrapper}>
      <Link href="/">
        <a className={styles.btnBack}>{t("goBack")}</a>
      </Link>
      <section className={styles.innerWrapper}>
        <div className={styles.intro}>
          <h1>{title}</h1>
          <p className={styles.postDate}>{excerpt}</p>
        </div>
        <div className={styles.postBody}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticPaths({ locales }) {
  let paths = [];
  const postIds = fs.readdirSync(postsDirectory);

  for (let slug of postIds) {
    for (let locale of locales) {
      let fullPath = path.join(
        postsDirectory,
        slug,
        locale === defaultLocale ? "index.md" : `index.${locale}.md`
      );
      if (!fs.existsSync(fullPath)) {
        continue;
      }
      paths.push({ params: { slug }, locale });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug }, locale }) {
  const fullPath = path.join(
    postsDirectory,
    slug,
    locale === defaultLocale ? "index.md" : `index.${locale}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data: frontmatter, content } = matter(fileContents);
  return {
    props: { frontmatter, slug, content },
  };
}

export default BlogPage;

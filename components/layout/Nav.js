import styles from "../../styles/layout/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  let router = useRouter();
  return (
    <header className={styles.navigation}>
      <nav className={styles.navigationFlex}>
        <p className={styles.navigationLogo}>Minimal blog</p>
        <ul className={styles.languages}>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

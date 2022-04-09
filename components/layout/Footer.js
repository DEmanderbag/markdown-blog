import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/layout/Footer.module.scss";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  let router = useRouter();
  let { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>
          {t("createdBY")}{" "}
          <a href="https://github.com/DEmanderbag"> DEmanderbag (Github)</a>
        </p>
        <ul className={styles.languages}>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

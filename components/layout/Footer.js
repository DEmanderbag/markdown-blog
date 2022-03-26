import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  let router = useRouter();
  return (
    <footer>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

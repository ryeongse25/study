import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* CSS Module 사용하기 */}
      {/* <Link className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`} href="/">Home</Link> */}

      <img src="/vercel.svg" />
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link legacyBehavior href="/form">
        <a className={router.pathname === "/form" ? "active" : ""}>Form</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          // props 사용할거면 달러 괄호안에 집어넣기
          color: yellow;
        }
      `}</style>
    </nav>
  );
}

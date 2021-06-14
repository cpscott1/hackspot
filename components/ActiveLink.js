import { withRouter } from "next/router";
import styles from "./link.module.scss";

const ActiveLink = ({ router, href, children }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div>
      <a
        className={styles.linkHover}
        href={href}
        onClick={handleClick}
        style={{ color: isCurrentPath ? "#5e9af2" : "black" }}
      >
        {children}
      </a>
    </div>
  );
};

export default withRouter(ActiveLink);

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
export function SignInButton() {
  const isUserLoggedIn = false;
  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Fernando Salvetti
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}

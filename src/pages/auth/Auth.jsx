// REACT
import { useContext } from "react"
// CSS
import styles from "./auth.module.css"
// CONTEXT
import { DataContext } from "../../context/context"

const Auth = () => {
  const { handleFocus, handleSignIn, handleEmailAndPassword } =
    useContext(DataContext)

  return (
    <div className={styles.wrapper}>
      <h2>log in</h2>
      <form onSubmit={(e) => handleSignIn(e)} className={styles.form}>
        <input
          required
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          onChange={handleEmailAndPassword}
          onFocus={(e) => handleFocus(e)}
        />
        <input
          required
          className={styles.input}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleEmailAndPassword}
          onFocus={(e) => handleFocus(e)}
        />
        <button className={styles.btnLogin} type="submit" name="btnLogin">
          login
        </button>
      </form>
    </div>
  )
}

export default Auth

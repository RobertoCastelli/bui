// CSS
import styles from "./errorPage.module.css"

const ErrorPage = () => {
  const path = window.location.pathname

  return (
    <div className={styles.wrapper}>
      <h2>error 404</h2>
      <p>page not found at {path}</p>
    </div>
  )
}

export default ErrorPage

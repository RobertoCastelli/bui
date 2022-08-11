// REACT
import { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// CSS
import styles from "./navbar.module.css"
// ICONS
import { FcHome, FcKey, FcBarChart, FcDataSheet } from "react-icons/fc"
// CONTEXT
import { DataContext } from "../../context/context"

// IMAGES
import icona from "./poli-icona.png"

export const Navbar = () => {
  const { handleSignOut } = useContext(DataContext)
  return (
    <nav className={styles.wrapper}>
      <Link to="/">
        <div className={styles.icona}>
          <img src={icona} alt="poli-icona" />
        </div>
      </Link>

      <div className={styles.links}>
        <ul>
          {/* HOME */}
          <Link to="/">
            <li className={styles.li}>
              <div>
                <FcHome size={20} />
              </div>
              <div>home</div>
            </li>
          </Link>

          {/* AUTH */}
          <div className={styles.dropdown__container}>
            <li className={styles.li}>
              <div>
                <FcKey size={20} />
              </div>
              <div>auth</div>
              <div className={styles.dropdown__content}>
                <ul>
                  <Link to="/auth">
                    {/* LOG IN */}
                    <li className={styles.login}>log in</li>
                  </Link>
                  {/* LOG OUT */}
                  <li className={styles.logout} onClick={handleSignOut}>
                    log out
                  </li>
                </ul>
              </div>
            </li>
          </div>

          {/* TABLE */}
          <Link to="/table">
            <li className={styles.li}>
              <div>
                <FcDataSheet size={20} />
              </div>
              <div>table</div>
            </li>
          </Link>

          {/* DASHBOARD */}
          <Link to="/dashboard">
            <li className={styles.li}>
              <div>
                <FcBarChart size={20} />
              </div>
              <div>board</div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

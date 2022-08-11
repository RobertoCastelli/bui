// REACT
import { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context/context"
// CSS
import styles from "./title.module.css"
// ICONS
import { FcBusinessman } from "react-icons/fc"

export const Title = () => {
  const { year, time, userName, handleSignOut } = useContext(DataContext)

  return (
    <div className={styles.wrapper}>
      <h1>budget autorizzato</h1>
      <h4>
        interventi <span>{year}</span>
      </h4>
      <div className={styles.user__content}>
        <div onClick={handleSignOut} className={styles.user}>
          <div>
            <FcBusinessman size={20} />
          </div>
          <div>{userName}</div>
        </div>
        <div>{time}</div>
      </div>
      <div className={styles.line} />
    </div>
  )
}

// CSS
import styles from "./footer.module.css"
// ICONS
import { SiReact, SiTypescript, SiNetlify, SiFirebase } from "react-icons/si"

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>copyright &copy; 2022 - Roberto Castelli</div>
      <p>
        <SiReact />
        &nbsp; &nbsp;
        <SiTypescript />
        &nbsp; &nbsp;
        <SiNetlify />
        &nbsp; &nbsp;
        <SiFirebase />
      </p>
    </div>
  )
}

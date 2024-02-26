
import clsx from "clsx"
import styles from "./nav-link.module.css"

export default function NavLink(props) {
  const {
    showText = true,
showIcon = true,
icon: Icon,
text = "Menu Item"
  } = props


  return (
    <div className={styles.root}>
      {showIcon ? <Icon  /> : null}
{showText ? (<span className={styles.menuItem}>
  {text}
</span>
) : null}
    </div>
  )
}

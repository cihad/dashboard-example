
import clsx from "clsx"
import styles from "./card.module.css"

export default function Card(props) {
  const {
    value = "$1,106.36",
title = "Collected",
icon: Icon
  } = props


  return (
    <div className={styles.root}>
      <div className={styles.frame1}>
  <Icon  />
<span className={styles.collected}>
  {title}
</span>

</div>

<div className={styles.frame2}>
  <span className={styles.$1,106.36}>
  {value}
</span>

</div>

    </div>
  )
}

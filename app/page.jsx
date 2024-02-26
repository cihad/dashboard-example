
import Logo, {} from "@/app/ui/components/logo";
import Link, {} from "next/link";
import styles, {} from "./page.module.css"



export default async function Page({ params, searchParams }) {

  return (
    <div className={styles.root}>
      
      <div className={styles.frame11}>
  <Logo  />
</div>

<div className={styles.frame12}>
  <div className={styles.frame13}>
  <span className={styles.welcomeTo}>
  Welcome  to Fatma. This is the example for the Next.js Learn Course, brought to you by Vercel.
</span>

<Link href={"/dashboard"} className={styles.frame16}>
  <span className={styles.logIn}>
  Log in
</span>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.99996V8.99996H12L6.5 14.5L7.92 15.92L15.84 7.99996L7.92 0.0799561L6.5 1.49996L12 6.99996H0Z" fill="white"/>
</svg>

</Link>

</div>

<div className={styles.frame14}>
  <div className={styles.heroDesktop1}>
  
</div>

</div>

</div>

      
    </div>
  )
}

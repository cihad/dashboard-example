
import Logo, {} from "@/app/ui/components/logo";
import NavLink, {} from "@/app/ui/components/nav-link";
import styles, {} from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
  <div className={styles.frame10}>
  <Logo  />
</div>

<div className={styles.frame17}>
  <NavLink icon={<Home />} text={"Home"} />
<NavLink icon={<Documents />} text={"Invoices"} />
<NavLink icon={<SupervisedUserCircle />} text={"Customers"} />
<NavLink icon={<Logout />} text={"Sign out"} />
</div>

</div>

{children}
    </div>
  )
}
    
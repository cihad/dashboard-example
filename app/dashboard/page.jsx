
import Card, {} from "@/app/ui/components/card";
import styles, {} from "./page.module.css"



export default async function Page({ params, searchParams }) {

  return (
    <div className={styles.root}>
      
      <span className={styles.dashboard}>
  Dashboard
</span>

<div className={styles.frame19}>
  <Card value={await invoicesCount()} icon={<Home />} />
<Card value={await getTotalPaidInvoices()} value={"$1,339.11"} title={"Pending"} icon={<ClockOutline />} />
<Card value={await getInvoicesCount()} value={"15"} title={"Total Invoices"} icon={<InboxOutline />} />
<Card value={await getCustomerCount()} value={"8"} title={"Total Customers"} icon={<SupervisedUserCircle />} />
</div>

<div className={styles.frame20}>
  
</div>

      
    </div>
  )
}

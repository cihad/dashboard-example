

import * as fonts from "@/app/ui/fonts.js"
import "@/app/ui/global.css"

export default async function RootLayout({ children }) {

  return (
    <html lang="en" className={`${fonts.robotoMono.variable}`}>
      <body className={"default-theme"}>
        {children}
      </body>
    </html>
  )
}
    

import './styles/styles.scss';
import Navbar from "@/app/components/Navbar";


export const metadata = {
  title: 'Anime Api',
  description: 'Utilizes Anime API to render stuff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      <Navbar />
      {children}</body>
    </html>
  )
}

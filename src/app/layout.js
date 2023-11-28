
import './styles/styles.scss';


export const metadata = {
  title: 'Anime Api',
  description: 'Utilizes Anime API to render stuff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}

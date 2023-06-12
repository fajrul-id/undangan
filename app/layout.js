import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
              <meta charset={"UTF-8"}/>
              <title>The Wedding Of Tara & Fajrul</title>
              <meta name="description" content="Wedding Invitation"/>
              <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
              <meta property="og:locale" content="en_US" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content="Tara &amp; Fajrul" />
              <meta property="og:description" content="Wedding Invitation" />
              <meta property="og:url" content="tara.fajrul.id" />
              <meta property="og:site_name" content="Wedding Invitation Tara & Fajrul" />
              <meta property="og:image" content="https://i.ibb.co/MCmNrwQ/IMG-20211104-104058.png" />
              <meta property="og:image:secure_url" content="https://i.ibb.co/MCmNrwQ/IMG-20211104-104058.png" />
              <meta property="og:image:width" content="1296" />
              <meta property="og:image:height" content="864" />
              <meta property="og:image:alt" content="Tara &#038; Fajrul" />
              <meta property="og:image:type" content="image/jpeg" />
              <meta property="ya:ovs:upload_date" content="2023-08-13" />
              <meta property="ya:ovs:allow_embed" content="true" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Tara &amp; Fajrul" />
              <meta name="twitter:description" content="Wedding Invitation" />
              <meta name="twitter:image" content="https://i.ibb.co/MCmNrwQ/IMG-20211104-104058.png" />
              <link rel="icon" href="/favicon.ico"/>
          </head>
      <body>{children}</body>
    </html>
  )
}

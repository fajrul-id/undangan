import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset={"UTF-8"} />
        <title>The Wedding Of Tara & Fajrul</title>
        <meta
          name="description"
          content="17 September 2023 Unduh Mantu Invitation"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tara &amp; Fajrul" />
        <meta property="og:description" content="Unduh Mantu Invitation" />
        <meta property="og:url" content="tara.fajrul.id" />
        <meta
          property="og:site_name"
          content="Unduh Mantu Invitation Tara & Fajrul"
        />
        <meta property="og:image" content="/wed1.jpg" />
        <meta property="og:image:secure_url" content="/wed1.jpg" />
        <meta property="og:image:width" content="1296" />
        <meta property="og:image:height" content="864" />
        <meta property="og:image:alt" content="Tara &#038; Fajrul" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="ya:ovs:upload_date" content="2023-09-17" />
        <meta property="ya:ovs:allow_embed" content="true" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tara &amp; Fajrul" />
        <meta name="twitter:description" content="Unduh Mantu Invitation" />
        <meta name="twitter:image" content="/wed1.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

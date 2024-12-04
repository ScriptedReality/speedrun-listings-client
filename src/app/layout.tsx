export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <title>Swiftplay</title>
        <meta name="description" content="Swiftplay Speedruns" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

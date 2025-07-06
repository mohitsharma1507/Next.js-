import "./globals.css";

export const metadata = {
  title: "My App",
  description: "App using Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

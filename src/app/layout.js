import "./globals.css";

export const metadata = {
  title: "Laqwanda Nettles",
  description: "My Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

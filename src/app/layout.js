import '../styles/globals.css';
import '../styles/layout.module.css';

export const metadata = {
  title: 'Loyani Tours & Safaris',
  description: 'Discover the Wonders of Loyani with unforgettable safari experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-textColor">
        {children}
      </body>
    </html>
  );
}

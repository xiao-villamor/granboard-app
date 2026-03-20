import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientLayout } from "./components/ClientLayout";
import { LocaleProvider } from "./components/LocaleProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Granboard App",
  description: "Dartboard app for Granboard - Cricket, 01 and more",
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: "Granboard App",
    description: "Dartboard app for Granboard - Cricket, 01 and more",
    images: ['/opengraph-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('granboard_theme') || 'system';
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var effectiveTheme = theme === 'system' ? systemTheme : theme;
                  if (effectiveTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  // Update html lang from cookie
                  var m = document.cookie.match(/(?:^|;\\s*)NEXT_LOCALE=([^;]*)/);
                  if (m && m[1]) document.documentElement.lang = m[1];
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LocaleProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}

import { QueryProvider } from "@/lib/providers";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="grass">
          <QueryProvider>{children}</QueryProvider>
        </Theme>
      </body>
    </html>
  );
}

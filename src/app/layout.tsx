import { QueryProvider } from "@/lib/providers";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="grass">
          <QueryProvider>
            <Toaster position="top-right" />
            {children}
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}

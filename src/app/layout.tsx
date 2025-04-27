import { QueryProvider } from "@/lib/providers";
import "./globals.css";
import { Flex, Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import { getAuthCookies } from "@/actions";
import { Navbar } from "@/components";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await getAuthCookies();

  return (
    <html lang="en">
      <body>
        <Theme accentColor="grass">
          <QueryProvider>
            <Toaster position="top-right" />
            <Flex direction="column" className="h-screen">
              {auth ? <Navbar /> : null}
              {children}
            </Flex>
          </QueryProvider>
        </Theme>
      </body>
    </html>
  );
}

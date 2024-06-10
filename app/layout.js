import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/theme-provider";
import AuthProvider from "./components/UserContext.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TalentSync",
  description:
    "TalentSync: Streamlining recruitment with intelligent matching, seamless tracking, and enhanced collaboration tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider defaultTheme="dark">
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}

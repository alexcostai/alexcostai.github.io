//project imports
import "@/../public/styles/pattern.css";
import ClientOnly from "@/components/ClientOnly";
import ThemeRegistry from "@/components/theme/ThemeRegistry";

export const metadata = {
  title: "Alex Costa - Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientOnly>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ClientOnly>
      </body>
    </html>
  );
}

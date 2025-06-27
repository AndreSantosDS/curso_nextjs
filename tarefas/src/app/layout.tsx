import "../../styles/globals.css";
import { Header } from "../components/header/index";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SessionWrapper } from "../components/SessionWrapper/SessionWrapper";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionWrapper session={session}>
          <Header />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}

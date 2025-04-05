import { prismaClient } from "db/client";
import "./globals.css";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

export const dynamic = 'force-dynamic';
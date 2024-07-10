import Image from "next/image";
import UserInterface from '../components/UserInterface'
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <UserInterface backendName="flask" />
    </div>
  );
}

import Link from "next/link";
import MaintenanceIMG from "@/assets/maintenance.png";
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#242424]">
      <div className="relative">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          503 - Maintenance
        </h1>
        <div className="flex py-5 justify-center">
          <Image src={MaintenanceIMG} alt="Page not found" width={300} />
        </div>
        <div className="py-5">
          {/* <Link href="/" className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
            Home
          </Link> */}
        </div>
      </div>
    </div>
  );
}

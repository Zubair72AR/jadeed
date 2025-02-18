import Image from "next/image";
import { GoCheckCircleFill } from "react-icons/go";
export default function EmailVerified() {
  return (
    <div className="flex justify-between items-center h-screen">
      {/* Left Side Image Portion */}
      <div className="w-1/2 h-full hidden md:flex justify-center flex-col items-center bg-black text-white">
        <Image
          src="/vector.png"
          alt="Email Image"
          width={500}
          height={500}
          className="w-2/4"
        />
        <p className="w-2/3 opacity-[0.7] text-center mt-3 text-[13px]">
          <b></b>JADDED<b></b> is an intuitive platform designed to help
          businesses manage their important documents, certifications, and
          licenses.
        </p>
      </div>

      {/* Right Side Verification Section */}
      <div className="w-full md:w-1/2 h-full flex justify-center flex-col items-center p-4 bg-[#EBDFD7]">
        <div className="w-full lg:w-[60%] space-y-4">
          <GoCheckCircleFill className="text-6xl text-[#22c55e]" />
          <h1 className="font-bold text-2xl text-start mt-4 text-black">
            Email Verification
          </h1>

          <p className="text-black text-[13px] opacity-[0.6]">
            Your email was verified you continue using the application
          </p>

          <p className="text-black text-[13px]">Thank you for joining us!</p>
        </div>
      </div>
    </div>
  );
}

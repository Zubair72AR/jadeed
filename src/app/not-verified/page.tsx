import Image from "next/image";
import Link from "next/link";
import { MdOutlineMailLock } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function NotVerified() {
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

      {/* Right Side Content Portion */}
      <div className="w-full md:w-1/2 h-full flex justify-center flex-col items-center p-4 bg-[#EBDFD7]">
        <div className="w-full lg:w-[60%] space-y-4">
          <MdOutlineMailLock className="text-6xl text-red-600" />
          <h1 className="font-bold text-2xl text-start mt-4 text-black">
            Your Email has not been verified.
          </h1>

          <div className="flex justify-start gap-1">
            <p className="text-black text-[13px] opacity-[0.6]">
              Send an email to
            </p>

            <p className="text-black font-semibold text-[13px]">
              user123@example.com
            </p>
          </div>
          <Link href="/email-verified">
            <button className="w-full bg-[#e65f2b] text-white py-2 rounded-lg">
              Send Verification Email
            </button>
          </Link>
          <div className="flex justify-between items-center text-black text-[13px]">
            <Link href="/" className="flex justify-start items-center gap-1">
              Skip for now <IoIosArrowForward />
            </Link>
            <p className="text-black text-[13px]">
              Need help?{" "}
              <Link className="font-bold" href="/contact">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

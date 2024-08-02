import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

// import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-3 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          width={100}
          height={100}
          alt="linkstop logo"
          className="max-sm:size-10"
        />
        {/* <p className="text-[22px] text-blue-1 font-extrabold max-sm:hidden">
          LinkStop
        </p> */}
      </Link>
      <div className="flex-between gap-5">
        {/* <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn> */}

        {/* <MobileNav /> */}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <nav className="p-4 bg-white shadow-md">Loading...</nav>;
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Quotes 
      </Link>

      {/* Authentication Section */}
      <div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Sign Up
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

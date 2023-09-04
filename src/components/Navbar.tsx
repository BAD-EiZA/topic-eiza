import { getAuthSession } from "@/lib/nextauth";
import React from "react";
import Logo from "./Logo";
import SignInButton from "./SignInButton";
import UserNav from "./UserNav";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-slate-800 z-[10] h-fit  py-4">
      <div className="flex items-center justify-between h-full px-10 gap-2 w-full">
        <Logo />
        {session?.user ? (
          <UserNav user={session.user}/>
        ) : (
          <SignInButton text="Sign In" />
        )}
      </div>
    </div>
  );
};

export default Navbar;

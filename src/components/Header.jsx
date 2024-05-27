import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

async function Header() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  console.log(user);

  return (
    <div className="flex py-5 px-8 border-b border-gray-800  mx-auto  justify-between max-w-7xl">
      <Link href={"/"}>
        <div className="text-2xl font-bold bg-gradient-to-br from-gray-100 to-gray-500 text-transparent bg-clip-text">
          Tweet
          <span className="bg-gradient-to-br from-green-500 to-green-800 h-fit ml-1  text-transparent bg-clip-text">
            Craft
          </span>
        </div>
      </Link>
      {user ? (
        <LogoutLink>
          <Image
            src={user.picture || user.given_name[0] + user.family_name[0]}
            width={30}
            height={30}
            className="rounded-full"
          />
        </LogoutLink>
      ) : (
        <LoginLink>
          <div className="border-green-400 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-900 transition-all ease-in duration-100   border  bg-gradient-to-br from-green-500 to-green-800 font-light  px-3 py-1 rounded-md w-fit mx-auto">
            Sign In
          </div>
        </LoginLink>
      )}
    </div>
  );
}

export default Header;

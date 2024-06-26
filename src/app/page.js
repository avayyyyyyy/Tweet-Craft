import RadialGradient from "@/components/radial-gradient";
import GenerateTweet from "@/components/generateTweet.jsx";
import { Copy } from "lucide-react";
import Image from "next/image";
import AnimatedLogoCloud from "@/components/AnimatedTweetMarqee";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  // let user = { email: "habhabs" };
  const user = await getUser();

  return (
    <main className="flex min-h-[85vh]  bg-black  flex-col items-center justify-between p-24">
      <div
        className={`h-full ${
          user?.email && "mt-0"
        } md:max-w-4xl w-[80vw] text-center items-center flex flex-col z-20 `}
      >
        <Link href={"https://peerlist.io/avayyyyyyy/project/tweetcraft"}>
          <Image
            src={"https://peerlist.io/images/Launch_Badge_Dark.svg"}
            width={150}
            height={150}
            alt="peerlist"
          />
        </Link>
        <div className="mt-10 md:text-6xl text-3xl  font-semibold">
          <span className="bg-gradient-to-br from-gray-100 to-gray-300 text-transparent bg-clip-text">
            Tweet
          </span>
          <span className=" md:text-6xl text-3xl  font-semibold bg-gradient-to-br from-green-500 to-green-800 h-fit text-transparent bg-clip-text  ml-2">
            Smarter!
          </span>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-transparent  md:text-6xl text-3xl  font-semibold  bg-clip-text py-2">
          Not Harder with
          <span className=" md:text-6xl text-3xl  font-semibold bg-gradient-to-br from-green-500 to-green-800 h-fit text-transparent bg-clip-text  ml-2">
            AI{" "}
          </span>{" "}
          Magic!
        </div>
        <p className="mt-3 md:text-base text-sm  text-gray-300">
          Effortless Tweets, Endless Creativity. Let AI Craft Your Perfect
          Message ✨
        </p>
        {user?.email ? (
          <GenerateTweet />
        ) : (
          <>
            <LoginLink className="mt-10">
              <div className="active:scale-95 border-green-400 border text-white  bg-gradient-to-br from-green-500 to-green-800 font-light  px-3 py-1 text-md rounded-md w-fit mx-auto">
                Get Started
              </div>
            </LoginLink>
            <AnimatedLogoCloud />
          </>
        )}
      </div>
      <RadialGradient className="opacity-30 z-10" />
    </main>
  );
}

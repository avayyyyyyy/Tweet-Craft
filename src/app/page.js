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
  const user = await getUser();

  return (
    <main className="flex h-[85vh] flex-col items-center justify-between p-24">
      <div
        className={`h-full ${
          user?.email && "mt-0"
        } lg:max-w-4xl w-[80vw]  text-center items-center flex flex-col z-20 `}
      >
        <Link href={"https://peerlist.io/avayyyyyyy/project/tweetcraft"}>
          <Image
            src={"https://peerlist.io/images/Launch_Badge_Dark.svg"}
            width={150}
            height={150}
            alt="peerlist"
          />
        </Link>
        <div className="mt-10 lg:text-6xl text-3xl  font-semibold">
          <span className="bg-gradient-to-br from-gray-100 to-gray-300 text-transparent bg-clip-text">
            Tweet
          </span>
          <span className=" lg:text-6xl text-3xl  font-semibold bg-gradient-to-br from-blue-500 to-blue-800 h-fit text-transparent bg-clip-text  ml-2">
            Smarter!
          </span>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-transparent  lg:text-6xl text-3xl  font-semibold  bg-clip-text py-2">
          Not Harder with
          <span className=" lg:text-6xl text-3xl  font-semibold bg-gradient-to-br from-blue-500 to-blue-800 h-fit text-transparent bg-clip-text  ml-2">
            AI{" "}
          </span>{" "}
          Magic!
        </div>
        <p className="mt-3 lg:text-base text-sm  text-gray-300">
          Effortless Tweets, Endless Creativity. Let AI Craft Your Perfect
          Message ✨
        </p>
        {user?.email ? (
          <GenerateTweet />
        ) : (
          <>
            <LoginLink>
              <div className="active:scale-95 border-blue-400 border   bg-gradient-to-br from-blue-500 to-blue-800 font-light  px-3 py-1 text-md  rounded-md w-fit mx-auto mt-10 ">
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

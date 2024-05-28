import Image from "next/image";
import React from "react";

function TweetCard({ text }) {
  return (
    <div className="my-10 px-5 md:max-w-2xl max-w-sm py-3 mx-auto  rounded-lg bg-white">
      <div className="flex items-center gap-2">
        <Image
          width={10}
          height={10}
          alt="TC"
          src={
            "https://utfs.io/f/92d7ec3d-537a-46ab-9376-c289859af10d-imag69.png"
          }
          className="bg-gray-900 h-10 w-10 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold text-start text-gray-700">
            Tweetcraft
          </div>
          <div className="text-xs text-gray-600">@tweetcraftbyshubh</div>
        </div>
      </div>
      <div className="text-gray-700 mt-3 text-sm text-start">{text}</div>
    </div>
  );
}

export default TweetCard;

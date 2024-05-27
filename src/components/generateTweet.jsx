"use client";
import { GenerateTweetFnc } from "@/actions/generateTweetFnc";
import { Copy, Loader, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const GenerateTweet = () => {
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("Casual");
  const [loading, setLoading] = useState(false);
  const [tweet, setTweet] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const output = await GenerateTweetFnc(prompt, mood);
    if (output.success) {
      toast.success("Successfully generated!");
      setTweet(output.output);
    } else {
      console.log(output.output);
      toast.error("Error while generating tweet");
    }
    setLoading(false);
  }

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweet + "#tweetCraft"
  )}`;

  return (
    <div className="w-full">
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 my-2 items-center">
          <input
            type="text"
            placeholder="Enter your topic..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="p-2 bg-transparent outline-none w-80 border-gray-700 border rounded-md"
          />
          <select
            name="mood"
            className="bg-transparent p-2 border border-gray-700 rounded-md"
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="Casual">Casual 😇</option>
            <option value="Formal">Formal 🧳</option>
            <option value="Friendly">Friendly 😁</option>
            <option value="Lovely">Lovely 🥰</option>
          </select>
        </div>
        {loading ? (
          <button
            disabled
            type="submit"
            className="bg-gradient-to-br active:scale-95 flex items-center from-green-500 to-green-800 opacity-50 font-light px-3 py-1 text-md rounded-md w-fit mx-auto mt-3"
          >
            Generate tweet <Loader size={16} className="animate-spin ml-2" />
          </button>
        ) : (
          <button
            type="submit"
            className="bg-gradient-to-br active:scale-95 from-green-500 to-green-800 font-light px-3 py-1 text-md rounded-md w-fit mx-auto mt-3"
          >
            Generate tweet
          </button>
        )}
      </form>
      {tweet && (
        <>
          <div className="my-10 px-5 py-3 mx-auto rounded-lg bg-white w-[50%]">
            <div className="flex items-center gap-2">
              <Image
                width={40}
                height={40}
                alt="TC"
                src="https://utfs.io/f/e3644742-d505-40c0-bb45-0e3ec755c394-y8elqc.png"
                className="bg-gray-900 h-10 w-10 rounded-full"
              />
              <div>
                <div className="text-sm font-semibold text-start text-gray-700">
                  Tweetcraft
                </div>
                <div className="text-xs text-gray-600">@tweetcraftbyshubh</div>
              </div>
            </div>
            <div className="text-gray-700 mt-3 text-sm text-start">{tweet}</div>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => {
                toast.success("Copied To Clipboard 🚀");
                navigator.clipboard.writeText(tweet);
              }}
              className="bg-gradient-to-br from-green-500 flex items-center active:scale-95 to-green-800 font-light px-3 py-1 text-md rounded-md w-fit mx-auto"
            >
              Copy <Copy size={16} className="ml-2" />
            </button>
            <Link
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 flex items-center active:scale-95 to-green-800 font-light px-3 py-1 text-md rounded-md w-fit mx-auto"
            >
              Tweet this <Twitter size={16} className="ml-2" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default GenerateTweet;

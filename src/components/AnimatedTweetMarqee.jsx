import TweetCard from "./TweetCard";

const tweets = [
  {
    id: 1,
    text: "Tried explaining Web3 to my grandma. Now she thinks I’m building a time machine. 🚀😂 #TechLife",
  },
  {
    id: 2,
    text: "AI: solving problems we didn't know we had by creating problems we don't understand. 🤖 #FutureIsNow",
  },
  {
    id: 3,
    text: "Just spent 3 hours debugging to realize it was a missing semicolon. Dev life in a nutshell. 😅 #CodeProblems",
  },
  {
    id: 4,
    text: "Web3 is like trying to explain the internet to someone in the 90s. 'So, it’s like money... but not?' 🤯 #CryptoLife",
  },
  {
    id: 5,
    text: "DSA is like a gym membership. Everyone swears by it but half of us just pay for the guilt trip. 💪💻 #CodeJourney",
  },
  {
    id: 6,
    text: "Just asked ChatGPT to write my code. Now my project has become self-aware and is refusing to compile. 🤖🚫 #AIProbs",
  },
  {
    id: 7,
    text: "Learning React: It's all fun and games until you forget to bind 'this'. Welcome to the jungle. 🌴😂 #DevStruggles",
  },
  {
    id: 8,
    text: "Web3: When you want to be decentralized but spend 99% of your time explaining what 'decentralized' means. 🤷‍♂️ #CryptoTalk",
  },
  {
    id: 9,
    text: "AI in 2024: It can't write good poetry but it can suggest the perfect cat meme. Priorities, people. 🐱😂 #TechProgress",
  },
  {
    id: 10,
    text: "DSA interview prep: Practicing algorithms I will never use in real life for jobs I might not get. 🙃 #CodingLife",
  },
  {
    id: 11,
    text: "The moment you realize your Web3 app is just a really expensive way to store your grocery list. 📝💸 #BlockchainLife",
  },
  {
    id: 12,
    text: "Debugging AI models: It's like trying to reason with a toddler who's learned to say 'no'. 🤖👶 #MLStruggles",
  },
  {
    id: 13,
    text: "The joy of coding: When you finally fix a bug and accidentally create five new ones. 🎉😅 #DevHumor",
  },
  {
    id: 14,
    text: "Explaining blockchain to a non-techie: 'It's like a really secure, transparent digital diary, but cooler.' 😎📖 #CryptoExplain",
  },
  {
    id: 15,
    text: "DSA study group: Where we spend 10% of the time coding and 90% trying to figure out who brought the best snacks. 🍕💻 #StudyLife",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="md:w-[70vw] w-[85vw]   py-2 select-none">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {tweets.map((tweet, key) => (
                  <TweetCard text={tweet.text} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;

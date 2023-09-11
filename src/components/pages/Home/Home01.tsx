import { STRevealText } from "@/components/elements/Text";
import { HOME_01_SENT_EN, HOME_01_SENT_JP } from "@/const";

// TODO: Implement Text Distortion Effects.

export const Home01: React.FC = () => {
  return (
    <div
      className="relative flex h-fit w-screen flex-col
                  bg-black-100 px-[min(12vw)] xl:grid xl:grid-cols-2"
    >
      <div>
        <div
          className="font-march-evoked text-[min(2vw,20px)]
                        tracking-widest text-yellow-100"
        >
          01.
        </div>
        <STRevealText
          text="The End, So Far"
          className="font-march-evoked text-[min(6vw,52px)] tracking-widest"
        />
      </div>
      <STRevealText
        text={HOME_01_SENT_JP}
        className="whitespace-pre-line pt-6 font-sans
        text-[min(3vw,18px)] tracking-widest text-yellow-100 xl:pt-10"
      />
    </div>
  );
};

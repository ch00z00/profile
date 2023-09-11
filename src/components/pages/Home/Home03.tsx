import { STRevealText } from "@/components/elements/Text";
import { HOME_03_SENT_EN, HOME_03_SENT_JP } from "@/const";

// TODO: Implement Text Distortion Effects.

export const Home03: React.FC = () => {
  return (
    <div
      className="relative flex h-fit w-screen flex-col
              bg-black-100 px-[min(12vw)]"
    >
      <div>
        <div
          className="font-march-evoked text-[min(2vw,20px)]
                    tracking-widest text-yellow-100"
        >
          03.
        </div>
        <STRevealText
          text="Interests"
          className="font-march-evoked text-[min(6vw,52px)] tracking-widest"
        />
      </div>
      <STRevealText
        className="gap-12 space-y-6 pt-8 font-sans text-[min(3vw,18px)]
                  tracking-widest text-white-200 xl:grid xl:grid-cols-2 xl:space-y-0 xl:pt-12"
      >
        {HOME_03_SENT_JP.map((item) => (
          <>
            <div key={item.title} className=" ">
              <div className="text-[min(4vw,24px)]">{item.title}</div>
              <div className="whitespace-pre-line text-yellow-100">
                {item.sent}
              </div>
            </div>
          </>
        ))}
      </STRevealText>
    </div>
  );
};

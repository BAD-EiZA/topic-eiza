import React from "react";
import keyword_extractor from "keyword-extractor";

type Props = {
  answer: string;
  
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const Blanks = "_____";

const BlankAnswerInput = ({ answer, setBlankAnswer }: Props) => {
  const keywords = React.useMemo(() => {
    const words = keyword_extractor.extract(answer, {
      language: "english",
      remove_digits: true,
      return_changed_case: false,
      remove_duplicates: false,
    });
    const shuffled = words.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, [answer]);

  const answerWithBlanks = React.useMemo(() => {
    const answerblank = keywords.reduce((acc, keyword) => {
      return acc.replace(keyword, Blanks);
    }, answer);
    setBlankAnswer(answerblank)
    return answerblank;
  }, [keywords, answer, setBlankAnswer]);
  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {answerWithBlanks.split(Blanks).map((part, index) => {
          return (
            <React.Fragment key={index}>
              {part}
              {index === answerWithBlanks.split(Blanks).length - 1 ? (
                ""
              ) : (
                <input
                  id="user-blank-input"
                  className="text-center border-b-2 border-black dark:border-white w-28 focus:border-2 focus:border-b-4 focus:outline-none"
                  type="text"
                />
              )}
            </React.Fragment>
          );
        })}
      </h1>
    </div>
  );
};

export default BlankAnswerInput;

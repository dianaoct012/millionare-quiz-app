import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the most beautiful girl?",
      answers: [
        {
          text: "Raisha",
          correct: false,
        },
        {
          text: "Fiony",
          correct: true,
        },
        {
          text: "Callie",
          correct: false,
        },
        {
          text: "Cecilia",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the cutest girl?",
      answers: [
        {
          text: "Freya",
          correct: true,
        },
        {
          text: "Lala",
          correct: false,
        },
        {
          text: "Zara",
          correct: false,
        },
        {
          text: "Gre",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the main character in The Untamed?",
      answers: [
        {
          text: "Hill Liu",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Sean Xiao",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who played the main character in Guardian?",
      answers: [
        {
          text: "Hill Liu",
          correct: false,
        },
        {
          text: "Johnny Bai",
          correct: true,
        },
        {
          text: "Zhou Lusi",
          correct: false,
        },
        {
          text: "Sean Xiao",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who played the main character in World of Honor?",
      answers: [
        {
          text: "Hill Liu",
          correct: false,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Zhou Lusi",
          correct: false,
        },
        {
          text: "Simon Gong",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who's the author of The Founder of Diabolism?",
      answers: [
        {
          text: "Meng Xi Shi",
          correct: false,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Meatbun",
          correct: false,
        },
        {
          text: "MXTX",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Who's the author of The Dumb Husky and His White Cat Shizun?",
      answers: [
        {
          text: "Meng Xi Shi",
          correct: false,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Meatbun",
          correct: true,
        },
        {
          text: "MXTX",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who's the author of Remnants of Filth?",
      answers: [
        {
          text: "Priest",
          correct: false,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Meatbun",
          correct: true,
        },
        {
          text: "MXTX",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who's the author of Heaven Official's Blessing?",
      answers: [
        {
          text: "Priest",
          correct: false,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Meatbun",
          correct: false,
        },
        {
          text: "MXTX",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who's the author of Faraway Wanderers?",
      answers: [
        {
          text: "Priest",
          correct: true,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Meatbun",
          correct: false,
        },
        {
          text: "MXTX",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who's the author of Legend of Fei?",
      answers: [
        {
          text: "Priest",
          correct: true,
        },
        {
          text: "Johnny Bai",
          correct: false,
        },
        {
          text: "Meatbun",
          correct: false,
        },
        {
          text: "MXTX",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who's the male lead in Legend of Fei series?",
      answers: [
        {
          text: "Wang Yibo",
          correct: true,
        },
        {
          text: "Zhou Lusi",
          correct: false,
        },
        {
          text: "Marius Wang",
          correct: false,
        },
        {
          text: "MXTX",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is Wei Wuxian's favorite food?",
      answers: [
        {
          text: "Pork Rib Soup",
          correct: false,
        },
        {
          text: "Roast Rabbit",
          correct: false,
        },
        {
          text: "Lotus Soup",
          correct: true,
        },
        {
          text: "Roast Chicken",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who is Qi Rong?",
      answers: [
        {
          text: "Scum Ghost",
          correct: false,
        },
        {
          text: "Ghost Mayor's Subordinates",
          correct: false,
        },
        {
          text: "Xie Lian's Cousin",
          correct: true,
        },
        {
          text: "Roast Chicken",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "In which province is Yunmeng County??",
      answers: [
        {
          text: "Hubei",
          correct: true,
        },
        {
          text: "Sichuan",
          correct: false,
        },
        {
          text: "Congqing",
          correct: true,
        },
        {
          text: "Beijing",
          correct: false,
        },
      ],
    }
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
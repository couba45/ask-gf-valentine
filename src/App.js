import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure",
  "Pookie please 😭",
  "Don't do this to me",
  "I'm gonna cry...",
  "You are breaking my heart 😔",
  "Really, you don't wanna be my valentines",
  "But why?? you are my special person",
  "I love you so muchhh please say yes",
  "okay, i don't want anything",
  "I was lying i want you please",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    if (noCount > phrases.length) {
      setNoCount(0);
    }
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="App flex-col items-center justify-center h-screen">
      {yesPressed ? (
        <>
          <div className="w-screen flex items-center justify-center">
            <img
              src="https://i.pinimg.com/originals/d7/2f/c9/d72fc961a47eec1396864393ff33a566.gif"
              alt="bear kissing"
            />
          </div>
          <div>
            Yay!!!!! I love so much Lesly, you are the best girl I could wish. I
            will always love you with all my heart ❤️
          </div>
        </>
      ) : (
        <>
          <div className="w-screen flex items-center justify-center">
            <img
              src="https://i.pinimg.com/originals/a3/31/e9/a331e9e43c4e1fb6a8acda8c72aad43e.gif"
              alt="bears hugging"
            />
          </div>
          <div className="font-bold">Will you be my valentine Lesly?</div>
          <div className="my-3">
            <button
              className="yesButton bg-emerald-500 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="noButton my-4 mx-4 bg-red-500 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

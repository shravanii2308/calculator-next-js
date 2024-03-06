// As the next.js is by default server side rendering
// here i converted it into client one
"use client";

// I have used useStates in the code
import { useState } from "react";

export default function Home() {
  // here are the states

  // result is the end calculations which are going to be performed
  const [result, setResult] = useState("");

  // expression which arre mathematical experssion
  // which want to be calculated
  const [expression, setExpression] = useState("");

  // This is a fat arrow function which is for
  // the buttons if we click on
  const handleButtonClick = (value) => {
    // here the first expression if we click on the '='
    // we will get results and the expression must be calculated
    if (value === "=") {
      // using tye catch block
      try {
        // have made this variable to store the current expression
        const evalResult = eval(expression).toString();

        // this expression is letter solved and shown in results
        // using user states
        setResult(evalResult);

        // after the calculation if you want to
        // calculate any further here we are setting the
        // expressinon to the current expressions result
        // using use state
        setExpression(evalResult);
      } catch (error) {
        setResult("Error");
      }
    }

    // same for 'C' clear button
    // it sets the result n expression to null
    else if (value === "C") {
      setResult("");
      setExpression("");
    }

    // for all the rest numericals or mathematical expressions
    else {
      // here we are updating are previous expression with the
      // new values which are inputed by client or user
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  // here all the buttons are stored in array namley buttons
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    // used tailwan css
    // new in this
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* h1 header for name tag */}
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* expression input */}
        <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
          value={expression}
          readOnly
        />
        {/* result output */}
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus:outline-none"
          value={result}
          readOnly
        />
        {/* four column grid for the buttons */}
        <div className="grid grid-cols-4 gap-2">
          {/* maping the array */}
          {buttons.map((btn) => (
            <button
              key={btn}
              // the fat arrow function gets called each time button gets clicked
              onClick={() => handleButtonClick(btn)}
              className="text-xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

// things I learnt
// 1.eval
// user client

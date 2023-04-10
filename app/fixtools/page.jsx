"use client";

import { useRef } from "react";

export default function FixTools() {
  const sourceRef = useRef();
  const outputRef = useRef();

  const concatValues = () => {
    const sourceValue = sourceRef.current.value;
    if (!sourceValue) {
      sourceRef.current.focus();
      return;
    }
    //alert(sourceValue);

    const source = sourceRef.current.value;
    const sourceSplit = source.split("\n");
    const outputArray = [];
    sourceSplit.forEach((element) => {
      if (element.trim() !== "") outputArray.push(element.trim());
      else return;
    });
    console.log(outputArray);
    outputRef.current.value = outputArray;
  };

  const resetSource = () => {
    sourceRef.current.value = "";
    sourceRef.current.focus();
  };

  const resetOutput = () => {
    outputRef.current.value = "";
    sourceRef.current.focus();
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-6">
      <h1 className="text-4xl font-bold">Fix Tools</h1>
      <section className="flex flex-col gap-4 my-4 container">
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="source">Source</label>
          <textarea
            ref={sourceRef}
            id="source"
            className="min-h-[200px] p-4 resize-none rounded"
            autoFocus
          ></textarea>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded duration-300"
            onClick={concatValues}
            text="Concatenate values"
          >
            Concatenate
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded duration-300"
            onClick={resetSource}
          >
            Reset source
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded duration-300"
            onClick={resetOutput}
          >
            Reset source
          </button>
        </div>
        <div className="flex flex-col gap-2 my-4 container">
          <label htmlFor="output">Output</label>
          <textarea
            ref={outputRef}
            id="output"
            className="min-h-[200px] p-4 resize-none rounded"
          ></textarea>
        </div>
      </section>
    </main>
  );
}

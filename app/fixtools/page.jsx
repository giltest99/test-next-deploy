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
    const source = sourceRef.current.value;
    const sourceSplit = source.split("\n");
    const outputArray = [];
    sourceSplit.forEach((element) => {
      if (element.trim() !== "") outputArray.push(element.trim());
      else return;
    });
    outputRef.current.value = outputArray;
  };

  const somme = () => {
    const source = sourceRef.current.value;
    if (!source) {
      sourceRef.current.focus();
      return;
    }
    const sourceSplit = source.split("\n");
    const tab1 = [];
    sourceSplit.map((el) => tab1.push(el.split("\t")));
    const tab2 = tab1.flat(2);
    const tab3 = tab2.map((el) => Number(el));
    const tab4 = tab3
      .filter((el) => !Number.isNaN(el))
      .filter((el) => el !== 0);
    const somme = tab4.reduce((sum, el) => sum + el, 0);
    const moyenne = Number((somme / tab4.length).toFixed(2)) || 0;
    outputRef.current.value = `Somme = ${somme}\nMoyenne = ${moyenne}`;
    sourceRef.current.focus();
  };

  const resetAll = () => {
    sourceRef.current.value = "";
    outputRef.current.value = "";
    sourceRef.current.focus();
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-6">
      <h1 className="text-4xl font-bold">Fix Tools</h1>
      <section className="flex flex-col gap-4 my-4 container">
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="source" className="text-xl font-bold">
            Source
          </label>
          <textarea
            ref={sourceRef}
            id="source"
            className="min-h-[200px] p-4 resize-none rounded"
            autoFocus
          ></textarea>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded duration-300"
            onClick={concatValues}
            text="Concatenate values"
          >
            Concatenate
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-1 rounded duration-300"
            onClick={somme}
            text="Concatenate values"
          >
            Somme
          </button>
        </div>
        <div className="flex flex-col gap-2 my-4 container">
          <label htmlFor="output" className="text-xl font-bold">
            Output
          </label>
          <textarea
            ref={outputRef}
            id="output"
            className="min-h-[200px] p-4 resize-none rounded"
          ></textarea>
        </div>
        <div className="flex flex-wrap flex-row-reverse gap-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1 rounded duration-300"
            onClick={resetAll}
          >
            Reset all
          </button>
        </div>
      </section>
    </main>
  );
}

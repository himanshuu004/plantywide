"use client";

import React, { useState, ChangeEvent } from "react";
import { Typography, Button } from "@material-ui/core";
import Chart from "react-google-charts";

const Simulator: React.FC = () => {
  const [frame, setFrame] = useState<number>(0);
  const [seq, setSeq] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [seqArr, setSeqArr] = useState<number[]>([]);

  const frameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFrame(parseInt(e.target.value));
  };

  const seqHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;
    setSeq(rawInput);
    const cleaned = rawInput.trim().replace(/ +/g, " ");
    const arr = cleaned.split(" ").filter(item => item !== "").map(Number);
    setSeqArr(arr);
  };

  const validateInput = (): string | null => {
    if (frame < 0) return "Frames cannot be negative";
    if (frame === 0 || seq.length === 0) return "Please fill all the fields";
    if (seqArr.some(num => isNaN(num) || num < 0)) return "Only non-negative integers allowed in Page Sequence";
    return null;
  };

  const handleClick = (type: string) => {
    const err = validateInput();
    if (err) return setError(err);
    setError(null);
    setResult(type);
  };

  const handleReset = () => {
    setFrame(0);
    setSeq("");
    setSeqArr([]);
    setResult("");
    setError(null);
  };

  const fifoResultGiver = (frames: number, pages: number[]) => {
    let pageFaults = 0;
    const temp = new Array(frames).fill(-1);
    const result: (string | number)[][] = [];
    const indexArr: number[] = [];

    for (let i = 0; i < pages.length; i++) {
      const currentPage = pages[i];
      let hit = false;
      let flag = false;

      for (let j = 0; j < frames; j++) {
        if (temp[j] === currentPage) {
          hit = true;
          flag = true;
          indexArr.push(j);
          pageFaults--;
          break;
        }
      }

      pageFaults++;
      if (!flag) {
        if (pageFaults <= frames) {
          temp[i] = currentPage;
          indexArr.push(i);
        } else {
          const replaceIndex = (pageFaults - 1) % frames;
          temp[replaceIndex] = currentPage;
          indexArr.push(replaceIndex);
        }
      }

      const row: (string | number)[] = [`P${i + 1} (${currentPage})`, ...temp];
      row.push(hit ? "HIT" : "FAULT");
      result.push(row);
    }

    return { result, indexArr, pageFaults };
  };

  const FIFOComponent = () => {
    const { result: rows, indexArr, pageFaults } = fifoResultGiver(frame, seqArr);
    const pageHits = seqArr.length - pageFaults;

    return (
      <>
        <div className="w-full bg-gray-900 text-white text-center py-10 mt-10">
          <Typography variant="h3">FCFS (First Come First Serve)</Typography>
        </div>

        <div className="w-full flex flex-col items-center mt-10 mb-10 px-4">
          <div className="overflow-x-auto w-full max-w-6xl">
            <table className="w-full border border-green-800">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="border p-2">PAGES</th>
                  {[...Array(frame)].map((_, i) => (
                    <th key={i} className="border text-center p-2">{`FRAME ${i + 1}`}</th>
                  ))}
                  <th className="border p-2">RESULT</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((val, colIdx) => {
                      const isResultCol = colIdx === row.length - 1;
                      const isPagePos = colIdx === indexArr[idx] + 1;
                      let bgColor = "bg-white";
                      let textColor = "text-black";

                      if (isResultCol) {
                        bgColor = val === "HIT" ? "bg-green-300" : "bg-red-400";
                      }
                      if (isPagePos) {
                        bgColor = val === "HIT" ? "bg-lime-400" : "bg-red-500";
                        textColor = "text-white";
                      }

                      return (
                        <td key={colIdx} className={`border p-2 text-center ${bgColor} ${textColor}`}>
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 border border-green-800 rounded-2xl w-full max-w-4xl bg-white text-green-900">
            <h2 className="text-3xl font-semibold text-center mb-6">Summary</h2>
            <div className="space-y-3 text-lg">
              <p>Total Frames: {frame}</p>
              <p>Total Pages: {seqArr.length}</p>
              <p>Page Sequence: {seq}</p>
              <p>Page Hit: {pageHits}</p>
              <p>Page Faults: {pageFaults}</p>
            </div>

            <div className="w-full flex flex-col items-center mt-8">
              <Typography style={{ fontSize: 30, color: "#1a202c", marginBottom: 10 }}>Pie Chart</Typography>
              <Chart
                width={"800px"}
                height={"500px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Page Sequence", "Count"],
                  ["Hit", pageHits],
                  ["Fault", pageFaults],
                ]}
                options={{
                  title: "Hit Vs Fault Comparison",
                  is3D: true,
                  backgroundColor: "#1a202c",
                  titleTextStyle: { color: "#FFFFFF", fontSize: 24 },
                  legend: { textStyle: { color: "#FFFFFF", fontSize: 18 } },
                  pieSliceTextStyle: { color: "#FFFFFF", fontSize: 18 },
                  slices: {
                    0: { color: "#7C99AC" },
                    1: { color: "#FFCDDD" },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full min-h-screen bg-green-100 flex flex-col items-center pt-24 pb-10 text-green-900">
      <div className="w-11/12 max-w-3xl p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center">
        <Typography variant="h4" className="mb-6">Simulator</Typography>

        <div className="w-full mb-6">
          <Typography className="text-lg mb-2 text-green-700">Enter Number of Frames</Typography>
          <input type="number" value={frame} onChange={frameHandler} className="w-full text-base p-3 border border-green-700 rounded-lg outline-none" />
        </div>

        <div className="w-full mb-6">
          <Typography className="text-lg mb-2 text-green-700">Enter The Page Sequence</Typography>
          <input type="text" value={seq} onChange={seqHandler} className="w-full text-base p-3 border border-green-700 rounded-lg outline-none" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button style={{ backgroundColor: "#40916c", color: "white" }} onClick={() => handleClick("fifo")}>
            FCFS
          </Button>
          <Button style={{ backgroundColor: "#40916c", color: "white" }} onClick={handleReset}>
            RESET
          </Button>
        </div>

        {error && <Typography className="text-red-600 mt-4">{error}</Typography>}
      </div>

      {result === "fifo" && !error && <FIFOComponent />}
    </div>
  );
};

export default Simulator;

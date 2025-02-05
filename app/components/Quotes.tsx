"use client";
import { useState, useEffect } from "react";

interface QuoteType {
  id: number;
  quote: string;
  author: string;
}

export default function Quotes() {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes); // Fix: Extracting quotes from API response
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    }
    fetchData();
  }, []); // Fix: Adding dependency array

  return (
    <div className="flex gap-4 flex-wrap w-full items-center justify-center mt-[100px] mb-[100px]">
      {quotes.map((q) => (
        <div
          key={q.id}
          className="text-center  w-[400px] h-[500px] bg-black text-white border-2 flex flex-col  justify-center items-center gap-[100px] font-light"
        >
          <h1 className="text-xl">{q.quote}</h1>
          <p className="text-md font-extrabold">{q.author}</p>
        </div>
      ))}
    </div>
  );
}
"use client";

import React, { useState, useEffect, useRef } from "react";

interface Reminder {
  id: number;
  message: string;
  dateTime: string;
  triggered: boolean;
}

export default function ReminderSystem() {
  const [message, setMessage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load alarm sound on component mount
  useEffect(() => {
    audioRef.current = new Audio("/sounds/alarm.mp3");
    audioRef.current.loop = true; // Keep ringing until stopped
  }, []);

  // Reminder checker
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toISOString();
      setReminders((prev) =>
        prev.map((reminder) => {
          if (!reminder.triggered && now >= reminder.dateTime) {
            if (audioRef.current) {
              audioRef.current.play().catch((err) => console.log("Autoplay block:", err));
            }
            return { ...reminder, triggered: true };
          }
          return reminder;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addReminder = () => {
    if (!message || !dateTime) return;
    const newReminder: Reminder = {
      id: Date.now(),
      message,
      dateTime: new Date(dateTime).toISOString(),
      triggered: false,
    };
    setReminders([...reminders, newReminder]);
    setMessage("");
    setDateTime("");
  };

  const stopAlarm = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6 font-mono">
      <h1 className="text-3xl mb-4 font-bold text-center">Reminder System</h1>

      <div className="mb-6 flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter reminder message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <button
          onClick={addReminder}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Reminder
        </button>
        <button
          onClick={stopAlarm}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Stop Alarm
        </button>
      </div>

      <div className="max-w-md mx-auto">
        <h2 className="text-xl mb-2">Active Reminders</h2>
        <ul className="space-y-2">
          {reminders.map((reminder) => (
            <li
              key={reminder.id}
              className={`p-4 rounded border ${
                reminder.triggered
                  ? "border-red-500 bg-red-800"
                  : "border-gray-700 bg-gray-800"
              }`}
            >
              <p className="text-lg font-semibold">{reminder.message}</p>
              <p className="text-sm opacity-75">
                Time: {new Date(reminder.dateTime).toLocaleString()}
              </p>
              <p className="text-sm">
                Status:{" "}
                {reminder.triggered ? (
                  <span className="text-red-400">Triggered</span>
                ) : (
                  <span className="text-green-400">Upcoming</span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

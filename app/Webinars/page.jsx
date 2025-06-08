"use client";
import React from "react";

const webinars = [
  {
    id: 1,
    title: "Understanding Baby Sleep Patterns",
    speaker: "Dr. Sumitra Meena",
    date: "2025-06-12",
  },
  {
    id: 2,
    title: "Nutrition for Newborns",
    speaker: "Dr. Aarti Sharma",
    date: "2025-06-15",
  },
  {
    id: 3,
    title: "Handling Common Infant Illnesses",
    speaker: "Dr. Rajeev Singh",
    date: "2025-06-20",
  },
];

const WebinarsPage = () => {
  // Function that handles View Details button click
  const handleViewDetails = (id) => {
    console.log("Viewing details for webinar ID:", id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">
          🌟 Upcoming Live Webinars
        </h1>
        <p className="text-gray-600 mb-12 text-lg">
          Stay informed with expert-led sessions tailored for new parents.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  {webinar.title}
                </h2>
                <p className="text-gray-700 mb-1">
                  👩‍⚕️ <strong>Speaker:</strong> {webinar.speaker}
                </p>
                <p className="text-gray-700 mb-6">
                  📅 <strong>Date:</strong>{" "}
                  {new Date(webinar.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <button
                onClick={() => handleViewDetails(webinar.id)}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-2 w-32 mx-auto rounded-xl shadow-md transition duration-200"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WebinarsPage;

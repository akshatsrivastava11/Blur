import React from "react"
export default function Sidebar() {
    return (
      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-4">About Community</h2>
        <p className="text-gray-300 mb-4">
          Welcome to our Blur! Share your thoughts, ask questions, and engage in discussions on various topics.
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Rules</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Be respectful to others</li>
            <li>No spam or self-promotion</li>
            <li>Use appropriate tags for your posts</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Moderators</h3>
          <ul className="text-gray-300">
            <li>u/mod1</li>
            <li>u/mod2</li>
            <li>u/mod3</li>
          </ul>
        </div>
      </div>
    )
  }
  
  
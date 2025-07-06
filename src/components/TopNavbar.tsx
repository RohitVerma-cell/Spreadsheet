 import React from "react";

const TopNavbar = () => {
  return (
    <div className="w-full border-b bg-white">
      {/* First Row */}
      <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700">
        {/* Left: Breadcrumb */}
        <div className="flex items-center space-x-2">
          <span className="text-green-500">🟢</span>
          <span className="font-medium text-gray-500 cursor-pointer hover:underline">Workspace</span>
          <span>/</span>
          <span className="font-medium text-gray-500 cursor-pointer hover:underline">Folder 2</span>
          <span>/</span>
          <span className="font-semibold">Spreadsheet 3</span>
          <span className="text-gray-400">•••</span>
        </div>

        {/* Right: Search and Profile */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search within sheet"
            className="px-2 py-1 text-sm border rounded-md w-52"
          />
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer">
            🔔
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="text-sm font-medium">John Doe</span>
          </div>
        </div>
      </div>

      {/* Second Row: Toolbar + Action Buttons */}
      <div className="flex justify-between items-center px-4 py-1 border-t text-sm text-gray-700">
        {/* Left: Toolbar Buttons */}
        <div className="flex space-x-4">
          <button className="hover:underline">Tool bar</button>
          <button className="hover:underline">🔽 Hide fields</button>
          <button className="hover:underline">⬍ Sort</button>
          <button className="hover:underline">⛃ Filter</button>
          <button className="hover:underline">▣ Cell view</button>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="text-sm px-3 py-1 hover:bg-gray-100 rounded">Import</button>
          <button className="text-sm px-3 py-1 hover:bg-gray-100 rounded">Export</button>
          <button className="text-sm px-3 py-1 hover:bg-gray-100 rounded">Share</button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
            + New Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

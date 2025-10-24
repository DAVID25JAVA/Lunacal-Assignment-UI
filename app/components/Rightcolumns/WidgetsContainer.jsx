"use client";
import AboutTabs from "./AboutTables";
import GalleryWidget from "./GalleryWidget";

export default function WidgetsContainer() {
  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Widget 1: About / Experiences / Recommended */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg shadow-gray-950/50">
          <AboutTabs />
        </div>

        {/* Widget 2: Gallery */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg shadow-gray-950/50">
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

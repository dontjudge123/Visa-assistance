// src/components/DownloadsSection.jsx
const DownloadsSection = ({ downloads }) => {
  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Downloads</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {downloads.map((download, index) => (
          <div 
            key={index} 
            className="border p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => console.log('Download:', download)} // Replace with actual download logic
          >
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              <span className="text-gray-800">{download}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsSection;
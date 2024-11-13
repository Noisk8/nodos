const SkeletonCoinGeko = () => (
    <div className="bg-gray-900 p-5 rounded-lg shadow-xl text-purple-300 flex flex-col items-end mt-16" style={{ boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)" }}>
        <div className="flex justify-between items-center w-full">
            <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
        </div>
        <div className="flex items-center">
            <div className="w-24 h-24 rounded-full border-2 bg-gray-700 animate-pulse"></div>
            <div className="ml-4">
                <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
            </div>
        </div>
        <div className="flex justify-center w-full pt-8">
            <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse"></div>
        </div>
    </div>
);

export default SkeletonCoinGeko;

const SkeletonGatewayCard = () => (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
    </div>
);

const SkeletonGateways = () => (
    <div className="max-w-4xl mx-auto mt-8" style={{ boxShadow: "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)" }}>
        <div className="shadow-lg rounded-lg overflow-hidden bg-gray-900 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonGatewayCard key={index} />
                ))}
            </div>
        </div>
    </div>
);

export default SkeletonGateways;
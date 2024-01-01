export const DialogOverlay = ({ onClose, message }) => {

    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-100">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full">
          <h2 className="text-lg font-semibold mb-4">Error</h2>
          <div className="mt-4">
            <button
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    );
  };
  
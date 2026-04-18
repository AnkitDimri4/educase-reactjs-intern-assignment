import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-body">
        <div className="w-93.75 h-203 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden">
          <Outlet />
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
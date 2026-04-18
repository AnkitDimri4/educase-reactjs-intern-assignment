import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountSettings, Home, Login, Registration } from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="profile" element={<AccountSettings />} />
          <Route
            path="*"
            element={
              <div className="w-full h-full flex flex-col justify-center items-center p-5">
                <h1 className="text-[28px] font-bold text-primary">404</h1>
                <p className="text-primary opacity-60 mt-2 text-[14px]">
                  Page not found.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

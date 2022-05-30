import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./component/Admin";
import Login from "./component/Login";
import User from "./component/User";
import ViewsWrapper from "./component/ViewsWrapper";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

const LoginPage = ViewsWrapper(Login);
const AdminPage = ViewsWrapper(Admin);
const UserPage = ViewsWrapper(User);

function App() {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </>
  );
}

export default App;

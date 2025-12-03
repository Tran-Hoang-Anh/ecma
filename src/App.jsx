import { Toaster } from 'react-hot-toast';
import { Route, Routes, Link } from 'react-router-dom';
import ListPage from './pages/List';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

function App() {
  return (
    <>
      {/* HEADER - Navbar Tailwind */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </a>
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-200">
              Trang chủ
            </a>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          {/* Right menu desktop */}
          {/* Right menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
            Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
            Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
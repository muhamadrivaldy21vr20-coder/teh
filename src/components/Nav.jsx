import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="border-b-4 border-black py-4 px-6 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-black tracking-tighter italic">
          TELIER <span className="text-red-600">NEWS.</span>
        </Link>
        <div className="hidden md:flex space-x-8 font-bold text-xs uppercase tracking-widest">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <a href="#" className="hover:text-red-600">Tekno</a>
          <a href="#" className="hover:text-red-600">Bisnis</a>
          <Link to="/telier-secret-cms" className="bg-black text-white px-3 py-1 rounded">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

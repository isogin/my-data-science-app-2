import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full top-0 transition-colors duration-300 ease-in-out navbar ${isScrolled ? 'navbar-scroll' : ''}`}>
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-poppins text-purple">Data Science App</h1>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-purple hover:text-orange transition-transform transform hover:scale-110">ホーム</Link>
          <Link to="/visualization" className="text-purple hover:text-orange transition-transform transform hover:scale-110">データの可視化</Link>
          <Link to="/statistics" className="text-purple hover:text-orange transition-transform transform hover:scale-110">統計の基礎</Link>
          <Link to="/preprocessing" className="text-purple hover:text-orange transition-transform transform hover:scale-110">データの前処理</Link>
          <Link to="/analysis" className="text-purple hover:text-orange transition-transform transform hover:scale-110">データ分析の基本</Link>
          <Link to="/simulation" className="text-purple hover:text-orange transition-transform transform hover:scale-110">データシミュレーション</Link>
          <Link to="/quiz" className="text-purple hover:text-orange transition-transform transform hover:scale-110">クイズ</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-lightblue">
          <Link to="/" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">ホーム</Link>
          <Link to="/visualization" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">データの可視化</Link>
          <Link to="/statistics" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">統計の基礎</Link>
          <Link to="/preprocessing" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">データの前処理</Link>
          <Link to="/analysis" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">データ分析の基本</Link>
          <Link to="/simulation" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">データシミュレーション</Link>
          <Link to="/quiz" className="block p-4 text-purple hover:bg-orange transition-transform transform hover:scale-110">クイズ</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

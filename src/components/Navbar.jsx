export default function Navbar() {
  return (
    <nav className="flex justify-between items-end h-20 text-sm ">
      <div className="logo uppercase leading-4 font-extrabold text-base cursor-pointer ">
        <h1>
          dogStudio <br />/ dept.
        </h1>
      </div>
      <div className="nav-links cursor-pointer flex items-center gap-2 mr-10 font-medium">
        <i className="ri-arrow-right-s-line text-red-500 font-bold"></i>Our
        Showreel
      </div>
      <div className="nav-links cursor-pointer text-2xl">
        <i className="ri-menu-3-line"></i>
      </div>
    </nav>
  );
}

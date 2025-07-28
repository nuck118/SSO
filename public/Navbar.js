import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Library</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="/services">Services</Link>
        <Link href="/community">Community</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
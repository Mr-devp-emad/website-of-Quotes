import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">MyQuotes</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Developed Under The SuperVision of EMAAD AHMED 
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

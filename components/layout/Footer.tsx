import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer
      className="border-t py-5 px-2 mx-2 flex flex-col md:flex-row md:items-center justify-between g mt-10"
      aria-label="Footer"
    >
      <Logo />
      <p className="text-gray-500 text-sm">
        Copyright &copy; 2026 Alzaf. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

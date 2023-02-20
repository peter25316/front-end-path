import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-teal-400">
        <p>This is Header</p>
        <Link href="/">Home</Link>
        <Link href="/components/about">About</Link>
        <Link href="/components/works">Works</Link>
      </header>
      <main>{children}</main>
      <footer>
        <p>This is Footer</p>
      </footer>
    </>
  );
};

export default Layout;

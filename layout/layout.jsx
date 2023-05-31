const Layout = ({ children }) => {
  return (
    <div className="flex h-sreen bg-white">
      <div className="m-auto">{children}</div>
    </div>
  );
};

export default Layout;

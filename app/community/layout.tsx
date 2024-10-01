import Header from "@/components/layout/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black h-screen">
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;

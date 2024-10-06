import Header from "@/components/layout/Header";
import ReactQueryProvider from "@/components/ReactQueryProvider.client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <Header />

      <main>{children}</main>
    </ReactQueryProvider>
  );
};

export default Layout;

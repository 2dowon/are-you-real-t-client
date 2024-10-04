import ReactQueryProvider from "@/components/ReactQueryProvider.client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Layout;

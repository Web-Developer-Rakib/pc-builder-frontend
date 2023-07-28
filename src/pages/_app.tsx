import MainLayout from "@/components/MainLayout";

export default function App({ Component, pageProps }: any) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

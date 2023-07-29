import MainLayout from "@/components/MainLayout";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </MainLayout>
    </Provider>
  );
}

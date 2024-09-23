import { Form } from "./components/Form/form";
import { Header } from "./components/Header/header";
import { About } from "./components/About/about";
import { Services } from "./components/Services/services";
import { Philosophy } from "./components/Philosophy/philosophy";
import { Contacts } from "./components/Contact/contact";
import { Footer } from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-[calc(100% - 22px)] m-[11px] mb-0 relative flex flex-col justify-center items-center">
        <Header />
        <About />
        <Services />
        <Philosophy />
        <Contacts />
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;

import { useEffect } from "react";
import ContactForm from "./ContactForm";
import Header from "./Header"
function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="m-auto max-w-md py-6 w-full">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default App;

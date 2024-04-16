import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";

function App() {
  return (
    <section className="">
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;

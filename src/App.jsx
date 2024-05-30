import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <section className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </section>
  );
}

export default App;

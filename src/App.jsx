import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";
import { Toaster } from 'react-hot-toast'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "./features/authSlice/authSlice";

function App() {
const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log(user.email);
        dispatch(setUser(user?.email))
      }
    })
  },[dispatch])

  return (
    <section className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </section>
  );
}

export default App;

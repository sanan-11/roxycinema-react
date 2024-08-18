import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Contact from "./Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { SinglePage } from "./components/watch/SinglePage";
// import { HomePage } from "./home/HomePage";
import { Movies } from "./Movies";
import { HomePage } from "./components/home/HomePage";


function App() {
  return (
    <>
    <div>
    <Router>
     
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/singlePage/:id" component={<SinglePage/>} />
        <Route exact path = "/contact" element={<Contact/>}/>
        <Route exact path = "/movies" element={<Movies/>}/>
      </Routes>
    </Router>
      <Footer/>
      </div>
      </>
  );
}

export default App;

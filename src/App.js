
import './App.css';
// import 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from './Components/MainCompoent';
import FormBuilderComponent from './Components/FormBuilderComponent';
import FormComponent from './Components/FormComponent';
function App() {
  return (
    <div className="App">
     {/* http://assessments.ngminds.com/fb.pdf */}
   {/* <MainComponent /> */}

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />}>
          <Route path='/formBuilderComponent' element={<FormBuilderComponent />} />
        <Route path='/FormComponent' element={<FormComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

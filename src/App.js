import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import NewPostForm from "./NewPostForm"
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/admin/posts" element={<Homepage />} />
          {/* <Route path="/admin/write" element={<NewPostForm />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './index.css';
import Navbar from './Navigation/Navbar.js'
import Example from './Example/Example'
import Footer from './Footer/Footer.js'
function App() {
  return (
    <div>
      <Navbar />
          <Example/>
          <div className="h-10"></div>
          <Footer/>

    </div>
  );
}

export default App;

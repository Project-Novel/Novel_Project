import './Main.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Slick1 from './Components/slick1';

function App() {
  return (
    <div>
      <Navbar />
      <h2>Event</h2>
        <Slick1 />
      <br/>
      <hr class="hrcss"></hr>
      <h2>Today's Pick {'>'}</h2>
      <hr class="hrcss"></hr>
      <h2>New up {'>'}</h2>
      <hr class="hrcss"></hr>
      <h2>검색하기</h2>
      <div className="search"> 
        <input type="text" placeholder="Search..."/>
        <button>Search</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;

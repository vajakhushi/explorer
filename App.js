import './App.css';
import  Card from './Card';
import Navbar from './navbar';

function App() {
  return (
    <div>

      <div className="App">
        <Navbar />
      </div>
      
        <div className='col-md-12'>

          <div class="row">
          <div class="col-md-4">
            <Card />
          </div>
          <div class="col-md-4">
            <Card />
          </div>
          <div class="col-md-4" >
            <Card />
          </div>
        </div>
        </div>

    </div>
  );
}

export default App;

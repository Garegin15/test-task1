import './App.css';
import 'antd/dist/antd.css';
import Table from "./Table";
import { Input, Button } from 'antd';
const { Search } = Input;


function App() {
  return (
    <div className="d-flex">
      <div className="row side-bar" ></div>
      <div className="row main-container">
        <div className="nav-bar"></div>
        <div style={{ background: "#FFFFFF", marginTop: 20, marginLeft: 25, marginRight: 35 }}>
          <div className="d-flex">
            <div className="w-100">
              <div className="d-flex">
                <p className="charges">Collaborateurs chargés</p>
              </div>
              <div>
                <Search placeholder="Search" style={{ width: "60%", marginLeft: 38, marginTop: 20 }} />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="table-container">
              <Table />
            </div>
            <div className="w-100">
              <div className="row info-container">
                <div className='info-details'>
                  <span className="info-header">Qté chargé total</span>
                  <span className="info">430</span>
                </div>
                <div className='info-details'>
                  <span className="info-header">Qté connéctée</span>
                  <span className="info">143</span>
                </div>
              </div>
              <div className="row justify-content-center" style={{ width: "70%" }} >
                <p className="description">
                  Retrouvez l’essentiel pour prévenir et protéger vos salariés. Encore plus de façons d’impacter positivement la qualité de vie de vos collaborateurs.
                </p>
              </div>
              <div className="row justify-content-center" style={{ width: "70%" }}>
                <Button type="primary" block style={{ marginTop: 20, width: "60%" }}>
                  Envoyer l’invitation a tous
                </Button>
              </div>
              <div className="row justify-content-center" style={{ width: "70%" }}>
                <Button style={{ border: "1px solid #5398DF", color: 'black', marginTop: 20, width: "60%" }} ghost block>
                  Envoyer un rappelle a non connéctés
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

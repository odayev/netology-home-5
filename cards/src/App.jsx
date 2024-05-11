import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Card( props ) {

  const cardStyle = {
    border:'1.5px solid lightgrey',
    margin:'20px',
    width: '18rem'
  }

  return (
    <div className="card" style={cardStyle}>
      <img src={props.children} alt="" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Card>src/assets/react.svg</Card>
      <Card>sdfa</Card>
      <Card>src/assets/react.svg</Card>
    </div>
  );
}

export default App;

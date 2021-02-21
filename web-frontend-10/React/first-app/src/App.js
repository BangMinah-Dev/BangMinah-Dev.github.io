import logo from "./logo.svg";
import "./App.css";
import Table from "./table.js"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <div className="container">
                <h1 className="title text-center mt-5 mb-5">Danh sách học viên</h1>
                <Table></Table>
            </div>
        </div>
    );
}

export default App;

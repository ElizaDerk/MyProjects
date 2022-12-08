import './App.css';
import LoanList from "./components/LoanList";

function App() {
  return (
      <main>
          <header className="App-header">
              <h1>Current Loans</h1>
          </header>
            <LoanList />
      </main>
  );
}

export default App;

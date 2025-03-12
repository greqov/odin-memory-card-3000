import { Card } from './components/Card';
import data from './data.json';

function App() {
  return (
    <div className="container">
      <h1>such memory card!</h1>
      <Card image={data[0]} />
    </div>
  );
}

export default App;

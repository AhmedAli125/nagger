// import './App.css';
import {

} from 'react-bootstrap'
import ComponentContainer from './containers/ComponentContainer';
import NaggerState from './context/NaggerState'

function App() {
  return (
    <NaggerState>
      <ComponentContainer />
    </NaggerState>
  );
}

export default App;

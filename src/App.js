import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Switch } from "react-router-dom";
import Medicines from './containres/Medicines/Medicines';
import Patients from './containres/Patients/Patients';


function App() {
  return (
  <>
      <Layout>
      <Switch>
        <Route path={"/medicines"} exact component={Medicines} />,
        <Route path={"/patients"} exact component={Patients} />,
      </Switch>
    </Layout>
    </>
  );
}

export default App;

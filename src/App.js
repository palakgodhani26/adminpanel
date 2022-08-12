import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Switch } from "react-router-dom";
import Medicines from './containres/Medicines/Medicines';
import Patients from './containres/Patients/Patients';
import Counter from './containres/Counter/Counter';
import { Provider} from 'react-redux';
import { configurestore } from './Redux/Store';
import PromiseExample from './containres/Example/PromiseExample';


function App() {
  let store =configurestore()
  return (
  <>
  <Provider store ={store}>
      <Layout>
      <Switch>
        <Route path={"/medicines"} exact component={Medicines} />,
        <Route path={"/patients"} exact component={Patients} />,
        <Route path={"/counter"} exact component={Counter} />,
        <Route path={"/PromiseExample"} exact component={PromiseExample} />,

      </Switch>
    </Layout>
    </Provider>
    </>
  );
}

export default App;

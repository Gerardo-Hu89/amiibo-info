import { Layout } from './pages/layout';
import { Header } from './components/header';

import './App.css';
import { RowContainer } from './components/row-container';

function App() {
  return (
    <Layout>
      <>
        <Header />
        <RowContainer />
      </>
    </Layout>
  );
}

export default App;

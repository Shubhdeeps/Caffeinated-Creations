import Layout from "./components/layout/Layout";
import { Button } from "./components/ui/button";
import ContributionHistory from "./features/ContributionHistory";

function App() {
  return (
    <Layout>
      <Button>Hello test</Button>
      <ContributionHistory />
    </Layout>
  );
}

export default App;

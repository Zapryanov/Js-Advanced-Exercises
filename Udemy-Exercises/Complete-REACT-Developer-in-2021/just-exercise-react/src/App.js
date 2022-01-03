import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LessonsPage from "./pages/LessonsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/lessons" component={LessonsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </Layout>
  );
}

export default App;

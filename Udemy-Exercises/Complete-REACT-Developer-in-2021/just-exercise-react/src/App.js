import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LessonsPage from "./pages/LessonsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import Layout from "./components/layout/Layout";
import CreateNewLessonPage from "./pages/CreateNewLessonPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/lessons" component={LessonsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/create" component={CreateNewLessonPage} />
      </Switch>
    </Layout>
  );
}

export default App;

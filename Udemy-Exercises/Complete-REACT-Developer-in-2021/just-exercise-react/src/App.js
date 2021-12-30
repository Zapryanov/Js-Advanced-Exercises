import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LessonsPage from "./pages/LessonsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/lessons" component={LessonsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </div>
  );
}

export default App;

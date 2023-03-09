import AppNavigator from "./navigation";
import { init } from "./db";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    init()
      .then(() => {
        console.log("database initialized");
      })
      .catch((err) => {
        console.log("database failed");
        console.log(err);
      });
  }, []);
  return <AppNavigator />;
};

export default App;

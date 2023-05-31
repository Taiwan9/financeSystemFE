import { AuthProvider } from "./context/auth";
import Rotas from "./routes/Rotas";

function App() {

  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;

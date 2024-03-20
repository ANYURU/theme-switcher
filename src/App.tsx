import ThemeToggleButton from "./ThemeToggleButton";
import { ThemeProvider } from "./useTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
    </div>
  );
}

export default App;

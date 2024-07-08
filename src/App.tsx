import '@mantine/core/styles.css';

import './App.css';
import Home from './components/Home/Home';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>

      <Home />
    </MantineProvider>
  );
}

export default App;

import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { TelegramProvider } from './app/providers/TelegramProvider';
import './App.css';

function App() {
  return (
    <TelegramProvider>
      <RouterProvider router={router} />
    </TelegramProvider>
  );
}

export default App;

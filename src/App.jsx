import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedGroup from './ProtectedGroup';
import PrivateGroup from './PrivateGroup';
import UserProfile from './UserProfile';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>
  },
  {
    path: "/private-group",
    element: < ProtectedGroup isMember={false} > <PrivateGroup /></ProtectedGroup >
  },
  {
    path: "/user/:userId",
    element: <UserProfile></UserProfile>
  }
])

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;

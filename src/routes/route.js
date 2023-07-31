import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home, pagePaths, TodoList } from '../pages';
import { Root } from '../routes/root';

export const router = createBrowserRouter([
  {
    path: pagePaths.home,
    element: <Root />,
    errorElement: <p>Error!</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: pagePaths.todo,
        element: <TodoList />,
      },
    ],
  },
]);

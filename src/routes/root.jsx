import { Outlet, Link } from 'react-router-dom';

import { pagePaths } from '../pages';

export function Root() {
  return (
    <div className="row h-100">
      <div id="detail" className="col h-100">
        <Outlet />
      </div>
    </div>
  );
}

import { Navigate, Route } from 'react-router-dom';

import { CoreLayout } from '@/layouts/core-layout/CoreLayout';

export const LogRoutes = () => {
  return (
    <CoreLayout title="Logs">
      <Route>
        <Route path={'/'} element={<div> LOG </div>} />
        <Route path={'/:id'} element={<div> LOG ID </div>} />
        <Route path={'*'} element={<Navigate to={'/log'} />} />
      </Route>
    </CoreLayout>
  );
};

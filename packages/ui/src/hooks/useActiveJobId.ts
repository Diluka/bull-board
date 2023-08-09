import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';

export function useActiveJobId(): string {
  const { pathname } = useLocation();

  const match = matchPath<{ name: string; jobId: string }>(pathname, {
    path: ['/queue/:name/:jobId'],
    exact: false,
    strict: false,
  });

  return decodeURIComponent(match?.params.jobId || '');
}

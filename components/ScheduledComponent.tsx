// Use `server-only` to prevent this component from being included in the client bundle
import 'server-only'

export function ScheduledComponent ({showAt, children}: {
  showAt: Date;
  children: React.ReactNode;
}) {
  if (new Date() < showAt) {
    return null;
  } else {
    return children;
  }
}

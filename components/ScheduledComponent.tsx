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

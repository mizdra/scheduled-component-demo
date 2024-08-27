# scheduled-component-demo

The demo of `<ScheduledComponent>` implementation with React Server Components.

## How to start demo

```bash
npm i
npm run dev
open http://localhost:3000
open http://localhost:3000/client-component-leak-test
```

## What is `<ScheduledComponent>`?

`<ScheduledComponent>` is a component that can be scheduled to render at a specific time. Nothing is displayed to the user until that time, but at the specified time, the component is displayed.

`<ScheduledComponent>` is used to display secret campaign information, etc.

## Why use React Server Components?

The source code for all client components is included in the client bundle. Therefore, using Client Components to implement `<ScheduledComponent>` will leak secret campaign information to the user.

On the other hand, the source code of React Server Components is not leaked to the user. Therefore, you can hide the secret campaign information until the date of publication.

## The implementation of `<ScheduledComponent>`

The following is the implementation:

```tsx
// Use `server-only` to prevent this component from being included in the client bundle
import 'server-only'

export function ScheduledComponent({showAt, children}: {
  showAt: Date;
  children: React.ReactNode;
}) {
  if (new Date() < showAt) {
    return null;
  } else {
    return children;
  }
}
```

Use it as follows:

```tsx
import { ScheduledComponent } from "@/components/ScheduledComponent";

export default function Home() {
  return (
    <main>
      <ScheduledComponent showAt={new Date("2024-01-01T00:00:00.000Z")}>
        <h1>Happy New Year Campaign!</h1>
      </ScheduledComponent>
      <ScheduledComponent showAt={new Date("2024-12-25T00:00:00.000Z")}>
        <h1>Christmas Campaign!</h1>
      </ScheduledComponent>
    </main>
  );
}
```

## License

CC0-1.0

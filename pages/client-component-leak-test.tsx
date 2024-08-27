import { ScheduledClientComponent } from "@/components/ScheduledClientComponent";

const thisYear = new Date().getFullYear();

export default function Home() {
  return (
    <main>
      <ScheduledClientComponent showAt={new Date(`${thisYear}-01-01T00:00:00.000Z`)}>
        <h1>Happy New Year Campaign!</h1>
      </ScheduledClientComponent>
      <ScheduledClientComponent showAt={new Date(`${thisYear}-12-25T00:00:00.000Z`)}>
        <h1>Christmas Campaign!</h1>
      </ScheduledClientComponent>
    </main>
  );
}

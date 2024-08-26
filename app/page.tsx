import { ScheduledComponent } from "@/components/ScheduledComponent";

export default function Home() {
  return (
    <main>
      <ScheduledComponent showAt={new Date("2024-01-01")}>
        <h1>Happy New Year!</h1>
      </ScheduledComponent>
      <ScheduledComponent showAt={new Date("2024-12-25")}>
        <h1>Merry Christmas!</h1>
      </ScheduledComponent>
    </main>
  );
}

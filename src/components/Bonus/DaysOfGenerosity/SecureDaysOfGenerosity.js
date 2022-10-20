import DaysOfGenerosity from "./DaysOfGenerosity";
import DaysOfGenerosityActivate from "./DaysOfGenerosityActivate";

export default function SecureDaysOfGenerosity() {
  const generositydays = localStorage.getItem(
    "https://omisify.com/generositydays"
  );

  return (
    <>{generositydays ? <DaysOfGenerosityActivate /> : <DaysOfGenerosity />}</>
  );
}

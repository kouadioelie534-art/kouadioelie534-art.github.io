import "./GridBackdrop.css";

export default function GridBackdrop() {
  return (
    <div className="grid-backdrop" aria-hidden="true">
      <div className="grid-backdrop__grid" />
    </div>
  );
}

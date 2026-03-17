export default function Header({ title }: { title: string }) {
  return (
    <h2 className="mb-4 text-xs uppercase tracking-widest text-muted">
      {title}
    </h2>
  );
}

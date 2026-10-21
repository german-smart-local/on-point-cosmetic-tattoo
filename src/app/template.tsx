// Remounted on every navigation (see Next's template.js convention), so the page entrance in
// globals.css plays each time a new page opens, not only on the first load.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}

import Link from "next/link";

export const revalidate = 2592000; // ISR mensal

type ProjectListItem = {
  slug: string;
  title: string;
  excerpt?: string | null;
};

export default function ProjectsPage() {
  // Por enquanto mantido como “stub” (igual ao que existia no `pages/`).
  const projects: ProjectListItem[] = [];

  return (
    <main style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ margin: 0, marginBottom: 16, fontSize: 32 }}>Projects</h1>
      {projects.length === 0 ? (
        <p style={{ opacity: 0.8 }}>Lista de projetos em breve.</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}


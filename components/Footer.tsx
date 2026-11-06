async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto py-4">
      <p>
        &copy; <CopyrightYear /> Sacrament Meeting Planner
      </p>
    </footer>
  );
}

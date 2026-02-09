import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  title: string;
  description: string;
  role: "student" | "admin";
}

export default function Placeholder({ title, description, role }: PlaceholderProps) {
  const navigate = useNavigate();

  return (
    <Layout role={role}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground mb-8">{description}</p>

        <div className="hms-card p-12 text-center">
          <div className="mb-4 text-4xl">📄</div>
          <p className="text-muted-foreground mb-6">
            This page is ready to be built. Let me know what features you'd like to add here!
          </p>
          <button
            onClick={() => navigate(-1)}
            className="hms-button"
          >
            Go Back
          </button>
        </div>
      </div>
    </Layout>
  );
}

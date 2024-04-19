import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center mt-4">
      <Loader2 className="text-primary size-12 animate-spin" />
    </div>
  );
}

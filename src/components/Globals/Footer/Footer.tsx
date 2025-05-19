import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full mt-10">
      <Separator />
      <div className="text-center text-sm text-muted-foreground py-4">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
}

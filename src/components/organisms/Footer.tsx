import { Separator } from "@ui/separator";
import { SocialBtnList } from "./SocialBtnList";
import { Container } from "@atoms/Container";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-gray-50 dark:bg-gray-900">
      <Separator />
      <Container variant="fullMobileConstrainedPadded" className="w-full">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between my-6">
          <div className="text-center text-sm text-muted-foreground py-4">
            © {new Date().getFullYear()} - Developed by Leandro Rangel
          </div>

          <div className="flex gap-3 justify-center">
            <SocialBtnList />
          </div>
        </div>
      </Container>
    </footer>
  );
}

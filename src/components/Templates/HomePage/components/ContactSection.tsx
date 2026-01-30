import { socialLinks } from "@/data/sociaLinks";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { Button } from "@ui/button";
import { Separator } from "@ui/separator";
import Link from "next/link";
import { SocialLinks } from "@organisms/SocialLinks";

interface ContactSectionProps {
  id?: string;
  className?: string;
}

const ContactSection = ({ id, className }: ContactSectionProps) => {
  const email = socialLinks?.find((item) => item.name === "E-mail");

  if (!socialLinks || socialLinks?.length < 1) null;

  return (
    <section id={id} className={className}>
      <div>
        <Heading
          as="h2"
          weight="extrabold"
          className="text-1xl md:text-4xl mb-4"
        >
          Contato
        </Heading>
        <Text as="p" variant="muted">
          Conecte-se comigo:
        </Text>
      </div>

      <div className="flex flex-col gap-2">
        <SocialLinks />
      </div>

      {email && (
        <>
          <Separator className="my-8" />
          <div>
            <Text as="p" variant="muted">
              Gostou do conteúdo? Me mande uma mensagem!
            </Text>

            <Button
              variant="highlight"
              size="lg"
              asChild
              className="w-full px-4 py-3 rounded-lg transition-colors no-underline"
            >
              <Link
                href={email?.href || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar email
              </Link>
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export { ContactSection };

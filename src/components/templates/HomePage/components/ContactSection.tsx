import { socialLinks } from "@/data/sociaLinks";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { Button } from "@ui/button";
import { Separator } from "@ui/separator";
import Link from "next/link";
import { SocialLinks } from "@organisms/SocialLinks";
import { homeContent } from "@/data/pages-content/home";

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
          {homeContent.sections.contact.title}
        </Heading>
        <Text as="p" variant="muted">
          {homeContent.sections.contact.description}
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
                href={`${email?.href}?subject=Vamos%20conversar!&body=Oi%20%F0%9F%91%8B%0A%0AVi%20seu%20site%20e%20quis%20entrar%20em%20contato.%0A%0AAbra%C3%A7os!`}
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

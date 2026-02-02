import React from "react";
import { Button } from "@ui/button";
import Link from "next/link";
import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { ReloadButton } from "./components/ReloadButton";

interface ErrorTemplateProps {
  statusCode?: number;
  title?: string;
  content?: string;
}

const defaultErrorMessages: Record<number, { title: string; message: string }> =
  {
    404: {
      title: "Página não encontrada",
      message:
        "Desculpe, mas a página que você está procurando não existe ou foi movida.",
    },
    500: {
      title: "Erro interno do servidor",
      message:
        "Algo deu errado no servidor. Por favor, tente novamente mais tarde.",
    },
    403: {
      title: "Acesso negado",
      message: "Você não tem permissão para acessar esta página.",
    },
    401: {
      title: "Não autorizado",
      message: "Você precisa estar logado para acessar esta página.",
    },
  };

const ErrorTemplate: React.FC<ErrorTemplateProps> = ({
  statusCode = 500,
  title,
  content,
}) => {
  const errorData = defaultErrorMessages[statusCode] || {
    title: "Ocorreu um erro",
    message: "Algo deu errado. Por favor, tente novamente.",
  };

  const showReloadButton = statusCode !== 404;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50 dark:bg-gray-900 py-20">
      <Container className="max-w-xl">
        <Heading weight="extrabold" className="text-6xl mb-4">
          {statusCode}
        </Heading>

        <Heading as="h2" weight="semibold" className="text-2xl mb-6">
          {title || errorData.title}
        </Heading>

        <Text variant="muted" className="mb-8">
          {content ? (
            <span
              className="prose prose-lg dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            errorData.message
          )}
        </Text>

        <div className="flex flex-col gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link href="/" className="no-underline">
              Voltar para a página inicial
            </Link>
          </Button>

          {showReloadButton && <ReloadButton />}
        </div>
      </Container>
    </div>
  );
};

export default ErrorTemplate;

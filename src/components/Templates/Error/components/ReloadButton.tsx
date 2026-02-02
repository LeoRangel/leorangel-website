"use client";

import { Button } from "@ui/button";

const ReloadButton = () => {
  return (
    <Button
      onClick={() => window.location.reload()}
      variant="secondary"
      size="lg"
      className="hover:cursor-pointer"
    >
      Recarregar a página
    </Button>
  );
};

export { ReloadButton };

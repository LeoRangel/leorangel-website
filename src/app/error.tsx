"use client";
import ErrorTemplate from "@templates/Error/ErrorTemplate";
import React from "react";

interface ErrorProps {
  error: any;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  const statusCode = error?.statusCode || 500;

  return <ErrorTemplate statusCode={statusCode} />;
}

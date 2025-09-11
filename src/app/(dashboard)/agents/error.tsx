"use client";
import { ErrorState } from "@/components/error-state";
import React from "react";

const ErrorPage = () => {
  return (
    <ErrorState
      title="Error loading Agents"
      description="Something went wrong"
    />
  );
};

export default ErrorPage;

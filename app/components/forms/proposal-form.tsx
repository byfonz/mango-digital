"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, FormProvider } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ProposalFormSchema } from "@/schemas/proposal-form";
import { Textarea } from "../ui/textarea";
import { useFormStep } from "@/hooks/useFormStep";
import { ProposalOverviewForm } from "./proposals/overview-form";
import { ProposalContextForm } from "./proposals/context-form";

const steps = [
  {
    key: 1,
    value: "overview",
    title: "Overview",
  },
  {
    key: 2,
    value: "context",
    title: "Contexto",
  },
  {
    key: 3,
    value: "objectives",
    title: "Objectives",
  },
  {
    key: 4,
    value: "strategy",
    title: "Estrategia",
  },
  {
    key: 5,
    value: "solution",
    title: "Solución",
  },
  {
    key: 6,
    value: "pricing",
    title: "Inversión",
  },
  {
    key: 7,
    value: "timeline",
    title: "Timeline",
  },
  {
    key: 8,
    value: "terms",
    title: "Terminos y Condiciones",
  },
];

export function ProposalForm() {
  const { step, goTo, next, prev } = useFormStep(steps.length);
  return (
    <div className="flex flex-col gap-4">
      <Tabs value={steps[step].value}>
        <TabsList className="overflow-x-auto whitespace-nowrap scroll-smooth">
          {steps.map((step) => (
            <TabsTrigger
              key={step.key}
              value={step.value}
              className="shrink-0"
              onClick={() => goTo(step.key)}
            >
              {step.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Steps */}
        <TabsContent value="overview">
          <ProposalOverviewForm />
        </TabsContent>
        <TabsContent value="context">
          <ProposalContextForm />
        </TabsContent>
        <TabsContent value="objectives">
          <ProposalOverviewForm />
        </TabsContent>
        {/* Navigation */}
        <div className="flex justify-between mt-4">
          <Button onClick={prev} disabled={step === 0}>
            Back
          </Button>
          {step === steps.length - 1 ? (
            <Button type="submit">Submit</Button>
          ) : (
            <Button onClick={next}>Next</Button>
          )}
        </div>
      </Tabs>
    </div>
  );
}

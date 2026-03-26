"use client";

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper";
import {
  Save,
  Send,
  CheckIcon,
  LoaderCircleIcon,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "../ui/button";

export type Step = {
  id: number;
  title: string;
  content: React.ReactNode;
};

interface Props {
  steps: Step[];
  currentStep: number;
}

export function CampaignStepper({ steps, currentStep }: Props) {

  return (
    <Stepper className="min-h-screen">
      <div className="flex items-center justify-between gap-2.5">
        <Button variant="outline" size="icon">
          <ChevronLeft />
        </Button>
        <StepperNav>
          {steps.map((step, index) => (
            <StepperItem key={index} step={index + 1}>
              <StepperTrigger className="flex justify-start gap-1.5">
                <StepperIndicator>{index + 1}</StepperIndicator>
                <StepperTitle>{step.title}</StepperTitle>
              </StepperTrigger>
              {steps.length > index + 1 && (
                <StepperSeparator className="group-data-[state=completed]/step:bg-primary md:mx-2.5" />
              )}
            </StepperItem>
          ))}
        </StepperNav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            Guardar
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon">
            Vista Previa
            <ChevronLeft />
          </Button>
        </div>
      </div>
      {/* Content */}
      <StepperPanel>
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            {step.title}
            {step.content}
          </StepperContent>
        ))}
      </StepperPanel>
      <div className="flex items-center justify-between gap-2.5">
        <Button
          variant="outline"
          onClick={() => currentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep === steps.length}
        >
          Next
        </Button>
      </div>
    </Stepper>
  );
}

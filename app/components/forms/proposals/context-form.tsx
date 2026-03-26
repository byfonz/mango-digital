import { Controller, useFormContext } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RichTextEditor } from "@/components/richText/richTextEditor";
import { Textarea } from "@/components/ui/textarea";

export function ProposalContextForm() {
  const { control } = useFormContext();

  return (
    <Card>
      <CardContent>
        <FieldGroup>
            {/* Executive Summary */}
          <Controller
            name="context.executiveSummary"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Contexto</FieldLabel>
                <RichTextEditor {...field}/>
              </Field>
            )}
          />
          {/* Objectives */}
          <Controller
            name="context.objectives"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Objetivos</FieldLabel>
                <RichTextEditor {...field}/>
              </Field>
            )}
          />
        </FieldGroup>
      </CardContent>
    </Card>
  );
}

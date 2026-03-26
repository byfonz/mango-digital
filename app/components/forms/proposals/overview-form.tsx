"use client";

import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { LucideCalendar } from "lucide-react";
import { RichTextEditor } from "@/components/richText/richTextEditor";
import { format } from "date-fns";

export function ProposalOverviewForm() {
  const { control } = useFormContext();
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <CardContent>
        <FieldGroup>
          {/* Client */}
          <Controller
            name="meta.clientName"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Cliente</FieldLabel>
                <Input {...field} />
              </Field>
            )}
          />
          {/* Project */}
          <Controller
            name="meta.project"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Nombre del Proyecto</FieldLabel>
                <Input {...field} />
              </Field>
            )}
          />
          {/* Project Description */}
          <Controller
            name="meta.date"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Fecha</FieldLabel>
                <Popover {...field}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[280px] justify-start text-left data-[empty=true]:text-muted-foreground"
                    >
                      <LucideCalendar />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Seleccionar Fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      defaultMonth={date}
                    />
                  </PopoverContent>
                </Popover>
              </Field>
            )}
          />
        </FieldGroup>
      </CardContent>
    </Card>
  );
}

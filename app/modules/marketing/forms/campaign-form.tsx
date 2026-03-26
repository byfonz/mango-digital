'use client'

import { useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CampaignFormSchema } from "@/modules/marketing/schemas/campaign";
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

export function CampaignForm() {
    const form = useForm({
        resolver: zodResolver(CampaignFormSchema),
        shouldUnregister: false,
        defaultValues:{
            meta: {
                client: '',
                project: '',
                date: new Date(),
            }
        }
    })
    return (
        <form id="campaign-form">
            {/* Meta */}
            <FieldGroup>
                {/* Client */}
                <Controller
                    name="meta.client"
                    control={form.control}
                    render={({ field, fieldState}) => (
                        <Field>
                            <FieldLabel>Cliente</FieldLabel>
                            <Input
                                {...field}
                            />
                        </Field>
                    )}
                />
                {/* Project */}
                <Controller
                    name="meta.project"
                    control={form.control}
                    render={({ field, fieldState}) => (
                        <Field>
                            <FieldLabel>Proyecto</FieldLabel>
                            <Input
                                {...field}
                            />
                        </Field>
                    )}
                />
                {/* Date */}
                <Controller
                    name="meta.date"
                    control={form.control}
                    render={({ field, fieldState}) => (
                        <Field>
                            <FieldLabel>Fecha</FieldLabel>
                            
                        </Field>
                    )}
                />
            </FieldGroup>
        </form>
    )
}
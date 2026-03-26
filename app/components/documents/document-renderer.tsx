"use client";

import { ProposalFormSchema } from "@/schemas/proposal-form";
import { z } from "zod";
import { format } from "date-fns";
import Image from "next/image";
import { SectionRenderer } from "../section-renderer";

type Props = {
  data: z.infer<typeof ProposalFormSchema>;
};

export function DocumentPreview({ data }: Props) {
  const formatDate = data.meta.date
    ? format(new Date(data.meta.date), "PPP")
    : "Fecha No Definida";
  return (
    <div className="w-full min-h-full p-10 bg-white">
      {/* Meta */}
      <div className="w-full flex px-10 py-6 items-center justify-between border-b">
        <Image
          src="/images/logo-mango-digital.png"
          alt="logo-mago-digital"
          width={120}
          height={60}
        />
        <div className="flex flex-col gap-1">
          {/* Client */}
          <div className="flex gap-1">
            <span className="text-xs font-medium">Cliente:</span>
            <span className="text-xs">
              {data.meta.clientName || "Nombre del Cliente"}
            </span>
          </div>
          {/* Project */}
          <div className="flex gap-1">
            <span className="text-xs font-medium">Proyecto:</span>
            <span className="text-xs">{data.meta.project || "Proyecto"}</span>
          </div>
          {/* Date */}
          <div className="flex flex-wrap gap-1">
            <span className="text-xs font-medium">Fecha:</span>
            <span className="text-xs">{formatDate}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 gap-6">
        {/* Introduction */}
        <div className="block gap-3">
          <p className="text-lg font-medium">Contexto</p>
          <div
            className="prose prose-sm max-w-none gap-1"
            dangerouslySetInnerHTML={{
              __html: data.context.executiveSummary || "<p>Sin Contenido</p>",
            }}
          />
        </div>
        {/* Objectives */}
        <div className="block gap-3">
          <p className="text-lg font-medium">Objetivos</p>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: data.context.objectives || "<p>Sin Contenido</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
}

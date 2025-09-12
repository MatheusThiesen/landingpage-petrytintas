"use client";

import type React from "react";

import { sendEmail } from "@/actions/send-email";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, FileText, Upload } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FormSchemaFormHiring = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(2, "Telefone é obrigatório"),
  email: z
    .string()
    .email("Informe um e-mail válido")
    .min(2, "E-mail é obrigatório"),
  role: z.string().min(2, "Informe a vaga pretendida"),
  message: z.string().optional(),
  file: z
    .custom<File>((file) => file instanceof File, {
      message: "Currículo é obrigatório",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "Apenas arquivos PDF são permitidos",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Tamanho máximo permitido é 5MB",
    }),
});

export type FormHiring = z.infer<typeof FormSchemaFormHiring>;

export function HiringForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<FormHiring>({
    resolver: zodResolver(FormSchemaFormHiring),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      file: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: FormHiring) => {
    setIsSubmitting(true);

    await sendEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      role: data.role,
      file: data.file,
    });

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      form.setValue("file", file);
      form.clearErrors("file");
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-[55vh]">
        <Card className="w-full max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-semibold text-green-700">
                Candidatura Enviada!
              </h2>
              <p className="text-gray-600">
                Obrigado por se candidatar. Analisaremos seu currículo e
                entraremos em contato em breve.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Formulário de Candidatura
        </CardTitle>
        <CardDescription className="text-center">
          Preencha os dados abaixo para se candidatar à vaga
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              placeholder="Digite seu nome completo"
              {...form.register("name")}
              className={form.formState.errors.name ? "border-red-500" : ""}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...form.register("email")}
              className={form.formState.errors.email ? "border-red-500" : ""}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          {/* Telefone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="(51)9999-9999"
              {...form.register("phone")}
              className={form.formState.errors.phone ? "border-red-500" : ""}
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-red-500">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>

          {/* Vaga */}
          <div className="space-y-2">
            <Label htmlFor="role">Vaga Pretendida *</Label>
            <Input
              id="role"
              placeholder="Ex: Atendente de balcão, Auxiliar de estoque, Estoquista"
              {...form.register("role")}
              className={form.formState.errors.role ? "border-red-500" : ""}
            />
            {form.formState.errors.role && (
              <p className="text-sm text-red-500">
                {form.formState.errors.role.message}
              </p>
            )}
          </div>

          {/* Upload de Currículo */}
          <div className="space-y-2">
            <Label htmlFor="file">Currículo (PDF) *</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <input
                id="file"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="file" className="cursor-pointer">
                {selectedFile ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FileText className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-medium text-green-700">
                        {selectedFile.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                    <p className="text-gray-600">
                      Clique para selecionar seu currículo
                    </p>
                    <p className="text-sm text-gray-400">
                      Apenas arquivos PDF até 5MB
                    </p>
                  </div>
                )}
              </label>
            </div>
            {form.formState.errors.file && (
              <p className="text-sm text-red-500">
                {form.formState.errors.file.message}
              </p>
            )}
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem (Opcional)</Label>
            <Textarea
              id="message"
              placeholder="Conte-nos um pouco sobre você e por que está interessado nesta vaga..."
              rows={4}
              {...form.register("message")}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

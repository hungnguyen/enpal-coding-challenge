"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const MyFormSchema = z.object({
    dachform: z.string(),
    dachfenster: z.string(),
    anrede: z.string(),
    name: z.string().min(1, {message: "Bitte Namen angeben."}),
    telefonnummer: z.string().min(1, {message:"Bitte Telefonnummer angeben."}),
    postleitzahl: z.string().min(1, {message:"Bitte Postleitzahl angeben."}),
    stadt: z.string().min(1, {message:"Bitte Stadt angeben."}),
    strasse: z.string().min(1, {message:"Bitte Straße angeben."}),
    hausnummer: z.string()
});

export type State = {
    errors?: {
        dachform?: string[],
        dachfenster?: string[],
        anrede?: string[],
        name?: string[],
        telefonnummer?: string[],
        postleitzahl?: string[],
        stadt?: string[],
        strasse?: string[],
        hausnummer?: string[],
    };
    message?: string | null
}

const CreateCustomer = MyFormSchema.omit({ dachform: true, dachfenster: true, anrede: true, hausnummer:true });

export async function postForm(prevState: State, formData: FormData): Promise<State>{
    const validateFields = CreateCustomer.safeParse({
        name: formData.get("name"),
        telefonnummer: formData.get("telefonnummer"),
        postleitzahl: formData.get("postleitzahl"),
        stadt: formData.get("stadt"),
        strasse: formData.get("strasse"),
        hausnummer: formData.get("hausnummer")
    });

    if(!validateFields.success){
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "Fehlende Felder. Übermittlung fehlgeschlagen"
        }
    }

    const {name,telefonnummer,postleitzahl,stadt,strasse} = validateFields.data;

    try{
        await fetch("https://65590262e93ca47020a9fce8.mockapi.io/insert",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                anrede: formData.get("anrede"),
                name,
                telefonnummer,
                postleitzahl,
                stadt,
                strasse,
                hausnummer: formData.get("hausnummer"),
                dachform:sessionStorage.getItem("dachform"),
                dachfenster:sessionStorage.getItem("dachfenster")})
        });
    }
    catch(error){
        return {
            errors: undefined,
            message: "Fehlende Felder. Übermittlung fehlgeschlagen"
        }
    }
    revalidatePath("/");
    redirect("/");
}
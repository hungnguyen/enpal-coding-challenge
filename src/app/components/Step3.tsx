import { useFormState } from "react-dom";
import { State, postForm } from "../api/form";
import RadioButton from "./RadioButton";
import TextBox from "./TextBox";
import Button from "./Button";

export default function Step3(){
    const initialState: State = {message: null, errors: {}};
    const [state, dispatch] = useFormState(postForm, initialState);
    return(
        <>
            <div className="bg-[#000D19] text-white">
                <div className=" text-center pt-5 pb-10">
                    <div className="text-md md:text-lg">Eine Solaranlage spart Ihnen ca.</div>
                    <div className="text-xl md:text-3xl mt-3">25.000 - 30.000 &euro; Stromkosten <sup>&#9432;</sup></div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="text-md font-bold md:text-xl pt-5 pb-5 md:text-center pl-3 pr-3 md:w-1/2 w-full text-dark-blue">
                    Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir senden 
                    Ihnen gerne kostenlose Informationen zu.
                </div>
                <div className="pl-3 pr-3 md:w-2/5 w-full">
                    <form action={dispatch}>
                        <div>
                            <div>Anrede</div>
                            <div id={`anrede-error`} aria-live='polite' aria-atomic="true">
                                {
                                    state.errors?.anrede &&
                                    state.errors?.anrede.map((error: string)=>(
                                        <p className='mt-2 text-sm text-red-500' key={error}>
                                            {error}
                                        </p>
                                        )
                                    )
                                }
                            </div>
                            <RadioButton name="anrede" label="Herr" aria-describedby={`anrede-error`}/>
                            <RadioButton name="anrede" label="Frau" className="ml-5" aria-describedby={`anrede-error`}/>
                        </div>
                        <div>
                            <TextBox name="name" label="Name" placeholder="Vor- und Nachname" errors={state.errors?.name} />
                        </div>
                        <div>
                            <TextBox name="telefonnummer" label="Telefonnummer" placeholder="+49 123 456 789" errors={state.errors?.telefonnummer} />
                        </div>
                        <div>
                            <TextBox name="postleitzahl" label="Postleitzahl" errors={state.errors?.postleitzahl} />
                        </div>
                        <div>
                            <TextBox name="stadt" label="Ort" errors={state.errors?.stadt} />
                        </div>
                        <div className="flex gap-3">
                            <div className="basis-3/4">
                                <TextBox name="strasse" label="Straße" placeholder="Straße" errors={state.errors?.strasse} />
                            </div>
                            <div className="basis-1/4">
                                <TextBox name="hausnummer" label="Hausnummer" placeholder="Nr." errors={state.errors?.hausnummer} />
                            </div>
                        </div>
                        <div className="mt-5 mb-3">
                            <Button type="submit" label="Ja, das ist mein Hausdach."></Button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}
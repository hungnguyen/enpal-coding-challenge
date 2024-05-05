'use client';

import RadioButton from './RadioButton';
import TextBox from './TextBox';
import Button from './Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppContext } from '../context/store';

export type Inputs = {
  anrede: string;
  name: string;
  telefonnummer: string;
  postleitzahl: string;
  stadt: string;
  strasse: string;
  hausnummer: string;
};

export default function Step3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const appContext = useAppContext();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch(
        'https://65590262e93ca47020a9fce8.mockapi.io/insert',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            dachform: appContext?.dachform,
            dachfenster: appContext?.dachfenster,
          }),
        },
      );
      console.log(await res.json());
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="bg-[#000D19] text-white">
        <div className=" pb-10 pt-5 text-center">
          <div className="text-md md:text-lg">
            Eine Solaranlage spart Ihnen ca.
          </div>
          <div className="mt-3 text-xl md:text-3xl">
            25.000 - 30.000 &euro; Stromkosten <sup>&#9432;</sup>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-md w-full pb-5 pl-3 pr-3 pt-5 font-bold text-dark-blue md:w-1/2 md:text-center md:text-xl">
          Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
          senden Ihnen gerne kostenlose Informationen zu.
        </div>
        <div className="w-full pl-3 pr-3 md:w-2/5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>Anrede</div>

              <RadioButton
                label="Herr"
                register={register}
                name="anrede"
                value="Herr"
              />
              <RadioButton
                label="Frau"
                className="ml-5"
                register={register}
                name="anrede"
                value="Frau"
              />
            </div>
            <div>
              <TextBox
                label="Name"
                placeholder="Vor- und Nachname"
                register={register}
                required={true}
                name="name"
                error={errors.name}
              />
            </div>
            <div>
              <TextBox
                label="Telefonnummer"
                placeholder="+49 123 456 789"
                register={register}
                required={true}
                name="telefonnummer"
                pattern={
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                }
                error={errors.telefonnummer}
              />
            </div>
            <div>
              <TextBox
                label="Postleitzahl"
                register={register}
                required={true}
                name="postleitzahl"
                error={errors.postleitzahl}
              />
            </div>
            <div>
              <TextBox
                label="Ort"
                register={register}
                required={true}
                name="stadt"
                error={errors.stadt}
              />
            </div>
            <div className="flex gap-3">
              <div className="basis-3/4">
                <TextBox
                  label="Straße"
                  placeholder="Straße"
                  register={register}
                  required={true}
                  name="strasse"
                  error={errors.strasse}
                />
              </div>
              <div className="basis-1/4">
                <TextBox
                  label="Hausnummer"
                  placeholder="Nr."
                  register={register}
                  name="hausnummer"
                />
              </div>
            </div>
            <div className="mb-3 mt-5">
              <Button type="submit" label="Ja, das ist mein Hausdach."></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

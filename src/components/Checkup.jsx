import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkup = ({ setResponse }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "Pak Wo",
      Pregnancies: "6",
      Glucose: "148",
      BloodPressure: "72",
      SkinThickness: "35",
      Insulin: "0",
      Height: "170",
      Weight: "90",
      DiabetesPedigreeFunction: "0.627",
      Age: "50",
    },
  });
  const onSubmit = async (data) => {
    data.Age = parseFloat(data.Age);
    data.Weight = parseFloat(data.Weight);
    data.Height = parseFloat(data.Height);
    data.Glucose = parseFloat(data.Glucose);
    data.Insulin = parseFloat(data.Insulin);
    data.Pregnancies = parseFloat(data.Pregnancies);
    data.DiabetesPedigreeFunction = parseFloat(data.DiabetesPedigreeFunction);
    data.BloodPressure = parseFloat(data.BloodPressure);
    data.SkinThickness = parseFloat(data.SkinThickness);

    console.log(data);
    try {
      const response = await axios.post(
        "https://django-rest-starter-production-ae73.up.railway.app/diabetes/",
        data,
      );
      setResponse(response.data.Data);
      console.log(response.data);
      navigate("/hasil");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="h-full min-h-screen">
      <div className="container py-24">
        <h1 className="mb-6 text-5xl font-extrabold text-web-dark">
          Lengkapi Informasi Anda
        </h1>
        <p className="font-base mb-12 max-w-2xl text-lg text-web-dark">
          Gunakan informasi yang akurat berdasarkan hasil laboratorium. Data
          yang tidak akurat akan berpengaruh terhadap hasil analisis kami.
        </p>

        <div className="w-full max-w-2xl rounded-2xl bg-web-pure p-12 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="gap-10 md:flex">
              <div className="flex-1">
                <label id="Name" className="formlabel">
                  Nama
                  <input
                    id="Name"
                    {...register("Name", {
                      required: "Isi kolom ini!",
                    })}
                    type="text"
                    placeholder="Nama"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="gap-10 md:flex">
              <div className="my-3 flex-1">
                <label id="Age" className="formlabel">
                  Umur
                  <input
                    id="Age"
                    {...register("Age", { required: "Isi kolom ini!" })}
                    type="number"
                    step="any"
                    placeholder="Umur"
                    className="forminput"
                  ></input>
                </label>

                <p>{errors.umur?.message}</p>
              </div>
            </div>

            <div className="gap-10 md:flex">
              <div className="my-3 flex-1">
                <label id="Weight" className="formlabel">
                  {"Berat Badan (kg)"}
                  <input
                    id="Weight"
                    {...register("Weight", { required: "Isi kolom ini!" })}
                    type="number"
                    step="any"
                    placeholder="Berat Badan"
                    className="forminput"
                  ></input>
                </label>
              </div>
              <div className="my-3 flex-1">
                <label id="Height" className="formlabel">
                  {"Tinggi (cm)"}
                  <input
                    id="Height"
                    {...register("Height", { required: "Isi kolom ini!" })}
                    type="number"
                    step="any"
                    placeholder="Tinggi Badan"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="gap-10 md:flex">
              <div className="my-3 flex-1">
                <label id="Glucose" className="formlabel">
                  Kadar Glukosa Tubuh
                  <input
                    id="Glucose"
                    {...register("Glucose", { required: "Isi kolom ini!" })}
                    type="number"
                    step="any"
                    placeholder="Kadar Glukosa Tubuh"
                    className="forminput"
                  ></input>
                </label>
              </div>
              <div className="my-3 flex-1">
                <label id="Insulin" className="formlabel">
                  {"Kadar Insulin Tubuh (U/ml)"}
                  <input
                    id="Insulin"
                    {...register("Insulin", { required: "Isi kolom ini!" })}
                    type="number"
                    step="any"
                    placeholder="Kadar Insulin Tubuh"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="gap-10 md:flex">
              <div className="my-3 flex-1">
                <label id="Pregnancies" className="formlabel">
                  Jumlah Kehamilan
                  <input
                    id="Pregnancies"
                    {...register("Pregnancies", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    step="any"
                    placeholder="Jumlah Kehamilan"
                    className="forminput"
                  ></input>
                </label>
              </div>

              <div className="my-3 flex-1">
                <label id="DiabetesPedigreeFunction" className="formlabel">
                  Faktor Genetik
                  <input
                    id="DiabetesPedigreeFunction"
                    {...register("DiabetesPedigreeFunction", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    step="any"
                    placeholder="Faktor Genetik"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="gap-10 md:flex">
              <div className="my-3 flex-1">
                <label id="BloodPressure" className="formlabel">
                  {"Tekanan Darah (mm/hg)"}
                  <input
                    id="BloodPressure"
                    {...register("BloodPressure", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    step="any"
                    placeholder="Tekanan Darah mmhg"
                    className="forminput"
                  ></input>
                </label>
              </div>
              <div className="my-3 flex-1">
                <label id="SkinThickness" className="formlabel">
                  {"Ketebalan Kulit (mm)"}
                  <input
                    id="SkinThickness"
                    {...register("SkinThickness", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    step="any"
                    placeholder="Ketebalan Kulit"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-2 rounded-lg bg-web-cyan px-3 py-2 text-base font-semibold text-web-pure shadow-sm hover:text-gray-100"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkup;

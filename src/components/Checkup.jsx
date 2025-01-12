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
      Name: "",
      Pregnancies: "",
      Glucose: "",
      BloodPressure: "",
      SkinThickness: "",
      Insulin: "",
      Height: "",
      Weight: "",
      DiabetesPedigreeFunction: "",
      Age: "",
    },
  });
  const onSubmit = async (data) => {
    // Convert form inputs to numeric values
    data.Age = parseFloat(data.Age);
    data.Weight = parseFloat(data.Weight);
    data.Height = parseFloat(data.Height);
    data.Glucose = parseFloat(data.Glucose);
    data.Insulin = parseFloat(data.Insulin);
    data.Pregnancies = parseFloat(data.Pregnancies);
    data.DiabetesPedigreeFunction = parseFloat(data.DiabetesPedigreeFunction);
    data.BloodPressure = parseFloat(data.BloodPressure);
    data.SkinThickness = parseFloat(data.SkinThickness);

    try {
      const response = await axios.post(
        "https://django-rest-starter-production-ae73.up.railway.app/diabetes/",
        data,
      );
      // Combine the form data with the backend response
      const combinedResponse = { ...response.data.Data, ...data };
      setResponse(combinedResponse);
      console.log(combinedResponse);
      navigate("/hasil");
    } catch (error) {
      console.error("Error fetching data from backend:", error.message);

      // Provide a default response and combine with the form data
      const defaultResponse = { Percentage: 70 };
      const combinedResponse = { ...defaultResponse, ...data };
      setResponse(combinedResponse);
      navigate("/hasil");
    }
  };

  return (
    <div className="h-full min-h-screen">
      <div className="container py-24">
        <h1 className="mb-6 text-5xl font-extrabold text-web-dark">
          Lengkapi Informasi Anda
        </h1>
        <p className="text-xl font-bold text-web-cyan">PERTHATIAN!</p>
        <p className="max-w-2xl pb-6 pt-2 text-lg">
          Saat ini server backend sedang tidak aktif. Maka hasil hanya berupa
          nilai default tanpa dari perhitungan input.
        </p>
        <p className="font-base mb-12 max-w-2xl text-lg text-web-dark">
          Gunakan informasi yang akurat berdasarkan hasil laboratorium. Data
          yang tidak akurat akan berpengaruh terhadap hasil analisis kami.
        </p>

        <div className="w-full max-w-2xl md:rounded-2xl md:bg-web-pure md:p-12 md:shadow-xl">
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

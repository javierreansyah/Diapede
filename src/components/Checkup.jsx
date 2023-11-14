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
      kelamin: "Laki-Laki",
      umur: "",
      beratBadan: "",
      tinggi: "",
      glukosa: "",
      insulin: "",
      jumlahKehamilan: "",
      faktorGenetik: "",
      tekananDarah: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const response = {
      data: data,
      percentage: 50,
    };
    setResponse(response);
    navigate("/hasil");
    // try {
    //   const response = await axios.post("your_backend_api_endpoint", data);
    //   setResponse(response.data);
    //   console.log("Response from backend:", response.data);
    //   navigate("/hasil");
    // } catch (error) {
    //   console.error("Error submitting form:", error.message);
    // }
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

        <div className="max-w-2xl rounded-2xl bg-web-pure p-12 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-10">
              <div className="flex-1">
                <label id="kelamin" className="formlabel">
                  Kelamin
                  <select
                    id="kelamin"
                    {...register("kelamin", { required: "Isi kolom ini!" })}
                    className="forminput"
                  >
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </label>

                <p>{errors.kelamin?.message}</p>
              </div>
              <div className="flex-1">
                <label id="umur" className="formlabel">
                  Umur
                  <input
                    id="umur"
                    {...register("umur", { required: "Isi kolom ini!" })}
                    type="number"
                    placeholder="Umur"
                    className="forminput"
                  ></input>
                </label>

                <p>{errors.umur?.message}</p>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="my-3 flex-1">
                <label id="beratBadan" className="formlabel">
                  Berat Badan kg
                  <input
                    id="beratBadan"
                    {...register("beratBadan", { required: "Isi kolom ini!" })}
                    type="number"
                    placeholder="Berat Badan"
                    className="forminput"
                  ></input>
                </label>
              </div>
              <div className="my-3 flex-1">
                <label id="tinggi" className="formlabel">
                  Tinggi cm
                  <input
                    id="tinggi"
                    {...register("tinggi", { required: "Isi kolom ini!" })}
                    type="number"
                    placeholder="Tinggi Badan"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="my-3 flex-1">
                <label id="glukosa" className="formlabel">
                  Kadar Glukosa Tubuh
                  <input
                    id="glukosa"
                    {...register("glukosa", { required: "Isi kolom ini!" })}
                    type="number"
                    placeholder="Kadar Glukosa Tubuh"
                    className="forminput"
                  ></input>
                </label>
              </div>
              <div className="my-3 flex-1">
                <label id="insulin" className="formlabel">
                  Kadar Insulin Tubuh
                  <input
                    id="insulin"
                    {...register("insulin", { required: "Isi kolom ini!" })}
                    type="number"
                    placeholder="Kadar Insulin Tubuh"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="my-3 flex-1">
                <label id="jumlahKehamilan" className="formlabel">
                  Jumlah Kehamilan
                  <input
                    id="jumlahKehamilan"
                    {...register("jumlahKehamilan", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    placeholder="Jumlah Kehamilan"
                    className="forminput"
                  ></input>
                </label>
              </div>

              <div className="my-3 flex-1">
                <label id="faktor Genetik" className="formlabel">
                  Faktor Genetik
                  <input
                    id="faktorGenetik"
                    {...register("faktorGenetik", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    placeholder="Faktor Genetik"
                    className="forminput"
                  ></input>
                </label>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="my-3 flex-1">
                <label id="tekananDarah" className="formlabel">
                  Tekanan Darah mm/hg
                  <input
                    id="tekananDarah"
                    {...register("tekananDarah", {
                      required: "Isi kolom ini!",
                    })}
                    type="number"
                    placeholder="Tekanan Darah mm/hg"
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

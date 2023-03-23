import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data[0].value);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form_div">
        <label htmlFor="Nombres">Nombre</label>
        <input
          className="input"
          type="text"
          name="nombres"
          placeholder="Eduardo"
          {...register("nombres")}
        />
      </div>

      <div className="form_div">
        <label htmlFor="apellido_paterno">Apellido Paterno</label>
        <input
          className="input"
          type="text"
          name="apellido_paterno"
          placeholder="Perez"
          {...register("apellido_paterno")}
        />
      </div>

      <div className="form_div">
        <label htmlFor="apellido_materno">Apellido materno </label>
        <input
          className="input"
          type="text"
          name="apellido_materno"
          placeholder="Andrade"
          {...register("apellido_materno")}
        />
      </div>

      <div className="form_div">
        <label htmlFor="Foto">Foto</label>
        <input type="image" name="foto" {...register("foto")} />
      </div>

      <div className="form_div">
        <label htmlFor="nombre">No. Telefono</label>
        <input
          className="input"
          type="tel"
          name="telefono"
          placeholder="8791780964"
          {...register("telefono")}
        />
      </div>

      <div className="form_div">
        <label htmlFor="correo">Correo electronico</label>
        <input
          className="input"
          type="email"
          name="coreo"
          placeholder="ep74469988@gmail.com"
          {...register("correo")}
        />
      </div>

      <div className="form_div">
        <label htmlFor="nota">Nota</label>
        <input
          className="input"
          type="text"
          name="nota"
          placeholder="Esta es una nota"
          {...register("nota")}
        />
      </div>

      <div>
        <input type="submit" value="Reistrar" />
      </div>
    </form>
  );
}
// export default FormularioTutor;

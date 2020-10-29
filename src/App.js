import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  // Función que tome las citas actuales y agrege la nueva
  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ]);
  }

  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario crearCita={crearCita}/>
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {citas.map(cita =>(
            <Cita  cita={cita} key={cita.id} />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;

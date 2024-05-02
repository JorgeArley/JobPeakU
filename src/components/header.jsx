import React from 'react';
import '../components/header.css';

function Header() {
  
  return (
    <div className="row border border-1 my-3 p-3 header">
      <div className="col-md-5">
        <input type="text" className='w-100 ms-4 border border-2 rounded-1' placeholder="Busca por cargo, salario, ubicación o empresa"/>
      </div>
      <div className="col-md-7 text-light d-flex justify-content-end">
        <span className="border ms-4 border-1 rounded-4 px-3 py-1 function">Area</span>
        <span className="border ms-4 border-1 rounded-4 px-3 py-1 function">Cargo</span>
        <span className="border ms-4 border-1 rounded-4 px-3 py-1 function">Salario</span>
        <span className="border ms-4 border-1 rounded-4 px-3 py-1 function">Ubicación</span>
      </div>
    </div>
  );
}

export default Header;

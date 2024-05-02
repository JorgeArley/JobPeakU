import React from 'react';
import '../components/cardJob.css';

function Jobs(props) {
  
  return (
    <div className="row border border-1 my-3 job-card p-3">
      <div className="col-md-2">
        <img className="image-job"
          src={`src/assets/images/${props.imageJob}`}
          alt="Company logo"
        />

      </div>
      <div className="col-md-10">
        <div className="col-md-12 mb-2">
          <h1 className="tittle-vacante">
            {props.tittleVacante}
          </h1>
          {
            props.skills.map((skill, index) => (
              <span key={index} className="border border-dark ms-3 px-2 rounded-5">{skill}</span>
            ))
          }
        </div>
        <div className="row">
          <div className="col-md-2">
            <p className="icon-card">
              <img src={`src/assets/images/empresa.png`} alt="Empresa" />{props.empresa}
            </p>
          </div>
          <div className="col-md-2">
            <p className="icon-card lugar">
              <img src={`src/assets/images/gps.png`} alt="Lugar" />{props.lugar}
            </p>
          </div>
          <div className="col-md-2">
            <p className="icon-card salario">
              <img src={`src/assets/images/salario.png`} alt="Salario" />{props.salario}
            </p>
          </div>
          <div className="col-md-2">
            <p className="icon-card vacantes">
              <img src={`src/assets/images/vacante.png`} alt="Vacantes" />{props.vacantes} Vacantes
            </p>
          </div>
          <div className="col-md-2">
            <p className="icon-card publicacion">
              <img src={`src/assets/images/fecha.png`} alt="Publicación" />Publicado hace {props.publicacion} días
            </p>
          </div>
          <div className="col-md-2">
            {
              props.benefits.map((skill, index) => (      
                (skill === 'certifications' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="file earmark check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-file-earmark-check b-icon bi border border-dark ms-1 p-1 fs-4 rounded-5"><g data-v-378c8849=""><path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path></g></svg>) ||
                (skill === 'partynewyear' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="emoji sunglasses" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-emoji-sunglasses b-icon bi"><g data-v-378c8849=""><path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path></g></svg>) ||
                (skill === 'trainings' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="clipboard check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-clipboard-check b-icon bi"><g data-v-378c8849=""><path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></g></svg>) ||
                (skill === 'team' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="people" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-people b-icon bi"><g data-v-378c8849=""><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></g></svg>) ||
                (skill === 'schedule' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="calendar2 plus" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-calendar2-plus b-icon bi"><g data-v-378c8849=""><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"></path></g></svg>) ||
                (skill === 'remote' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="geo alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-geo-alt b-icon bi"><g data-v-378c8849=""><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></g></svg>) ||
                (skill === 'insurance' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="lock" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-lock b-icon bi"><g data-v-378c8849=""><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path></g></svg>) ||
                (skill === 'stock' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="globe" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-globe b-icon bi"><g data-v-378c8849=""><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></g></svg>) ||
                (skill === 'schedule' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="watch" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-watch b-icon bi"><g data-v-378c8849=""><path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"></path><path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"></path></g></svg>) ||
                (skill === 'team' && <svg key={skill} data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="cash" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="border border-dark ms-1 p-1 fs-4 rounded-5 bi-cash b-icon bi"><g data-v-378c8849=""><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path></g></svg>)
              ))
            }

          </div>
        </div>

      </div>
    </div>
  );
}

export default Jobs;

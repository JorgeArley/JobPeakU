import './App.css';
import Jobs from './components/cardJob';
import Footer from './components/footer';
import Header from './components/header';
import empleos from './shared/jobs'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        {empleos.map((trabajo, index) => (
          <Jobs
            key={index}
            tittleVacante={trabajo.tittleVacante}
            imageJob={trabajo.imageJob}
            skills={trabajo.skill}
            empresa={trabajo.empresa}
            lugar={trabajo.lugar}
            salario={trabajo.salario}
            vacantes={trabajo.vacantes}
            publicacion={trabajo.publicacion}
            benefits={trabajo.benefits}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

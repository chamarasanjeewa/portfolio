import './App.css';
import { CompanyExperience } from "./components/company.experience";
import Education from "./components/education";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import {  Provider } from './context/cv.context';
import { ProjectExperience } from './components/project.experience';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Technologies as TechnologiesAndTools } from './components/technologies';
import { Blogs } from './components/blogs';

function App() {
  return (
    <Provider>
      {/* <Header></Header>
        <Summary />
        <CompanyExperience/>
        <ProjectExperience/>
        <TechnologiesAndTools/> */}
      <Education />
      {/* <Blogs/> */}
    </Provider>
  );
}

export default App;

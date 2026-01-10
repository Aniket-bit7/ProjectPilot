import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import TaskDetails from "./pages/TaskDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projectsDetail" element={<ProjectDetails />} />
          <Route path="taskDetails" element={<TaskDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Home } from "./Home";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import StepWizard, { StepWizardChildProps } from "react-step-wizard";
import { Button } from "@mui/material";
import MyForm from "./MyForm";

const StepWrapper: React.FC<Partial<StepWizardChildProps>> = ({ ...props }) => {
  const {
    previousStep,
    lastStep,
    currentStep,
    firstStep,
    isActive,
    totalSteps,
    nextStep,
  } = props;
  return (
    <>
      {props.children}
      <h2>Step {currentStep}</h2>
      <p>Total Steps: {totalSteps}</p>
      <p>Is Active: {isActive}</p>
      <Button onClick={firstStep}>First Step</Button>
      <Button onClick={previousStep}>Previous Step</Button>
      <Button onClick={nextStep}>Next Step</Button>
      <Button onClick={lastStep}>Last Step</Button>
    </>
  );
};

function Wizard() {
  return <MyForm></MyForm>;
}

function Reports() {
  return <div>Reports: {new Date().toISOString()}</div>;
}

function Integrations() {
  return <div>Integration: {new Date().toISOString()}</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="wizard" element={<Wizard />} />
        <Route path="reports" element={<Reports />} />

        <Route path="integrations" element={<Integrations />} />

        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

import React, { useState, useEffect } from "react";

import ReactTooltip from "react-tooltip";

import  { Main } from 'grommet'

import Map from "../containers/Map";
import CountryModal from "../containers/CountryModal";
import WelcomeModal from "../containers/WelcomeModal"

function App() {
  const [tooltip, setTooltip] = useState("");
  const [data, setData] = useState({});
  const [countryModal, showCountryModal] = useState(false);
  const [welcomeModal, showWelcomeModal] = useState("");

  useEffect(() => {
    fetch("/welcome.md").then((response) => {
      return response.text();
    })
    .then((data) => {
      showWelcomeModal(data)
    });

    fetch("/data.json").then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data)
    });
  }, [])

  return (
    <Main>
      <Map setTooltipContent={setTooltip} showModal={showCountryModal} data={data} />
      <ReactTooltip>{tooltip}</ReactTooltip>

      { countryModal &&
        <CountryModal closeFunction={() => showCountryModal()} data={countryModal} />
      }
      { welcomeModal &&
        <WelcomeModal closeFunction={() => showWelcomeModal()} content={welcomeModal} />
      }
    </Main>
  );
}

export default App;

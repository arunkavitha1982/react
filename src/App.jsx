import { CORE_CONCEPTS } from "./data"
import { useState } from "react"

import Header from "./components/Header.jsx"
import TabButton from "./components/TabButton.jsx"
function Core(props) {
  return (
    <li>
      <img src={props.Image} alt="" id="codeImage" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  function handleSelect(selectButton){
      console.log(selectButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <ul>
            <Core
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              Image={CORE_CONCEPTS[0].image} />

            <Core
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              Image={CORE_CONCEPTS[1].image} />

            <Core
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              Image={CORE_CONCEPTS[2].image} />
            <Core
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              Image={CORE_CONCEPTS[3].image} />
          </ul>

        </section>

        <section id="examples">
          <h2>Skills</h2>
          <menu >
            <TabButton onSelect={()=>handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>

            <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>

          </menu>
          Dynamic content
        </section>

      </main>
    </div>
  );
}

export default App;

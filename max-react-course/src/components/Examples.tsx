import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
type ExampleKey = keyof typeof EXAMPLES;

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState<ExampleKey>();
  function handleSelect(type: ExampleKey) {
    setSelectedTab(type);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
          </>
        }
      >
        {!selectedTab ? (
          <p>Please Select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}

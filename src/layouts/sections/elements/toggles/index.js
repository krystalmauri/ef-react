/*
=========================================================
* Eventflow.app React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Toggles page components
import Toggle from "../toggles/components/Toggle";
import ToggleContext from "../toggles/components/ToggleContext";

// Toggles page components code
import toggleCode from "../toggles/components/Toggle/code";
import toggleContextCode from "../toggles/components/ToggleContext/code";

function Toggles() {
  return (
    <BaseLayout
      title="Toggles"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/toggles" },
        { label: "Toggles" },
      ]}
    >
      <View title="Toggle" code={toggleCode}>
        <Toggle />
      </View>
      <View title="Toggle context" code={toggleContextCode}>
        <ToggleContext />
      </View>
    </BaseLayout>
  );
}

export default Toggles;

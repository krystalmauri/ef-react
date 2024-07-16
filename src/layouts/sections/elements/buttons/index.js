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
import BaseLayout from "../../../sections/components/BaseLayout";
import View from "../../../sections/components/View";

// Buttons page components
import ButtonsContained from "../../elements/buttons/components/ButtonsContained";
import ButtonsGradient from "../../elements/buttons/components/ButtonsGradient";
import ButtonsIconLeft from "../../elements/buttons/components/ButtonsIconLeft";
import ButtonsIconRight from "../../elements/buttons/components/ButtonsIconRight";
import ButtonsOutlined from "../../elements/buttons/components/ButtonsOutlined";
import ButtonsSizes from "../../elements/buttons/components/ButtonsSizes";

// Buttons page components code
import buttonsContainedCode from "../../elements/buttons/components/ButtonsContained/code";
import buttonsGradientCode from "../../elements/buttons/components/ButtonsGradient/code";
import buttonsIconLeftCode from "../../elements/buttons/components/ButtonsIconLeft/code";
import buttonsIconRightCode from "../../elements/buttons/components/ButtonsIconRight/code";
import buttonsOutlinedCode from "../../elements/buttons/components/ButtonsOutlined/code";
import buttonsSizesCode from "../../elements/buttons/components/ButtonsSizes/code";

function Buttons() {
  return (
    <BaseLayout
      title="Buttons"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/buttons" },
        { label: "Buttons" },
      ]}
    >
      <View title="Buttons gradient" code={buttonsGradientCode}>
        <ButtonsGradient />
      </View>
      <View title="Buttons contained" code={buttonsContainedCode}>
        <ButtonsContained />
      </View>
      <View title="Buttons outlined" code={buttonsOutlinedCode}>
        <ButtonsOutlined />
      </View>
      <View title="Buttons sizes" code={buttonsSizesCode}>
        <ButtonsSizes />
      </View>
      <View title="Buttons icon left" code={buttonsIconLeftCode}>
        <ButtonsIconLeft />
      </View>
      <View title="Buttons icon right" code={buttonsIconRightCode}>
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  );
}

export default Buttons;

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

// Inputs page components
import InputDisabled from "../inputs/components/InputDisabled";
import InputDynamic from "../inputs/components/InputDynamic";
import InputError from "../inputs/components/InputError";
import InputIcon from "../inputs/components/InputIcon";
import InputOutlined from "../inputs/components/InputOutlined";
import InputStatic from "../inputs/components/InputStatic";
import InputSuccess from "../inputs/components/InputSuccess";

// Inputs page components code
import inputDisabledCode from "../inputs/components/InputDisabled/code";
import inputDynamicCode from "../inputs/components/InputDynamic/code";
import inputErrorCode from "../inputs/components/InputError/code";
import inputIconCode from "../inputs/components/InputIcon/code";
import inputOutlinedCode from "../inputs/components/InputOutlined/code";
import inputStaticCode from "../inputs/components/InputStatic/code";
import inputSuccessCode from "../inputs/components/InputSuccess/code";

function Inputs() {
  return (
    <BaseLayout
      title="Inputs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/inputs" },
        { label: "Inputs" },
      ]}
    >
      <View title="Input dynamic" code={inputDynamicCode}>
        <InputDynamic />
      </View>
      <View title="Input static" code={inputStaticCode}>
        <InputStatic />
      </View>
      <View title="Input outlined" code={inputOutlinedCode}>
        <InputOutlined />
      </View>
      <View title="Input icon" code={inputIconCode}>
        <InputIcon />
      </View>
      <View title="Input success" code={inputSuccessCode}>
        <InputSuccess />
      </View>
      <View title="Input error" code={inputErrorCode}>
        <InputError />
      </View>
      <View title="Input disabled" code={inputDisabledCode}>
        <InputDisabled />
      </View>
    </BaseLayout>
  );
}

export default Inputs;

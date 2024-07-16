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

// Badges page components
import BadgesGradient from "../badges/components/BadgesGradient";
import BadgesSimple from "../badges/components/BadgesSimple";
import BadgesSimpleRounded from "../badges/components/BadgesSimpleRounded";

// Badges page components code
import badgesGradientCode from "../badges/components/BadgesGradient/code";
import badgesSimpleCode from "../badges/components/BadgesSimple/code";
import badgesSimpleRoundedCode from "../badges/components/BadgesSimpleRounded/code";

function Badges() {
  return (
    <BaseLayout
      title="Badges"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/badges" },
        { label: "Badges" },
      ]}
    >
      <View title="Badges gradient" code={badgesGradientCode}>
        <BadgesGradient />
      </View>
      <View title="Badges simple" code={badgesSimpleCode}>
        <BadgesSimple />
      </View>
      <View title="Badges simple rounded" code={badgesSimpleRoundedCode}>
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;

import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/model-s.jpg";
import Model3 from "./assets/model-3.jpg";
import ModelX from "./assets/model-x.jpg";
import ModelY from "./assets/model-y.jpg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/solar-roof.jpg";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_itemContainer">
        
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        
        <Item
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          descLink=""
          backgroundImage={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          descLink=""
          backgroundImage={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImage={Accessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          rightBtnTxt=""
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;

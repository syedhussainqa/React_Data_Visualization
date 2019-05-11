import React from "react";
import "../DropDown/DropDown.css";

const DropDown = props => {
  return (
    <select onChange={props.onChange} id="fifa-groups-list">
      <option value="">Select a Fifa Group from the dropdown</option>
      <option value="GROUP_A">
        GroupA ( Uruguay, Russia, Saudi Arabia, Egypt )
      </option>
      <option value="GROUP_B">GroupB ( Spain, Portugal, Iran, Morocco )</option>
      <option value="GROUP_C">
        GroupC ( France, Portugal, Peru, Australia )
      </option>
      <option value="GROUP_D">
        GroupD ( Croatia, Argentina, Nigeria, Iceland )
      </option>
      <option value="GROUP_E">
        GroupE ( Brazil, Switzerland, Serbia, Costa Rica )
      </option>
      <option value="GROUP_F">
        GroupF ( Sweden, Mexico, Korea Republic, Germany )
      </option>
      <option value="GROUP_G">
        GroupG ( Belgium, England, Tunisia, Panama )
      </option>
      <option value="GROUP_H">
        GroupH ( Colombia, Japan, Senegal, Poland )
      </option>
    </select>
  );
};

export default DropDown;

import React from "react";

//components
import CallToAction from "../components/CallToAction";
import Location from "../components/Location";

const Locations = () => {
  return (
    <div className="space-y-20">
      <Location
        desktop="/assets/locations/desktop/image-map-canada.png"
        tablet="/assets/locations/tablet/image-map-canada.png"
        title="canada"
        office="Designo Central Office"
        street="3886 Wellington Street"
        address="Toronto, Ontario M9C 3J5"
        phone="P : +1 253-863-8967"
        mail="M : contact@designo.co"
        invert
        top
      />

      <Location
        desktop="/assets/locations/desktop/image-map-australia.png"
        tablet="/assets/locations/tablet/image-map-australia.png"
        title="australia"
        office="Designo AU Office"
        street="19 Balonne Street"
        address="New South Wales 2443"
        phone=" P : (02) 6720 9092"
        mail="M : contact@designo.au"
        left
      />

      <Location
        desktop="/assets/locations/desktop/image-map-united-kingdom.png"
        tablet="/assets/locations/tablet/image-map-uk.png"
        title="united kingdom"
        office="Designo UK Office"
        street="13 Colorado Way"
        address="Rhyd-y-fro SA8 9GA"
        phone="P : 078 3115 1400"
        mail="M : contact@designo.uk"
        invert
        bottom
      />

      <CallToAction />
    </div>
  );
};

export default Locations;

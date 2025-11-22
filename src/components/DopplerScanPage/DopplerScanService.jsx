import React from "react";
import PathologyServiceCard from "../PathologyPage/PathologyService/PathologyServiceCard";

const DopplerScanService = () => {
  return (
    <div className="pathologyService">
      <PathologyServiceCard
        head="Color Doppler Scan"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png"
        para="Pathacon Diagnostics in Bangalore offers advanced Color Doppler scans, using the latest technology to visualize blood flow in the heart, brain, and other vital organs for accurate results."
      />
      <PathologyServiceCard
        head="Power Doppler Scan"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png"
        para="The Power Doppler scan in Bangalore is a more sensitive type of scan that provides detailed images of blood flow in vessels that may be difficult to detect using other techniques. It is especially useful for evaluating blood flow in smaller or deeper vessels."
      />
      <PathologyServiceCard
        head="Duplex Doppler Scan"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png"
        para="This type of Doppler scan in Bangalore combines traditional ultrasound imaging with Doppler technology, allowing for a more comprehensive view of the blood flow and structure of the vessels. It is often used to assess the health of veins and arteries in the arms, legs, and neck."
      />

      <PathologyServiceCard
        head="Continuous Wave Doppler Scan"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png"
        para="A Continuous Wave Doppler scan in Bangalore is typically used to measure very fast blood flow, particularly in the case of cardiac issues. It can help identify conditions like valve defects and heart murmurs."
      />
    </div>
  );
};

export default DopplerScanService;

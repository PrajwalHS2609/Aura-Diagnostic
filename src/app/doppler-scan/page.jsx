import DopplerScanFooterContent from "../../components/ServicePages/DopplerScanPage/DopplerScanContent/DopplerScanFooterContent";
import DopplerScanHeaderContent from "../../components/ServicePages/DopplerScanPage/DopplerScanContent/DopplerScanHeaderContent";
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import Reviews from "../../components/HomePage/Reviews/Reviews";
import ServiceHeader from './../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from './../../components/ServiceComponents/ServiceMap/ServiceMap';
import doppler from "../../Images/ServicesBanner/Doppler.png";
export default function DopplerPage() {
  return (
    <div>
      <ServiceHeader
        title="Doppler Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={doppler}
      />
      <DopplerScanHeaderContent />
      <HomeCerti />
      <HomeWhy />
      <ServiceMap />
      <Reviews />
      <DopplerScanFooterContent />
    </div>
  );
}

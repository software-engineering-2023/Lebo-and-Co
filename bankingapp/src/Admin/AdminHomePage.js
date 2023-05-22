
import ButtonCard from '../Components/ButtonCard';
import {  FaWpforms } from 'react-icons/fa';
import {GrUserManager} from 'react-icons/gr';
import { TbReportSearch} from 'react-icons/tb';
import MenuBar from "../Components/MenuBar";
import useNavigation from '../hooks/use-navigation';
import Footer from '../Components/Footer';
import ImageSlider from '../Components/ImageSlider';

function AdminHomePage() {
    const { navigate } = useNavigation();

    const handleReportsClick = () => {
        navigate('/Reports');
      };

    const handleManageAccountsClick = () => {
        navigate('/ManageAccounts');
      };

    const handleViewApplicationsClick = () => {
        navigate('/ViewApplications');
      }; 

      return(
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col">
        <MenuBar />
  
  <div className="flex flex-1 flex-col items-center justify-center">
    
       
      

   

      <div className="flex justify-center ">
        <ButtonCard title="ManageAccounts" icon={GrUserManager} onClick={handleManageAccountsClick}Adminhomepage />
        <ButtonCard title="Reports" icon={TbReportSearch} onClick={handleReportsClick}Adminhomepage />
        <ButtonCard title="ViewApplications" icon={FaWpforms} onClick={handleViewApplicationsClick}  Adminhomepage/>
      </div>
    
  </div>

      </div>
      );
}
export default AdminHomePage;
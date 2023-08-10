import Navbar from './components/Navbar';
import HealthBlog from './components/HealthBlog';
import MaintenancePage from './components/Maintenance';

const HealthLibrary = () => {
    return (  
        <div>
            <Navbar/>
            <div>
               <MaintenancePage/>
            </div>
        </div>
    );
}
 
export default HealthLibrary;
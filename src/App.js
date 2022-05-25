import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./css/style.css";
import Signup from './pages/Staff/GuestSignup';
import Home from './pages/Home';
import Login from './pages/Login';
import FoodDelivery from './pages/FoodDelivery';
import FoodDeliveryView from './pages/FoodDeliveryView';
import RoomCleaning from './pages/RoomCleaning';
import RoomCleaningView from './pages/RoomCleaningView';
import RoomMaintenance from './pages/RoomMaintenance';
import AmenitiesRequest from './pages/AmenitiesRequest';
import Transportation from './pages/Transportation';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import Feedback from './pages/Feedback';
import StaffLogin from './pages/Staff/StaffLogin';
import StaffHome from './pages/Staff/StaffHome';
import StaffFoodDelivery from './pages/Staff/StaffFoodDelivery';
import StaffAmenitiesRequest from './pages/Staff/StaffAmenitiesRequest';
import StaffRoomMaintenance from './pages/Staff/StaffRoomMaintenance';
import StaffRoomCleaning from './pages/Staff/StaffRoomCleaning';
import StaffTransportation from './pages/Staff/StaffTransportation';
import StaffFoodDeliveryView from './pages/Staff/StaffFoodDeliveryView';
import StaffFoodDeliveryUpdate from './pages/Staff/StaffFoodDeliveryUpdate';
import AmenitiesRequestView from './pages/AmenitiesRequestView';
import TransportView from './pages/TransportView';
import MaintenanceView from './pages/MaintenanceView';
import StaffAmenitiesRequestView from './pages/Staff/StaffAmenitiesRequestView'
import StaffAmenitiesRequestUpdate from './pages/Staff/StaffAmenitiesRequestUpdate'
import StaffRoomMaintenanceView from './pages/Staff/StaffRoomMaintenanceView'
import StaffRoomMaintenanceUpdate from './pages/Staff/StaffRoomMaintenanceUpdate';
import StaffRoomCleaningView from './pages/Staff/StaffRoomCleaningView';
import StaffRoomCleaningUpdate from './pages/Staff/StaffRoomCleaningUpdate';
import StaffTransportationView from './pages/Staff/StaffTransportationView';
import StaffTransportUpdate from './pages/Staff/StaffTransportUpdate';
import StaffGuestFeedback from './pages/Staff/StaffGuestFeedback';
import StaffGuestFeedbackView from './pages/Staff/StaffGuestFeedbackView';
import Facilities from './pages/Facilities';
import Gym from './pages/Gym';
import SwimmingPool from './pages/SwimmingPool';
import Restaurant from './pages/Restaurant';
import Auditorium from './pages/Auditorium';
import Bar from './pages/Bar';
import Lounge from './pages/Lounge';


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/staff-home/guest-signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/staff-login" component={StaffLogin} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/food-delivery" component={FoodDelivery} />
              <PrivateRoute exact path="/facilities" component={Facilities} />
              <PrivateRoute exact path="/facilities/gym" component={Gym} />
              <PrivateRoute exact path="/facilities/swimming-pool" component={SwimmingPool} />
              <PrivateRoute exact path="/facilities/restaurant" component={Restaurant} />
              <PrivateRoute exact path="/facilities/auditorium" component={Auditorium} />
              <PrivateRoute exact path="/facilities/bar" component={Bar} />
              <PrivateRoute exact path="/facilities/lounge" component={Lounge} />
              <PrivateRoute exact path="/food-delivery/details/:id" component={FoodDeliveryView} />
              <PrivateRoute exact path="/room-cleaning" component={RoomCleaning} />
              <PrivateRoute exact path="/room-cleaning/details/:id" component={RoomCleaningView} />
              <PrivateRoute exact path="/room-maintenance" component={RoomMaintenance} />
              <PrivateRoute exact path="/room-maintenance/details/:id" component={MaintenanceView} />
              <PrivateRoute exact path="/amenities-request" component={AmenitiesRequest} />
              <PrivateRoute exact path="/amenities-request/details/:id" component={AmenitiesRequestView} />
              <PrivateRoute exact path="/transportation" component={Transportation} />
              <PrivateRoute exact path="/transportation/details/:id" component={TransportView} />
              <PrivateRoute exact path="/feedback" component={Feedback} />
              <PrivateRoute exact path="/staff-home" component={StaffHome} />
              <PrivateRoute exact path="/staff-home/food-delivery" component={StaffFoodDelivery} />
              <PrivateRoute exact path="/staff-home/food-delivery/details/:id" component={StaffFoodDeliveryView} />
              <PrivateRoute exact path="/staff-home/food-delivery/update/:id" component={StaffFoodDeliveryUpdate} />
              <PrivateRoute exact path="/staff-home/amenities-request" component={StaffAmenitiesRequest} />
              <PrivateRoute exact path="/staff-home/amenities-request/details/:id" component={StaffAmenitiesRequestView} />
              <PrivateRoute exact path="/staff-home/amenities-request/update/:id" component={StaffAmenitiesRequestUpdate} />
              <PrivateRoute exact path="/staff-home/room-maintenance/details/:id" component={StaffRoomMaintenanceView} />
              <PrivateRoute exact path="/staff-home/room-maintenance/update/:id" component={StaffRoomMaintenanceUpdate} />
              <PrivateRoute exact path="/staff-home/room-maintenance" component={StaffRoomMaintenance} />
              <PrivateRoute exact path="/staff-home/room-cleaning" component={StaffRoomCleaning} />
              <PrivateRoute exact path="/staff-home/room-cleaning/details/:id" component={StaffRoomCleaningView} />
              <PrivateRoute exact path="/staff-home/room-cleaning/update/:id" component={StaffRoomCleaningUpdate} />
              <PrivateRoute exact path="/staff-home/transportation" component={StaffTransportation} />
              <PrivateRoute exact path="/staff-home/transportation/details/:id" component={StaffTransportationView} />
              <PrivateRoute exact path="/staff-home/transportation/update/:id" component={StaffTransportUpdate} />
              <PrivateRoute exact path="/staff-home/guest-feedback" component={StaffGuestFeedback} />
              <PrivateRoute exact path="/staff-home/guest-feedback/details/:id" component={StaffGuestFeedbackView} />
            </Switch>
          
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;

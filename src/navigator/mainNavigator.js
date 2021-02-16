import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps205668Navigator from '../features/Maps205668/navigator';
import Additem205667Navigator from '../features/Additem205667/navigator';
import Maps205663Navigator from '../features/Maps205663/navigator';
import UserProfile205659Navigator from '../features/UserProfile205659/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps205668: { screen: Maps205668Navigator },
Additem205667: { screen: Additem205667Navigator },
Maps205663: { screen: Maps205663Navigator },
UserProfile205659: { screen: UserProfile205659Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

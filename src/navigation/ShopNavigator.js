import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import ProductsOverviewScreen from '../screen/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator({

    ProductsOverview: ProductsOverviewScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primary
            // Platform.OS ==='android' ? Colors.primary : ''
        },
        headerTintColor:'white'
        // Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)

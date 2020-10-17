import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tabRoutes';

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}

export default Routes;
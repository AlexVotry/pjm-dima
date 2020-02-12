import React from 'react';

import withRoot from './withRoot';
import WebMapView from './components/WebMapView';
import Menu from './components/Menu/Menu';
import { EsriProvider } from './contexts/Esri';

const App = () => {
    return (
        <EsriProvider>
            <Menu />
            <WebMapView />
        </EsriProvider>
    );
};

export default withRoot(App);

import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { WebMapView } from './components/WebMapView';
import { EsriProvider } from './contexts/Esri';

import { title } from './config';

ReactDOM.render(
    <EsriProvider>
        <Header appTitle={title} />
        <WebMapView />
    </EsriProvider>,
    document.getElementById('root'),
);

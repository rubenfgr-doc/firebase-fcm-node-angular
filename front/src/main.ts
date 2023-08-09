import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD9CxihmhjZYx7coxsRvjNY1WOUCumJGDU',
  authDomain: 'push-notifications-96ab3.firebaseapp.com',
  projectId: 'push-notifications-96ab3',
  storageBucket: 'push-notifications-96ab3.appspot.com',
  messagingSenderId: '265925964312',
  appId: '1:265925964312:web:e05d6f5246c1d9eb5a496d',
  measurementId: 'G-QBJE50HT2H',
};

initializeApp(firebaseConfig);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

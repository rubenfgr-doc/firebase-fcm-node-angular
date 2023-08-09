import { Component, OnInit } from '@angular/core';
import {
  getMessaging,
  getToken,
  onMessage,
  Messaging,
} from '@firebase/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FCM Received Message';
  payload = {};
  token = '';

  ngOnInit(): void {
    const messaging: Messaging = getMessaging();

    getToken(messaging, {
      vapidKey:
        'BAaTt4I12tsLSyl11S8hENePANoCp8FfzrjaPhczENU6Gnv9ZScgzOJPuy_-GwpbCogEg5ZxkEQLSzeOzVIckx8',
    })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log('currentToken: ', currentToken);
          this.token = currentToken;
        } else {
          // Show permission request UI
          console.log(
            'No registration token available. Request permission to generate one.'
          );
          // ...
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });

    onMessage(messaging, (payload) => {
      console.log('Message received (foreground): ', payload);
      this.payload = payload;
    });
  }
}

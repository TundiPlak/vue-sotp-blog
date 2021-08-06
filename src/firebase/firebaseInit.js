
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCXJ4l-o-s3I5OrpDnYnwAoGoYbRmEtB68",
    authDomain: "vueblogproject-ca7f7.firebaseapp.com",
    projectId: "vueblogproject-ca7f7",
    storageBucket: "vueblogproject-ca7f7.appspot.com",
    messagingSenderId: "491301363197",
    appId: "1:491301363197:web:4522a82a4d93da8da3cd94"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();
 

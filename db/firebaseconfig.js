const firebaseconfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_apikey,
  authDomain: process.env.NEXT_PUBLIC_FB_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_FB_databaseURL,
  projectId: process.env.NEXT_PUBLIC_FB_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FB_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FB_appId,
  measurementId: process.env.NEXT_PUBLIC_FB_measurementId,
};

export { firebaseconfig };

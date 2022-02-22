const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        apiKey: "AIzaSyA844ahyDhdGrVAHtqo9Y4RkCPmDXs5Hc4",
        authDomain: "mravka-zanimavka.firebaseapp.com",
        databaseURL: "https://mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "mravka-zanimavka",
        storageBucket: "mravka-zanimavka.appspot.com",
        messagingSenderId: "90942997330",
        appId: "1:90942997330:web:d37f6836e9010bb6a6308b",
        currentDatabase: "lessons",
      },
      reactStrictMode: true,
      images: {
        domains: ['localhost', 'res.cloudinary.com', 'upload.wikimedia.org', 'wikipedia.org'],
      }
    }
  }

  return {
    env: {
      mainDatabaseApp: "mravka-zanimavka-default-rtdb.europe-west1.firebasedatabase.app",
      currentDatabase: "lessons-production"
    },
    reactStrictMode: true,
      images: {
        domains: ['localhost', 'res.cloudinary.com', 'upload.wikimedia.org', 'wikipedia.org'],
      }
  }
}

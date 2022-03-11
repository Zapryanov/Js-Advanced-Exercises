const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        currentDatabase: process.env.currentDatabase,
        currentChineseDatabase: process.env.currentChineseDatabase,
        currentEnglishDatabase: process.env.currentEnglishDatabase,
        lat: process.env.lat,
        lng: process.env.lng,
        bootstrapURLKeys: process.env.bootstrapURLKeys
      },
      reactStrictMode: true,
      images: {
        domains: ['localhost', 'res.cloudinary.com', 'upload.wikimedia.org', 'wikipedia.org'],
      }
    }
  }

  return {
    env: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      currentDatabase: process.env.currentDatabase,
      currentChineseDatabase: process.env.currentChineseDatabase,
      currentEnglishDatabase: process.env.currentEnglishDatabase,
      lat: process.env.lat,
      lng: process.env.lng,
      bootstrapURLKeys: process.env.bootstrapURLKeys,
      mainDatabaseApp: process.env.mainDatabaseApp,
      // currentDatabase: "lessons-production"
    },
    reactStrictMode: true,
      images: {
        domains: ['localhost', 'res.cloudinary.com', 'upload.wikimedia.org', 'wikipedia.org'],
      }
  }
}

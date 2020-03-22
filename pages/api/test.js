const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID
  });
}
export default async (req, res) => {
    var db = firebase.firestore()
    var error=""
    var fbOut=[]
    try {
        const snapshot = await db.doc('tabelline-log/gab-file').get()
        var data=snapshot.data()
        console.log(data)
    }
    catch(err) {
        console.log('Error getting documents', err);
    }

    const {query: {pid}, } = req
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({firebaseQuery:`${data}`, name: `test-query: ${JSON.stringify(req.query)}`, environment:`${process.env.customSecret}`, environmentEnv:`${process.env.FIREBASE_API_KEY}` }))
  }
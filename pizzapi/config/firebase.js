const { intializedApp, cert } = require('../firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./credentials.json');

intializedApp({
    credential: cert(serviceAccount),
})

const db = getFirestore();

module.exports = { db }
const e = require('express');
const { auth } = require('../config/firebase');

const requireAuth = (req, res, next) => {
    const sessionCookie = req.session?.firebaseToken;

    if (!sessionCookie) {
        return res.status(401).json({
            error: 'auth/unauthorized',
            message: 'You need to be logged in.'
        });
    }

    auth.verifySessionCookie(sessionCookie, true)
        .then((data) => {
            req.user = data;
            console.log(`User authenticated: ${req.user.email} with role ${req.user.admin}`);
            
            if (req.user.admin) {
                next();
            } else {
                return res.status(403).json({
                    error: 'auth/forbidden',
                    message: 'You don\'t have permission to perform this action.'
                });
            }
        })
        .catch(() => {
            return res.status(401).json({
                error: 'auth/invalid-session',
                message: 'Token expired.'
            });
        });
};

module.exports = { requireAuth };

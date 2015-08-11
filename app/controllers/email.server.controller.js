'use strict';

/**
 * Module dependencies.
 */
var sendgrid = require('sendgrid')('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');

/**
 * Create a Email
 */
exports.create = function(req, res) {
    console.log(req.body);
    var email = new sendgrid.Email({
        to: 'juliocolomer@gmail.com',
        from: req.body.email,
        subject: 'Volunteer Sign-up',
        text: req.body.message
    });

    sendgrid.send(email, function(err, json) {
        if (err) {
            return res.status(400).send('Error');
        }
        return res.status(200).send('Success');
    });
};

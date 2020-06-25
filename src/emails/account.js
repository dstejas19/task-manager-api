const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tejas@live.in',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tejas@live.in',
        subject: 'Goodbye',
        text: `We are sorry, ${name} you're deleting. Is there anyway we could have helped you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
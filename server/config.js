import { Meteor } from 'meteor/meteor';

Accounts.emailTemplates.siteName = "Meteor Guide Todos Example";
Accounts.emailTemplates.from = "Meteor Todos Accounts <13412133311@139.com>";

Accounts.emailTemplates.resetPassword = {
  subject(user) {
    return "Reset your password on Meteor Todos";
  },
  text(user, url) {

    var url = url.replace('#/','');

    return `Hello!
      Click the link below to reset your password on Meteor Todos.
      ${url}
      If you didn't request this email, please ignore it.
      Thanks,
      The Meteor Todos team
      `
  },
  html(user, url) {
    // This is where HTML email content would go.
    // See the section about html emails below.
  }
};

Meteor.startup(() => {
  // code to run on server at startup

  smtp = {
      username: '13412133311@139.com',
      password: 'lovemomo..568',
      server:   'smtp.139.com',
      port: 465
    }

  process.env.MAIL_URL = 'smtp://' +
  encodeURIComponent(smtp.username) + ':' +
  encodeURIComponent(smtp.password) + '@' +
  encodeURIComponent(smtp.server) + ':' + smtp.port;
  console.log('email url = ', process.env.MAIL_URL);
});

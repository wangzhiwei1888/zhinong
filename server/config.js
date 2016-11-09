import { Meteor } from 'meteor/meteor';

Accounts.emailTemplates.siteName = "Make crop protection more intelligent!";
Accounts.emailTemplates.from = "Copyright Accounts <13412133311@139.com>";

Accounts.emailTemplates.resetPassword = {
  subject(user) {
    return "Reset your password on Meteor Todos";
  },
  text(user, url) {
    console.log('user', user);
    console.log('url', url);

    return `Hello!
      Click the link below to reset your password on Meteor Todos.
      ${url}
      If you didn't request this email, please ignore it.
      Thanks,
      Make crop protection more intelligent team
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

if (Meteor.isServer) {
  Meteor.startup(function() {
    process.env.MAIL_URL = 'smtp://sandboxid.mailgun.org:mypassword@smtp.mailgun.org:587';
    // PrettyEmail.options = {
    //   from: 'primaryemail@gmail.com',
    //   siteName: 'Meteor Test',
    //   companyAddress: 'sdfsf, gdfg-df',
    //   companyName: 'Code to Create',
    //   companyUrl: 'http://example.com'
    // };
    // return Accounts.sendVerificationEmail(this.userId);
    PrettyEmail.options = {
      from: 'support@mycompany.com',
      logoUrl: 'http://mycompany.com/logo.png',
      companyName: 'myCompany',
      companyUrl: 'http://mycompany.com',
      companyAddress: '123 Street, ZipCode, City, Country',
      companyTelephone: '+1234567890',
      companyEmail: 'support@mycompany.com',
      siteName: 'mycompany'
    };
  });
}

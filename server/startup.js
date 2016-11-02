if (Meteor.isServer) {
  Meteor.startup(function() {
    // process.env.MAIL_URL = 'smtp://douhengshan.sharry@gmail.com:lovemomo..568@smtp.gmail.com:465';
    // process.env.MAIL_URL = 'smtp://dhs@maodou.io:Maodou2016@smtp.exmail.qq.com:465';

    smtp = {
        username: '13412133311@139.com',
        password: 'lovemomo..568',
        server:   'smtp.139.com',
        port: 465
      }

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

    // PrettyEmail.options = {
    //   from: 'support@mycompany.com',
    //   logoUrl: 'http://mycompany.com/logo.png',
    //   companyName: 'myCompany',
    //   companyUrl: 'http://mycompany.com',
    //   companyAddress: '123 Street, ZipCode, City, Country',
    //   companyTelephone: '+1234567890',
    //   companyEmail: 'support@mycompany.com',
    //   siteName: 'mycompany'
    // };
  });
}

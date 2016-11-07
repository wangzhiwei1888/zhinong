Router.route('/s3test', {
  template: 's3_tester',
  path: '/s3test',
  subscriptions: function () {
    // console.log('welcome userId ss', Meteor.userId());
    // return Meteor.subscribe('welcomeInfo', Meteor.userId());
  }
});

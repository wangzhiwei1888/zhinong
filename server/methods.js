Meteor.methods({
  resetPsdWithEmail: function(email){
    var user = Accounts.findUserByEmail(email);
    var userId = user._id;
    console.log('server userId', userId);
    Accounts.sendResetPasswordEmail(userId);
  }
});

Meteor.methods({
  sendVerificationLink: function () {
    let userId = Meteor.userId();
    console.log('userId', userId);
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  },
  insertPest: function (options) {
    pest.insert({situationId: options.situationId, userId: options.userId, pestName: options.name,
      pestType:  options.type, Leavrs: options.Leavrs,Flowers: options.Flowers, Root: options.Root,
      Insects: options.Insects, Eggs: options.Eggs, Desease: options.Desease});
  }
});

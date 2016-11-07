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
  },
  pestnewtest: function (options) {
    var haspest = pest.findOne({situationId: options.situationId, userId: options.userId, pestName: options.name,
      pestType:  options.type});
    if (haspest) {
      pest.update({_id: haspest._id}, {$addToSet: { Images: options.src}});
      return haspest._id;
    }else {
      pest.insert({situationId: options.situationId, userId: options.userId, pestName: options.name,
        pestType:  options.type, Images: [options.src]});
      return pest.findOne({situationId: options.situationId, userId: options.userId, pestName: options.name,
        pestType:  options.type})._id;
    }
  },
  situationnewtest: function (options) {
    var hassituation = situation.findOne({userId: options.userId, cropName: options.name});
    if (hassituation) {
      situation.update({_id: hassituation._id}, {$addToSet: { Images: options.src}});
      return hassituation._id;
    }else {
      situation.insert({userId: options.userId, cropName: options.name, Images: [options.src]});
      return situation.findOne({userId: options.userId, cropName: options.name})._id;
    }
  }
});

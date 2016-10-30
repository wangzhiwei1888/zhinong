Accounts.onCreateUser(function(options, user) {

  console.log('--- onCreateUser ---');
  console.log('options is', options);
  console.log('user is', user);
  console.log('user id is', user._id);
  return user;


  // Ensure that option or user exists
  if (!options || !user) {
    console.log('error createing user');
    return;
  } else {
    // If option has a profile, then pass it to user.profile
    if (options.profile) {
      user.profile = options.profile;
    }
  }
  user.profile = {};
  user.profile.nickname = user.username;
  user.profile.country = '中国';
  user.profile.headimgurl = 'http://7xojrr.com1.z0.glb.clouddn.com/genericUser.png';
  return user;
});

Accounts.registerLoginHandler(function(loginRequest) {

  // loginRequest 包含当前这个要使用微信登录的这个用户的信息。nickname、openid
  // console.log("**********************registerLoginHandler loginRequest :", loginRequest);

  var openid = loginRequest.username;
  // console.log('+++++++++++++++++++++==registerLoginHandler openid is ', openid);
  if(!openid) {
    return undefined;
  }

  // console.log('**********************return undefined already');

  //we create a admin user if not exists, and get the userId
  var userId = null;
  var user = Meteor.users.findOne({username: openid});

  // console.log('**********************user is ', user);
  if(!user) {
    // console.log('**********************no user loginRequest is ', loginRequest);
    userId = Meteor.users.insert(loginRequest);
    // console.log('**********************userId is ', userId);
  } else {
    userId = user._id;
  }

  //send loggedin user's user id
  return {
    userId: userId
  };
});

Accounts.onLogin(function(user){
  console.log('--- onLogin ---');
  console.log('server use is', user);
});

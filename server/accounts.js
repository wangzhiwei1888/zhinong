Accounts.onCreateUser(function(options, user) {

  console.log('--- onCreateUser ---');
  console.log('options is', options);
  console.log('options.profile is', options.profile);
  console.log('user id is', user._id);

  // Ensure that option or user exists
  if (!options || !user) {
    console.log('error createing user');
    return;
  } else {
    console.log('&*&*&*&*profile&*&*&*&*&*&*&*');
    // If option has a profile, then pass it to user.profile
    if (options.profile) {
      console.log('profile&*&*&*&*&*&*&*');
      user.profile = options.profile;
      user.profile.headimgurl = 'http://7xojrr.com1.z0.glb.clouddn.com/genericUser.png';
    }
  }
  return user;
});

Accounts.onLogin(function(user){
  console.log('--- onLogin ---');
  // console.log('server use is', user);
});

Template.header.events({
  "click .logOut": function(event, template){
    console.log('asdfasd');
     Meteor.logout();
  },
  "click .Algro": function(event, template){
    
    $('document,body').animate({scrollTop: '719px'}, 800);
  },
  "click .list .pub": function(event, template){
    
    $('document,body').scrollTop(0);
  }
});

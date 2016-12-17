Template.header.events({
  "click .logOut": function(event, template){
    console.log('asdfasd');
     Meteor.logout();
  },
  "click .Algro": function(event, template){
    
    var windowHeight = ($(window).height()-80) + 'px';
    $('document,body').animate({scrollTop: windowHeight}, 800);
  },
  "click .list .pub": function(event, template){
    
    $('document,body').scrollTop(0);
  }
});

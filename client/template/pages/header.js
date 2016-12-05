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
  },
  "click #about": function(event, template){
    window.location.href='/about';
  },
  "click #Demo": function(event, template){
    window.location.href='/reg';
  },
  "click #Algro": function(event, template){
    window.location.href='/#anchor2';
  },
  "click #Date": function(event, template){
    window.location.href='/date';
  },
  "click #Sign": function(event, template){
    window.location.href='/reg';
  },
  "click #Login": function(event, template){
    window.location.href='/login';
  },
});

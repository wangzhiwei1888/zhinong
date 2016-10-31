
Router.map(function() {
  this.route('situationnew', {
    path: '/date',
    template: 'situationNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    },
    onBeforeAction: function() {
      if (!Meteor.userId()) {
        this.render('reg');
      } else {
        this.next();
      }
    },
  });
  this.route('summarynew', {
    path: '/summarynew',
    template: 'summaryNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });

});

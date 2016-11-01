
Router.map(function() {
  this.route('situationnew', {
    path: '/date',
    template: 'situationNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    },
    onBeforeAction: function() {
      if (Meteor.userId()) {
        // this.render('reg');
        this.next();
      } else {
        Router.go("/reg");
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
  this.route('pestnew', {
    // path: '/pestnew/:_id',
    path: '/pestnew',
    template: 'pestNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
  this.route('solutionnew', {
    // path: '/solutionnew/:_id',
    path: '/solutionnew',
    template: 'solutionNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
});

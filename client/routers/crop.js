
Router.map(function() {
  this.route('situationnew', {
    path: '/date',
    template: 'situationNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
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

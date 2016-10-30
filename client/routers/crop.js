
Router.map(function() {
  this.route('situationnew', {
    path: '/date',
    template: 'situationNew',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });

});

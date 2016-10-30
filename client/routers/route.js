Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'index',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' },
  }
});

Router.map(function() {
  this.route('index', {
    path: '/',
    template: 'index',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
  this.route('about', {
    path: '/about',
    template: 'about',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
  this.route('article', {
    path: '/article',
    template: 'article',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
  this.route('login', {
    path: '/login',
    template: 'login',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });this.route('privacy', {
    path: '/privacy',
    template: 'privacy',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });this.route('reg', {
    path: '/reg',
    template: 'reg',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });this.route('reset', {
    path: '/reset',
    template: 'reset',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });this.route('test', {
    path: '/test',
    template: 'test',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });this.route('test1', {
    path: '/test1',
    template: 'test1',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
});

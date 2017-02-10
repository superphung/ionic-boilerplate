angular
  .module('Superphung', [])
  .component('superphung', {
    template: `
      <div>superphung</div>
    `,
    controller: class {
      constructor() {
        console.log('init constructor');
      }
    }
  });


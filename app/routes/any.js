import Route from '@ember/routing/route';


export default Route.extend({
  model(params) {
    return this.store.findRecord('page', 1)
  },
  renderTemplate(controller, model) {
    switch(model.get("pageType")) {
      case "informationpage":
        this.render('information');
        break;
      case "articlepage":
        this.render('article');
        break;
      default:
        this._super(...arguments);
    }
  }
});

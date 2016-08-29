const http = require('superagent');

export default {
  addRecipe(data) {
    http.post('http://localhost:4000/recipes/')
        .send(data)
        .end((err, res) => {
          console.log(err, res);
        });
  },
};

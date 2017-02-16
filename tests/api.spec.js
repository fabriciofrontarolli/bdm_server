var request = require("request");

var base_url = "http://localhost:3001/api/donors"

describe("Blood Donor Management API", function() {

  describe("Donors", function() {

    it("add a new donor when posted", function(done) {

      request({
        url: base_url,
        method: 'POST',
        json: true,
        body: {
          	"firstName": "Testing Data",
          	"lastName": "Testing Data",
          	"contactNumber": "+55 1882 6736",
          	"emailAddress": "fabricio.frontarolli@gmail.com",
          	"bloodGroup": "O+",
          	"ip": "192.168.0.1",
          	"coordinates": "-22.909063, -47.062958"
        }
      },
      function(err, response, body) {
        console.log('response', response.statusCode);

        expect(response.statusCode).toBe(200);
        done();
      });

    });

    it("return all donors when requested", function(done) {

      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBe(undefined);
        done();
      });
    });

  });
});

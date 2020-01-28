//= require jquery
describe('Testing', function() {

  it("going good1", function() {
    expect(true).toEqual(true);
  });

  it("going good2", function() {
      expect(1 + 1).toBe(2);
  });

});

describe('Click Button', function() {
  it("get value of clicked messages", function() {
      $('.button').click();
      expect('.message').toBe("worked jQuery on rails");
  });
  
});



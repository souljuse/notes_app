describe('Controller', function(){

  it('display just the first 20 characters of each note on the main note list page', function(){
    expect(document.getElementsByClassName("list-item")[0].textContent).toEqual("Favourite Drink: sel");
  });

  it('the note controller should listen to the event has changed', function() {
    if (location.hash === "#0") {
      expect(document.getElementById("app").textContent).toEqual("Favourite Drink: seltzer");
    }
  });

});

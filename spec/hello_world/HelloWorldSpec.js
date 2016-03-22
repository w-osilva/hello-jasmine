describe("HelloWorld", function() {
    var HelloWorld = require('../../lib/hello_world/HelloWorld');

    var greeting;

    beforeEach(function() {
        greeting = new HelloWorld();
    });

    it("should welcome the world", function() {
        expect(greeting.sayHello()).toEqual("Hello World!!!");

        //demonstrates use of custom matcher
        expect(greeting).toSayHello("Hello World!!!");
    });

});

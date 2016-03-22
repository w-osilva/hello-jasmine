beforeEach(function () {
    jasmine.addMatchers({
        toSayHello: function () {
            return {
                compare: function (actual, expected) {
                    var greeting = actual;

                    return {
                        pass: greeting.sayHello() === expected
                    }
                }
            };
        }
    });
});

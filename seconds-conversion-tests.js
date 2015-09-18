Tinytest.add('SecondsConversion.duration() - throws an error (requires a positive integer)', function (test) {
  test.throws(SecondsConversion.duration());
});

Tinytest.add('SecondsConversion.duration("") - throws an error (requires a positive integer)', function (test) {
  test.throws(SecondsConversion.duration(""));
});

Tinytest.add('SecondsConversion.duration(-1) - throws an error (requires a positive integer)', function (test) {
  test.throws(SecondsConversion.duration(-1));
});

Tinytest.add('SecondsConversion.duration(0) - returns 0:00', function (test) {
  test.equal(SecondsConversion.duration(0), '0:00');
});

Tinytest.add('SecondsConversion.duration(1) -  returns 0:01', function (test) {
  test.equal(SecondsConversion.duration(1), '0:01');
});

Tinytest.add('SecondsConversion.duration(59) - returns 0:59', function (test) {
  test.equal(SecondsConversion.duration(59), '0:59');
});

Tinytest.add('SecondsConversion.duration(60) - returns 1:00', function (test) {
  test.equal(SecondsConversion.duration(60), '1:00');
});

Tinytest.add('SecondsConversion.duration(61) - returns 1:01', function (test) {
  test.equal(SecondsConversion.duration(61), '1:01');
});

Tinytest.add('SecondsConversion.duration(90) - returns 1:30', function (test) {
  test.equal(SecondsConversion.duration(90), '1:30');
});

Tinytest.add('SecondsConversion.duration(600) - returns 10:00', function (test) {
  test.equal(SecondsConversion.duration(600), '10:00');
});

Tinytest.add('SecondsConversion.duration(900) - returns 15:00', function (test) {
  test.equal(SecondsConversion.duration(900), '15:00');
});

Tinytest.add('SecondsConversion.duration(6000) - returns 1:40:00', function (test) {
  test.equal(SecondsConversion.duration(6000), '1:40:00');
});

Tinytest.add('SecondsConversion.duration(9000) - returns 2:30:00', function (test) {
  test.equal(SecondsConversion.duration(9000), '2:30:00');
});

Tinytest.add('SecondsConversion.duration(9999) - returns 2:46:39', function (test) {
  test.equal(SecondsConversion.duration(9999), '2:46:39');
});

Tinytest.add('SecondsConversion.duration(86399) - returns 23:59:59', function (test) {
  test.equal(SecondsConversion.duration(86399), '23:59:59');
});

Tinytest.add('SecondsConversion.duration(360000) - returns 100:00:00', function (test) {
  test.equal(SecondsConversion.duration(360000), '100:00:00');
});

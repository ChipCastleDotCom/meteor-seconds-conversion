[![Build
Status](https://travis-ci.org/ChipCastleDotCom/meteor-seconds-conversion.svg)](https://travis-ci.org/ChipCastleDotCom/meteor-seconds-conversion)


## Introduction

A [Meteor package](https://atmospherejs.com/chipcastledotcom/seconds-conversion) for converting seconds to a duration format of `HH:MM:SS`.


## Installation

    meteor add chipcastledotcom:seconds-conversion


## Usage

Here's an example of converting `60` seconds to the duration format:

    SecondsConversion.duration(60);

This would return `1:00` because 60 seconds is equal to 1 minute and
0 seconds. The format returned does not pad values with zeros, nor does
it show zeros unecessarily (e.g., `00:01:00`).

Here's another example where theres a conversion of `360000` seconds:

    SecondsConversion.duration(360000)

This would return '100:00:00', which is to demonstrate how the hours
formatting can be extended beyond the 2-digit `HH` format. Formatting
for days, weeks, months, etc. has not been supported because it was
unnecessary for my needs.

Please note that the `duration` function accepts only integers.


## Donating

[![Support via
Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/chip/)


## License

Software provided under the [MIT License](https://github.com/chipcastledotcom/meteor-seconds-conversion/blob/master/LICENSE).


## Endorse my work on Coderwall

[![endorse](https://api.coderwall.com/chip/endorsecount.png)](https://coderwall.com/chip)


## Contributing

Please fork this repo and write tests.


## Testing

From within this repository's directory:

    meteor test-packages ./

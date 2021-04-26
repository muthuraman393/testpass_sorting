/**
 * Summary. (Bus Prototype with basic properties and Methods)
 *
 * Description. (contains the basic charcteristic and properties of the bus travel)
 *
 * @link   /buscomposer
 * @file   This files defines the busPrototype object.
 * @author Muthuraman.
 * @date  26-04-2021
 */
var busPrototype = {
    type: "bus",
    lastiteration: false,
    /**
     * Summary. (This function is used to generate the string with bus travel info)
     *
     * Description. (Basic details of bus travel  used to frame a sentence in travel list)
     * @access     private
     * @param {Object} bus     
     * @param {bool}   lastiteration (used for future changes)
     */
    buscomposer: function (bus, lastiteration) {
        var querystring = '';
        querystring = 'Take the airport bus from ' + bus['from'] + ' to ' + bus['to'] + '.';

        if (isExists(bus['seat'])) {
            querystring += ' Sit in seat' + bus['seat'] + '.';
        } else {
            querystring += ' No seat assignment.';
        }


        return querystring + "</br>";
    }
};

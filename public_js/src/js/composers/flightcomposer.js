/**
 * Summary. (Flight Prototype with basic properties and Methods)
 *
 * Description. (contains the basic charcteristic and properties of the flight travel)
 *
 * @link   /flightcomposer
 * @file   This files defines the flightPrototype object.
 * @author Muthuraman.
 * @date  26-04-2021
 */


var flightPrototype = {
    type: "airplane",
    lastiteration: false,
    /**
     * Summary. (This function is used to generate the string with flight travel info)
     *
     * Description. (Basic details of flight travel used to frame a sentence in travel list)
     * @access     private
     * @param {Object} airline     
     * @param {bool}   lastiteration 
     */
    flightcomposer: function (airline, lastiteration) {
        var querystring = '';
        flight = isExists(airline['number']) ? ' ' + airline['number'] : '';
        querystring = 'From ' + airline['from'] + ' take flight <strong><i>' + flight + '</i></strong> to ' +
            airline['to'] + '.';

        if (isExists(airline['gate'])) {
            querystring += ' Gate ' + airline['gate'] + ',';
        }

        if (isExists(airline['seat'])) {
            querystring += ' seat ' + airline['seat'] + '.';
        }

        if (isExists(airline['counter']) && !lastiteration) {
            querystring += ' Baggage drop at ticket counter ' + airline['counter'] + '.';
        }

        if (lastiteration) {
            querystring += ' Baggage will we automatically transferred from your last leg.';
        }

        return querystring + "</br>";
    }
};



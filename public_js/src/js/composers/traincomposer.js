/**
 * Summary. (Train Prototype with basic properties and Methods)
 *
 * Description. (contains the basic charcteristic and properties of the train travel)
 *
 * @link   /traincomposer
 * @file   This files defines the trainPrototype object.
 * @author Muthuraman.
 * @date  26-04-2021
 */
var trainPrototype = {
    type: "train",
    lastiteration: false,
    /**
     * Summary. (This function is used to generate the string with train travel info)
     *
     * Description. (Basic details of train travel  used to frame a sentence in travel list)
     * @access     private
     * @param {Object} train     
     * @param {bool}   lastiteration (used for future changes)
     */
    traincomposer: function (train, lastiteration) {
        var querystring = '';
        trainnum = isExists(train['number']) ? ' ' + train['number'] : '';
        querystring = 'Take train' + trainnum + ' from ' + train['from'] + ' to ' +
            train['to'] + '.';

        if (isExists(train['seat'])) {
            querystring += ' Sit in seat' + train['seat'] + '.';
        } else {
            querystring += ' No seat assignment.';
        }

        return querystring + "</br>";
    }

};


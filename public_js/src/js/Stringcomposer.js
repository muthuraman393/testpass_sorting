/**
 * Summary. (This function is used to generate the string with all travel info)
 *
 * Description. (Basic details of train/flight/bus travel  used to frame sentences in travel list)
 * @link   /Stringcomposer
 * @file   This files defines the String Composer prototype.
 * @author Muthuraman.
 * @date  26-04-2021
 * */


/**
 * Funtion stringcomposer
* @access     public
* @param {Object} orderedoutput   (contains the input of ordered travel list)  
* @return {string} (full travel list with html content to be rendered )
*/
function stringcomposer(orderedoutput) {
    var composed = "Travel details: </br>";
    var composer = '';
    orderedoutput.forEach(function (ticket, index, array) {
        var lastitreation = (index === array.length - 1);
        switch (ticket['type']) {
            case 'airplane':
                composer = flightPrototype.flightcomposer(ticket, lastitreation);
                break;
            case 'train':
                composer = trainPrototype.traincomposer(ticket, lastitreation);
                break;
            case 'bus':
                composer = busPrototype.buscomposer(ticket, lastitreation);
                break;
            default:
                composer = '<span class="alert-danger">No Ticket type is provided to build journey </span></br>';
        }

        composed += (index + 1) + '. ' + composer;
    });

    return composed + '5. You have arrived at your final destination.';
}


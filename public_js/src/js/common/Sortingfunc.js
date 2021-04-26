/**
 * Summary. (Sorting function file contains the logics to find the Initial point and Next sequence of those trips)
 *
 * Description. (From/To details of train/flight/bus travel  used to find the initial and sequence of the trips)
 * @link   /Sorter
 * @file   This files contains the actual logic of Sorting.
 * @author Muthuraman.
 * @date  26-04-2021
 * */



/**
 * Summary. (This function is used to get the starting point of travel)
 *
 * Description. (uses the from and to detail of the trip)
 * @access     public
 * @param {Object} Shuffledip   
 * @return number i (position index of string trip ) 
 */
function getStartingPoint(shuffledip) {
	count = shuffledip.length - 1;
	outerloop:
	for (i = 0; i <= count; i++) {
		for (j = 0; j <= count; j++) {
			if (!(shuffledip[j]['to']) || !(shuffledip[j]['from'])) {
				CustomException();
			}
			if (shuffledip[i]['from'] === shuffledip[j]['to'])
				break;
			if (j === count)
				break outerloop;
		}
	}

	return i;
}


/**
 * Summary. (This function contains the logics to find the Initial point and Next sequence of those trips)
 *
 * Description. (uses the from and to detail of the trip)
 * @access     public
 * @param {Object} Shuffledip     
 * @return type :(array of objects) [{}] orderedinpt 
 */
function passSorting(shuffledip) {



	/**
	 * Summary. (This function is used to get the next sequence of the triparray)
	 *
	 * Description. (uses the from and to detail of the trip)
	 * @access     private
	 * @param {Object} Shuffledip   (refrence)
	 * @param {Object} orderedinpt  (refrence)  
	 */
	function getNextTrip(shuffledip, orderedinpt) {
		//console.log(shuffledip, orderedinpt);
		shuffledip.forEach(function (boardingPass, order) {
			if (!(shuffledip[order]['from']) || !(shuffledip[order]['to'])) {
				CustomException();
			}
			if (shuffledip[order]['from'] === orderedinpt[0]['to']) {
				orderedinpt.unshift(shuffledip[order]);
				shuffledip.splice(order, 1);

			}
		});
	}


	var startingPos = getStartingPoint(shuffledip);
	var orderedinpt = [];
	//console.log('startingPos', startingPos);
	orderedinpt.push(shuffledip[startingPos]);
	shuffledip.splice(startingPos, 1);

	while (shuffledip.length > 0) {
		getNextTrip(shuffledip, orderedinpt);
	}

	return orderedinpt;

}




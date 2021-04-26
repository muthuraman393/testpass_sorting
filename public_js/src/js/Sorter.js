/**
 * Summary. (This file acts as the controller of shuffling the travel input and sorting the travel lists)
 *
 * Description. (Basic details of train/flight/bus travel  used to frame sentences in travel list of sorted input)
 * @link   /Sorter
 * @file   This files controlls the Shuffling and Sorting.
 * @author Muthuraman.
 * @date  26-04-2021
 * */
var cachedata = []; //input json file data is  cached in this global array
var inputjson = [];


/**
 * Summary. (This function is used to get the json data from json file)
 *
 * Description. (retrived data is cached in global variable)
 * @access     public
 */
function addjson() {

	if (cachedata.length == 0) {
		fetch("src/js/shuffled.json").then(response => {
			return response.json();
		}).then((data) => {

			document.getElementById("inputpre").innerHTML = JSON.stringify(data);
			inputjson = data;
			cachedata = data;
		});
	}
	else {
		inputjson = cachedata;
	}

}
addjson();

/**
 * Summary. (This function is used to shuffle and sort the data )
 *
 * Description. (shuffle sorting the data and printing the result in html page)
 * @access     public
 */
function shuffleSort() {
	if (inputjson.length > 0) {

		addjson();
		shuffling(inputjson);
		//console.log('shuffledip', inputjson);
		setElementhtml("inputpre", JSON.stringify(inputjson), 'html');
		setElementhtml("headingip", 'Shuffled Input', 'html');

		var orderedoutput = passSorting(inputjson).reverse();
		//console.log(orderedoutput);
		var composeddata = stringcomposer(orderedoutput);
		setElementhtml("outputpre", JSON.stringify(orderedoutput), 'html');
		setElementhtml("outputtext", composeddata, 'html');
		setElementhtml("entersubmit", 'Reset', 'value');

	}
	else {
		setElementhtml("outputpre", "", 'html');
		setElementhtml("outputtext", "", 'html');
		setElementhtml("inputpre", "", 'html');
		setElementhtml("entersubmit", 'Shuffle and Sort', 'value');
		addjson();
	}

}

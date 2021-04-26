
/**
 * Summary. (This function is used to shuffle a given array)
 *
 * Description. (input array may be any type of array)
 * @access     public
 * @param [Array] arr   
 *
 */
function shuffling(arr) {
	var c = arr.length;
	while (c) {
		var b = Math.random() * (--c + 1) | 0;
		var d = arr[c];
		arr[c] = arr[b];
		arr[b] = d;
	}

}
/**
 * Summary. (This function is used to check for Existence)
 *
 * Description. (object property is used to check its Existence)
 * @access     public
 * @param variable localinput   
 * @return boolean true/false
 */
function isExists(localinput) {
	if (localinput !== undefined && localinput !== null && localinput !== "") {
		return true;
	}
	else {
		return false;
	}

}

/**
 * Summary. (This function is used to handle and display Error)
 *
 * Description. (Error handling in Sorting)
 * @access     public  
 *
 */
function CustomException() {
	document.getElementById("outputtext").innerHTML = "<span class='alert alert-danger'>Mandatory: ticket information from/to details is not provided.</span>";
	throw new Error('Mandatory: ticket information from/to details is not provided.');

}

/**
 * Summary. (This function is used to set the html content in DOM)
 *
 * Description. (set the html/text content in DOM)
 * @access     public
 * @param String elementname   
 * @param String content  
 * @param String type  
 *
 */
function setElementhtml(elementname, content, type) {
	if (type == "html")
		document.getElementById(elementname).innerHTML = content;
	if (type == "value")
		document.getElementById(elementname).value = content;
}
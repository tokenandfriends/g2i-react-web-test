/**
 * Function: unescape
 * @param {string} str 
 * @returns pass a string into a regEx function that will replace escaped characters. This will allow the text to render these special characters to a human readable format.
 */

function unescape(str){
  return str.replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&#039;/g, "'")
}

export default unescape
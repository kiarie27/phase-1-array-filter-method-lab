// Code your solution here
/**
 * Find drivers whose names match the given string (case insensitive)
 * @param {Array} drivers - Array of driver names
 * @param {string} name - Name to match
 * @returns {Array} - Array of matching driver names
 */
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }

  /**
   * Find drivers whose names start with the given string
   * @param {Array} drivers - Array of driver names
   * @param {string} letters - Letters to match at the beginning of names
   * @returns {Array} - Array of matching driver names
   */
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }

  /**
   * Find drivers with a specific name in an array of driver objects
   * @param {Array} drivers - Array of driver objects with name and hometown properties
   * @param {string} name - Name to match exactly
   * @returns {Array} - Array of matching driver objects
   */
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
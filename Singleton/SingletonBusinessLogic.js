/*********************************************************************
 * @problem : write a program to implement singleton Designs Pattern
 * @fileName : SingletonBusinessLogic.js
 * @Auther : Pradnya D. S.
 **********************************************************************/

let engine = function () {
  let engineInstance;
  /**
   * @description : create a engine Object
   */
  function create() {
    let isWorking = false;

    function start() {
      isWorking = true;
    }

    function stop() {
      notWorking = false;
    }

    function state() {
      return isWorking ? "isWorking" : "notWorking";
    }

    return {
      start: start,
      stop: stop,
      state: state,
    };
  }

  return {
    getInstance: function () {
      if (!engineInstance) engineInstance = create();
      return engineInstance;
    },
  };
};
module.exports = new engine();

/**
 * Copyright (c) 2021 Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

define([], function() {
  'use strict';

  var FlowModule = function FlowModule() {};

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  FlowModule.prototype.reorderImages = function (arg1) {
    console.log("Reordering images");
  };

  return FlowModule;
});
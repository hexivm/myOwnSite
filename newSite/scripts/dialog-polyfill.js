(function () {
    'use strict';
    var dialogSkills = document.querySelector('#modal-skills');
    var closeButtonSkills = dialogSkills.querySelector('button');
    var showButtonSkills = document.querySelector('#show-modal-skills');
    
    var dialogFrameworks = document.querySelector('#modal-frameworks');
    var closeButtonFrameworks = dialogFrameworks.querySelector('button');
    var showButtonFrameworks = document.querySelector('#show-modal-frameworks');
    
    var dialogGrades = document.querySelector('#modal-grades');
    var closeButtonGrades = dialogGrades.querySelector('button');
    var showButtonGrades = document.querySelector('#show-modal-grades');
    
    
    if (!dialogSkills.showModal) {
        dialogPolyfill.registerDialog(dialogSkills);
    }
    if (!dialogFrameworks.showModal) {
        dialogPolyfill.registerDialog(dialogFrameworks);
    }
    if (!dialogGrades.showModal) {
        dialogPolyfill.registerDialog(dialogGrades);
    }
    
    var closeClickHandlerSkills = function (event) {
        dialogSkills.close();
    };
    var showClickHandlerSkills = function (event) {
        dialogSkills.showModal();
    };
 
    var closeClickHandlerFrameworks = function (event) {
        dialogFrameworks.close();
    };
    var showClickHandlerFrameworks = function (event) {
        dialogFrameworks.showModal();
    };
    
    var closeClickHandlerGrades = function (event) {
        dialogGrades.close();
    };
    var showClickHandlerGrades = function (event) {
        dialogGrades.showModal();
    };
    
    
    showButtonSkills.addEventListener('click', showClickHandlerSkills);
    closeButtonSkills.addEventListener('click', closeClickHandlerSkills);
    
    showButtonFrameworks.addEventListener('click', showClickHandlerFrameworks);
    closeButtonFrameworks.addEventListener('click', closeClickHandlerFrameworks);
    
    showButtonGrades.addEventListener('click', showClickHandlerGrades);
    closeButtonGrades.addEventListener('click', closeClickHandlerGrades);
} ());
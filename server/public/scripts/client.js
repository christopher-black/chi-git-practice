$(document).ready(function(){
  console.log('jQuery sourced.');
  initialize();
});

function initialize() {
  refreshKayaks();
  addEventHandlers();
}

function refreshKayaks() {
  // TASK 9: START
  // AJAX Request to GET all kayaks
  // Don't forget to to call appendKayaksToDom(response) on success



  // TAKS 9: END
}

function addEventHandlers() {
  // Forms
  $('#addKayak').on('submit', addNewKayak);
  $('#searchForm').on('submit', searchKayak);

  // Buttons
  $('#kayakList').on('click', '.delete', deleteKayak);
  $('#kayakList').on('click', '.like', likeKayak);
  $('#kayakList').on('click', '.add', restockKayak);
  $('#kayakList').on('click', '.cart', buyKayak);
}

/**
 * Add a new kayak.
 * e.g. {make: 'make', model: 'model', price: '99.99', quantity: 10}
 *
 * @param {Event} event jQuery event attached to the submit action.
 */
function addNewKayak(event) {
  event.preventDefault();
  console.log('Submitted add form');
  if(!formIsValid()) {
    // Invalid form entry!
    console.log('Invalid form entry!');
  } else {
    // TASK 13: START


    // TASK 13: END
  }
}

/**
 * Search for kayaks using a URL parameter.
 * e.g. /kayaks/search/Dolphin
 *
 * @param {Event} event jQuery event attached to the submit action.
 */
function searchKayak(event) {
  event.preventDefault();
  console.log('Submitted search form');
  // TASK 12: START


  // TASK 12: END
}

function likeKayak() {
  console.log('Like', $(this).data('kayak'));
  // TASK 11: START


  // TASK 11: END
}

function deleteKayak() {
  console.log('Delete', $(this).data('kayak'));
  // TASK 14: START


  // TASK 14: END
}

function buyKayak() {
  console.log('Buy', $(this).data('kayak'));
  // TASK 15: START


  // TASK 15: END
}

function restockKayak() {
  console.log('Add inventory', $(this).data('kayak'));
  // TASK 16: START


  // TASK 16: END
}

function formIsValid() {
  var valid = true;
  // TASK 17: START


  // TASK 17: END
  return valid;
}

/**
 * Create and append columns to the provided $row.
 *
 * @param {Array} kayaks An array of kayak objects to append to the dom.
 */
function appendKayaksToDom(kayaks) {
  // TASK 8: BEGIN
  // use a loop and the appendKayakToDom function


  // TASK 8: END
}

/**
 * Adds data to the featured kayak div.
 *
 * @param {Object} kayak An object that should be appended to the DOM.
 */
function appendFeaturedKayakToDom(kayak) {
  // TASK 10: BEGIN


  // TASK 10: END
}

/**
 * Create and append columns to the provided $row.
 *
 * @param {Object} kayak An object that should be appended to the DOM.
 * @param {Object} $row Reference to the table row to append to.
 */
function appendKayakToDom($row, kayak) {
  $row.append('<td>' + kayak.id + '</td>');
  $row.append('<td>' + kayak.make + '</td>');
  $row.append('<td>' + kayak.model + '</td>');
  $row.append('<td>' + kayak.price + '</td>');
  $row.append('<td>' + kayak.quantity + '</td>');
  $row.append('<td></td>');
  var $col = $row.children().last();
  // Add like button
  $col.append('<span class="glyphicon glyphicon-thumbs-up glyph-button like"' +
              ' role="button" data-kayak="' + kayak.id +
              '" aria-hidden="true"></span>');
  // Add delete button
  $col.append('<span class="glyphicon glyphicon-remove glyph-button delete"' +
              ' role="button" data-kayak="' + kayak.id +
              '" aria-hidden="true"></span>');
  // Add plus button
  $col.append('<span class="glyphicon glyphicon-plus glyph-button add"' +
              ' role="button" data-kayak="' + kayak.id +
              '" aria-hidden="true"></span>');
  // Add buy button
  $col.append('<span class="glyphicon glyphicon-shopping-cart glyph-button cart"' +
              ' role="button" data-kayak="' + kayak.id +
              '" aria-hidden="true"></span>');
}

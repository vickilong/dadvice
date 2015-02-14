/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vibe = require('ui/vibe');
var quotes = ['quote1', 'quote2'];

var main = new UI.Card({
  title: 'Welcome to dadvice.',
  icon: 'images/menu_icon.png',
  body: 'Press the middle for advice.',
  scrollable: true
});

var quote = new UI.Card({
  scrollable: true
});

quote.body( quotes[Math.floor(Math.random() * quotes.length)] );

var quote2 = new UI.Card({
  scrollable: true
});

quote2.body( quotes[Math.floor(Math.random() * quotes.length)] );

main.show();

// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
//   Vibe.vibrate('short');
// });

main.on('click', 'select', function(e) {
  quote.show();
  Vibe.vibrate('long');
});

quote.on('click', 'select', function(e) {
  quote2.body( quotes[Math.floor(Math.random() * quotes.length)] );
  quote2.show();
  Vibe.vibrate('long');
});

quote2.on('click', 'select', function(e) {
  quote.body( quotes[Math.floor(Math.random() * quotes.length)] );
  quote.show();
  Vibe.vibrate('long');
});

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
//   Vibe.vibrate('double');
// });

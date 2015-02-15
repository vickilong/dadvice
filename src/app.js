/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vibe = require('ui/vibe');
var quotes = ['Don\'t date that doctor...he\'s probably taking something for the same thing he treats his patients for.', 
              'Marry an ugly man. Because if he ever leaves you, at least you won\'t feel bad since, you know, he\'s ugly.',
              'The ideal man doesn\'t smoke, doesn\'t drink, doesn\'t do drugs, doesn\'t swear, doesn\'t get angry-- doesn\'t exist!',
              'God gave men both a penis and a brain, but unfortunately not enough blood supply to run both at the same time.',
              'The correct answer to “Do I look fat?” is never, ever “Yes.”',
              'Don’t fall in love. Fall off a bridge, it hurts less.',
              'Only trust people who like big butts... They cannot lie.',
              'Never hold a grudge. Hold a hammer. It\'s a lot more intimidating.',
              'Admit when you\'re wrong, shut up when you’re right.',
              'Don\'t marry someone you don’t want your children to be.',
             'Put your finger in your partner\'s nose. If it disgusts you, it means you\'re not in love.',
             'Love is like a fart. If you have to force it, it\'s probably crap.',];

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

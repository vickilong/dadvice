/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vibe = require('ui/vibe');
var Vector2 = require('vector2');

var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 132),
  image: 'images/smallicon.png'
});
var text = new UI.Text({
  position: new Vector2(0, 124),
  size: new Vector2(144, 20),
});

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
              'Love is like a fart. If you have to force it, it\'s probably crap.',
              'We have reason to believe that man first walked upright to free his hands for masturbation.',
              'Sex is like air; it\'s not important unless you aren\'t getting any.',
              'If you\'re nauseous and tingly all over, you are either in love or have smallpox.',
              'She said she wanted a separation. I was horrified, and I said, ‘You want me to wear a condom!',
              'My wife and I were happy for 20 years - then we met.',
              'Women don’t want to hear what you think. Women want to hear what they think— in a deeper voice.',
              'Sex without love is a meaningless experience, but as far as meaningless experiences go its pretty damn good.',
              'Sex and murder are the same. Well, you say the same after both don’t you? ‘Damn I got to get the hell out of here! What was I thinking!',
              'I believe that sex is a beautiful thing between two people. Between five, it’s fantastic.',];

var main = new UI.Window();

text.text('Press any button.');
text.textAlign('center');
main.add(image);
main.add(text);

var quote = new UI.Card({
  scrollable: true
});

quote.body( quotes[Math.floor(Math.random() * quotes.length)] );

var quote2 = new UI.Card({
  scrollable: true
});

quote2.body( quotes[Math.floor(Math.random() * quotes.length)] );

main.show();

main.on('click', 'select', function(e) {
  quote.show();
  Vibe.vibrate('long');
});

main.on('click', 'up', function(e) {
  quote.show();
  Vibe.vibrate('long');
});

main.on('click', 'down', function(e) {
  quote.show();
  Vibe.vibrate('long');
});

while (quote.body == quote2.body) {
  quote2.body( quotes[Math.floor(Math.random() * quotes.length)] );
}

quote.on('click', 'select', function(e) {
  quote2.body( quotes[Math.floor(Math.random() * quotes.length)] );
  quote2.show();
  Vibe.vibrate('long');
});

while (quote2.body == quote.body) {
  quote.body( quotes[Math.floor(Math.random() * quotes.length)] );
}

quote2.on('click', 'select', function(e) {
  quote.body( quotes[Math.floor(Math.random() * quotes.length)] );
  quote.show();
  Vibe.vibrate('long');
});

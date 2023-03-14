window.addEventListener('DOMContentLoaded', function() {
    var zindex = 10;
    var cards = document.querySelectorAll('div.card');
  
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function(event) {
        event.preventDefault();
  
        var isShowing = false;
  
        if (this.classList.contains('show')) {
          isShowing = true;
        }
  
        if (document.querySelector('div.cards').classList.contains('showing')) {
          // a card is already in view
          var currentCard = document.querySelector('div.card.show');
          currentCard.classList.remove('show');
  
          if (isShowing) {
            // this card was showing - reset the grid
            document.querySelector('div.cards').classList.remove('showing');
          } else {
            // this card isn't showing - get in with it
            this.style.zIndex = zindex;
            this.classList.add('show');
          }
  
          zindex++;
  
        } else {
          // no cards in view
          document.querySelector('div.cards').classList.add('showing');
          this.style.zIndex = zindex;
          this.classList.add('show');
  
          zindex++;
        }
      });
    }
  });
  
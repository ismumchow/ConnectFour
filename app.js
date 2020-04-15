document.addEventListener('DOMContentLoaded', () => {
   
    const squares = document.querySelectorAll('.grid div'); 
    const result = document.querySelector('#result'); 
    const displayCurrentPlayer = document.querySelector('#current-player');

    let currentPlayer = 1; 

    for (var i = 0, len = squares.length; i < len; i++)

        (function (index) {
            //add an onclick to each square in your grid
            squares[i].onclick = function () {
                //if the square below your current square is taken, you can go ontop of it
                console.log('button')
               
                 if (!squares[index + 7] && !squares[index].classList.contains('taken') && !squares[index].classList.contains('taken')) {
                     if (currentPlayer === 1) {
                         squares[index].classList.add('taken')
                         squares[index].classList.add('player-one')
                         //change the player
                         currentPlayer = 2
                         displayCurrentPlayer.innerHTML = currentPlayer
                     } else if (currentPlayer === 2) {
                         squares[index].classList.add('taken')
                         squares[index].classList.add('player-two')
                         //change the player
                         currentPlayer = 1
                         displayCurrentPlayer.innerHTML = currentPlayer
                     }
                 }
                  else if (squares[index + 7].classList.contains('taken') && !squares[index].classList.contains('taken')) {
                      if (currentPlayer === 1) {
                          squares[index].classList.add('taken')
                          squares[index].classList.add('player-one')
                          //change the player
                          currentPlayer = 2
                          displayCurrentPlayer.innerHTML = currentPlayer
                      } else if (currentPlayer === 2) {
                          squares[index].classList.add('taken')
                          squares[index].classList.add('player-two')
                          //change the player
                          currentPlayer = 1
                          displayCurrentPlayer.innerHTML = currentPlayer
                      }
                  }
                  else if (squares[index].classList.contains('taken')){
                   alert('cant go here')
                  }
                else alert('cant go here')
            }
        })(i)


})


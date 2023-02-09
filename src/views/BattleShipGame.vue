<template>
  <!--<div class="main-blc" @click="battleShipGame()">Play battleship</div>-->
  <div class="main-blc">
    <div id="board">
      <div id="messageArea"></div>
      <table>
        <tr>
          <td id="00"></td>
          <td id="01"></td>
          <td id="02"></td>
          <td id="03"></td>
          <td id="04"></td>
          <td id="05"></td>
          <td id="06"></td>
        </tr>
        <tr>
          <td id="10"></td>
          <td id="11"></td>
          <td id="12"></td>
          <td id="13"></td>
          <td id="14"></td>
          <td id="15"></td>
          <td id="16"></td>
        </tr>
        <tr>
          <td id="20"></td>
          <td id="21"></td>
          <td id="22"></td>
          <td id="23"></td>
          <td id="24"></td>
          <td id="25"></td>
          <td id="26"></td>
        </tr>
        <tr>
          <td id="30"></td>
          <td id="31"></td>
          <td id="32"></td>
          <td id="33"></td>
          <td id="34"></td>
          <td id="35"></td>
          <td id="36"></td>
        </tr>
        <tr>
          <td id="40"></td>
          <td id="41"></td>
          <td id="42"></td>
          <td id="43"></td>
          <td id="44"></td>
          <td id="45"></td>
          <td id="46"></td>
        </tr>
        <tr>
          <td id="50"></td>
          <td id="51"></td>
          <td id="52"></td>
          <td id="53"></td>
          <td id="54"></td>
          <td id="55"></td>
          <td id="56"></td>
        </tr>
        <tr>
          <td id="60"></td>
          <td id="61"></td>
          <td id="62"></td>
          <td id="63"></td>
          <td id="64"></td>
          <td id="65"></td>
          <td id="66"></td>
        </tr>
      </table>
      <form>
        <input type="text" id="guessInput" placeholder="A0">
        <input type="button" id="fireButton" value="Fire!">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test2',
    mounted() {
      let model = {
        boardSize: 7,
        numShips: 3,
        shipLength: 3,
        shipsSunk: 0,
        ships: [
          { locations: [0, 0, 0], hits: ["", "", ""] },
          { locations: [0, 0, 0], hits: ["", "", ""] },
          { locations: [0, 0, 0], hits: ["", "", ""] }
        ],

        fire: function(guess) {
          for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (ship.hits[index] === "hit") {
              view.displayMessage("Oops, you already hit that location!");
              return true;
            } else if (index >= 0) {
              ship.hits[index] = "hit";
              view.displayHit(guess);
              view.displayMessage("HIT!");

              if (this.isSunk(ship)) {
                view.displayMessage("You sank my battleship!");
                this.shipsSunk++;
              }
              return true;
            }
          }
          view.displayMiss(guess);
          view.displayMessage("You missed.");
          return false;
        },

        isSunk: function (ship) {
          for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== 'hit') {
              return false
            }
          }
          return true
        },

        generateShipLocations: function () {
          let locations
          for (let i = 0; i < this.numShips; i++) {
            do {
              locations = this.generateShip()
            } while (this.collision(locations))
            this.ships[i].locations = locations
          }
          console.log("Ships array: ");
          console.log(this.ships);
        },

        generateShip: function () {
          let direction = Math.floor(Math.random() * 2)
          let row
          let col
          if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize)
            col = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)))
          } else {
            row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)))
            col = Math.floor(Math.random() * this.boardSize)
          }
          let newShipLocations = []
          for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
              newShipLocations.push(row + '' + (col + i))
            } else {
              newShipLocations.push((row + i) + '' + col)
            }
          }
          return newShipLocations
        },

        collision: function (locations) {
          for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i]
            for (let j = 0; j < locations.length; j++) {
              if (ship.locations.indexOf(locations[j]) >= 0) {
                return true
              }
            }
          }
          return false
        }
      }

      let view = {
        displayMessage: function (msg) {
          let messageArea = document.getElementById('messageArea')
          messageArea.innerHTML = msg
        },
        displayHit: function (location) {
          let cell = document.getElementById(location)
          cell.setAttribute('class', 'hit')
        },
        displayMiss: function (location) {
          let cell = document.getElementById(location)
          cell.setAttribute('class', 'miss')
        }
      }

      let controller = {
        guesses: 0,
        processGuess: function (guess) {
          let location = parseGuess(guess)
          if (location) {
            this.guesses++
            let hit = model.fire(location)
            if(hit && model.shipsSunk === model.numShips) {
              view.displayMessage('You sank all my battleships, in ' + this.guesses + ' guesses' )
            }
          }
        }
      }

      function parseGuess (guess) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

        if (guess === null || guess.length !==2) {
          alert('Oops, please enter a letter and a number on the board')
        } else {
          let firstChar = guess.charAt(0)
          let row = alphabet.indexOf(firstChar)
          let column = guess.charAt(1)

          if(isNaN(row) || isNaN(column)) {
            alert('Oops, that isn\'t on the board')
          } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert('Oops, that\'s off the board')
          } else {
            return row + column
          }
        }
        return null
      }

      function init () {
        let fireButton = document.getElementById('fireButton')
        fireButton.onclick = handleFireButton
        let guessInput = document.getElementById('guessInput')
        guessInput.onkeypress = handleKeyPress
        model.generateShipLocations()
      }

      function handleFireButton () {
        let guessInput = document.getElementById('guessInput')
        let guess = guessInput.value.toUpperCase()
        controller.processGuess(guess)
        guessInput.value = ''
      }

      function handleKeyPress (e) {
        let fireButton = document.getElementById('fireButton')
        if (e.keyCode === 13) {
          fireButton.click()
          return false
        }
      }

      window.onload = init
    },
    methods: {



      // battleShipGame () {
      //   let randomLoc = Math.floor(Math.random() * 5)
      //   let location1 = randomLoc, location2 = location1 + 1, location3 = location2 + 1;
      //   // let location1 = 3, location2 = 4, location3 = 5;
      //   let guess;
      //   let hits = 0;
      //   let guesses = 0;
      //   let isSunk = false;
      //
      //   while (!isSunk) {
      //     guess = prompt('Ready, aim, fire! (enter a number from 0-6):')
      //
      //     if (guess === null) {
      //       break
      //     }
      //
      //     guess = +guess
      //     if (guess < 0 || guess > 6) {
      //       alert('Please enter a valid cell number')
      //     } else {
      //       guesses += 1
      //       if(guess === location1 || guess === location2 || guess === location3) {
      //         hits += 1
      //         alert('HIT!')
      //
      //         if(hits === 3) {
      //           isSunk = true
      //           alert('You sank my battleship')
      //         }
      //       } else {
      //         alert('MISS!')
      //       }
      //     }
      //   }
      //
      //   let status = 'You took ' + guesses + ' guesses to sink the battleship, which means your shooting accuracy was ' + (3 / guesses)
      //   console.log(status)
      // }

      // battleShipGame () {
      //   // let randomLoc = Math.floor(Math.random() * 5)
      //   // let location1 = randomLoc, location2 = location1 + 1, location3 = location2 + 1;
      //   let location1 = 3, location2 = 4, location3 = 5;
      //   let guess;
      //   let hits = 0;
      //   let guesses = 0;
      //   let isSunk = false;
      //   let guessesArray = []
      //
      //   while (!isSunk) {
      //     guess = prompt('Ready, aim, fire! (enter a number from 0-6):')
      //
      //     if (guess === null) {
      //       break
      //     }
      //
      //     guess = +guess
      //     if (guess < 0 || guess > 6) {
      //       alert('Please enter a valid cell number')
      //     } else {
      //       guesses += 1
      //
      //       if (!guessesArray.includes(guess)) {
      //         guessesArray.push(guess)
      //         if(guess === location1 || guess === location2 || guess === location3) {
      //           hits += 1
      //           alert('HIT!')
      //
      //           if(hits === 3) {
      //             isSunk = true
      //             alert('You sank my battleship')
      //           }
      //         } else {
      //           alert('MISS!')
      //         }
      //       } else {
      //         alert('You\'ve shot here before')
      //       }
      //     }
      //   }
      //
      //   let status = 'You took ' + guesses + ' guesses to sink the battleship, which means your shooting accuracy was ' + (3 / guesses)
      //   console.log(status)
      //   console.log(guessesArray)
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .main-blc {
    background-color: black;

    #board {
      position: relative;
      width: 1024px;
      height: 863px;
      margin: auto;
      background: url("~@/assets/img/test2-bs/board.jpg");

      #messageArea {
        position: absolute;
        top: 0;
        left: 0;
        color: rgb(83, 175, 19);
      }

      table {
        position: absolute;
        left: 173px;
        top: 98px;
        border-spacing: 1px;
      }

      td {
        width: 94px;
        height: 94px;
      }

      form {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 15px;
        background-color: rgb(83, 175, 19);

        input {
          padding: 5px;
          background-color: rgb(152, 207, 113);
          border-color: rgb(83, 175, 19);
          font-size: 1em;
        }
      }

      .hit {
        background: url("~@/assets/img/test2-bs/ship.png") no-repeat center center;
      }

      .miss {
        background: url("~@/assets/img/test2-bs/miss.png") no-repeat center center;
      }
    }
  }
</style>
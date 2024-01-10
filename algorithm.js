// dictionary
/**
 * https://albertauyeung.github.io/2020/06/15/python-trie.html/
 * Node - kirjutatud ümber JavaScript keeles
 * Trie - kirjutatud ümber JavaScript keeles; funktsioonid dfs ja query eemaldatud, funktsioon find lisatud
 */
class Node {
    constructor(letter) {
        this.letter = letter;
        this.isEnd = false;
        this.children = new Object();
    }
}

class Trie {
    constructor() {
        this.root = new Node('')
    }

    insert(word) {
        var node = this.root;
        for (var lx in word) {
            var letter = word[lx]
            if (letter in node.children) {
                node = node.children[letter];
            } else {
                var child = new Node(letter)
                node.children[letter] = child
                node = child
            }
        }
        node.isEnd = true
    }

    find(word) {
        var node = this.root;
        for (var lx in word) {
            var letter = word[lx]
            if (letter in node.children) {
                node = node.children[letter]
            } else {
                return false;
            }
        }
        if (node.isEnd) {
            return true;
        } else {
            return false;
        }
    }
}

var dictionary = new Trie();

// board
var board = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
];

var multipliers = [
    ['3w', '1',  '1',  '2l', '1',  '1',  '1',  '3w', '1',  '1',  '1',  '2l', '1',  '1',  '3w'], 
    ['1',  '2w', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '2w', '1'], 
    ['1',  '1',  '2w', '1',  '1',  '1',  '2l', '1',  '2l', '1',  '1',  '1',  '2w', '1',  '1'], 
    ['2l', '1',  '1',  '2w', '1',  '1',  '1',  '2l', '1',  '1',  '1',  '2w', '1',  '1',  '2l'], 
    ['1',  '1',  '1',  '1',  '2w', '1',  '1',  '1',  '1',  '1',  '2w', '1',  '1',  '1',  '1'], 
    ['1',  '3l', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '3l', '1'], 
    ['1',  '1',  '2l', '1',  '1',  '1',  '2l', '1',  '2l', '1',  '1',  '1',  '2l', '1',  '1'], 
    ['3w', '1',  '1',  '2l', '1',  '1',  '1',  '2l', '1',  '1',  '1',  '2l', '1',  '1',  '3w'], 
    ['1',  '1',  '2l', '1',  '1',  '1',  '2l', '1',  '2l', '1',  '1',  '1',  '2l', '1',  '1'], 
    ['1',  '3l', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '3l', '1'], 
    ['1',  '1',  '1',  '1',  '2w', '1',  '1',  '1',  '1',  '1',  '2w', '1',  '1',  '1',  '1'], 
    ['2l', '1',  '1',  '2w', '1',  '1',  '1',  '2l', '1',  '1',  '1',  '2w', '1',  '1',  '2l'], 
    ['1',  '1',  '2w', '1',  '1',  '1',  '2l', '1',  '2l', '1',  '1',  '1',  '2w', '1',  '1'], 
    ['1',  '2w', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '3l', '1',  '1',  '1',  '2w', '1'], 
    ['3w', '1',  '1',  '2l', '1',  '1',  '1',  '3w', '1',  '1',  '1',  '2l', '1',  '1',  '3w']
];

var transposed = false;

// rack
// https://en.wikipedia.org/wiki/Scrabble_letter_distributions
var letters = [
    ' ', ' ', 
    'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 
    'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i',
    's', 's', 's', 's', 's', 's', 's', 's', 
    't', 't', 't', 't', 't', 't', 't', 
    'k', 'k', 'k', 'k', 'k', 
    'l', 'l', 'l', 'l', 'l', 
    'o', 'o', 'o', 'o', 'o', 
    'u', 'u', 'u', 'u', 'u', 
    'd', 'd', 'd', 'd', 
    'm', 'm', 'm', 'm', 
    'n', 'n', 'n', 'n', 
    'r', 'r', 
    'g', 'g', 
    'v', 'v', 
    'h', 'h', 
    'j', 'j', 
    'p', 'p', 
    'õ', 'õ', 
    'ä', 'ä', 
    'ü', 'ü', 
    'ö', 'ö', 
    'b', 'f','š', 'z', 'ž'
];

// https://en.wikipedia.org/wiki/Scrabble_letter_distributions
var scores = {
    ' ': 0, 'a': 1, 'e': 1, 'i': 1, 's': 1, 't': 1, 'k': 1, 'l': 1, 'o': 1, 'u': 1,
    'd': 2, 'm': 2, 'n': 2, 'r': 2,
    'g': 3, 'v': 3,
    'h': 4, 'j': 4, 'p': 4, 'õ': 4, 'b': 4,
    'ä': 5, 'ü': 5,
    'ö': 6,
    'f': 8,
    'š': 10, 'z': 10, 'ž': 10
};

var rack = [];

// 
var bestMove = [];
var bestScore = 0;
var boardHorizontalWords = [];
var boardVerticalWords = [];
//

start();


function start() {
    loadDictionary();
    updateRack();
    document.getElementById('firstMove').onclick = makeFirstMove;
    document.getElementById('play').onclick = makeMove;
    document.getElementById('play').disabled = true;
}

function makeFirstMove() {
    leftPart('', dictionary.root, [7, 7, 7]);
    document.getElementById('firstMove').disabled = true;
    document.getElementById('play').disabled = false;
    updateState();
}

function makeMove() {
    var anchorSquares = findAnchorSquares();
    for (var ax in anchorSquares) {
        leftPart('', dictionary.root, anchorSquares[ax]);
    }
    transpose();
    anchorSquares = findAnchorSquares();
    for (var ax in anchorSquares) {
        leftPart('', dictionary.root, anchorSquares[ax]);
    }
    transpose();
    updateState();
}

function updateState() {
    var [word, row, col, score, vertical] = bestMove;
    if (vertical) boardVerticalWords.push([word, row, col]);
    else boardHorizontalWords.push([word, row, col]);
    console.log('rack before: ' + rack);
    for (var j = col; j < col+word.length; j++) {
        var letter = word[j-col];
        if (vertical) {
            if (multipliers[j][row] != '0') {
                if (letter == letter.toUpperCase()) {
                    rack.splice(rack.indexOf(' '), 1);
                } else {
                    rack.splice(rack.indexOf(letter), 1);
                }
            }
        } else {
            if (multipliers[row][j] != '0') {
                if (letter == letter.toUpperCase()) {
                    rack.splice(rack.indexOf(' '), 1);
                } else {
                    rack.splice(rack.indexOf(letter), 1);
                }
            }
        }
    }
    if (rack.length == 0) {
        bestMove[3] += 50;
    }
    updateRack();
    console.log('rack after: ' + rack);
    updateBoard();
    console.log('best move: ' + bestMove);
    console.log(board);
    bestMove = [];
    bestScore = 0;
}

// dictionary
function loadDictionary() {
    var request = new XMLHttpRequest();
    request.open("GET", "dictionary.txt", false);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            var text = request.responseText;
            var lines = text.split('\n');
            for (var lx in lines) {
                dictionary.insert(lines[lx].trim());
            }
        }
    };
    request.send(null);
}

// board
function updateBoard() {
    var [word, row, col, score, vertical] = bestMove;
    for (var j = col; j < col+word.length; j++) {
        var letter = word[j-col];
        if (vertical) {
            if (letter == letter.toUpperCase()) {
                board[j][row] = letter.toLowerCase();
                multipliers[j][row] = '-';
            } else {
                board[j][row] = letter;
                multipliers[j][row] = '0';
            }
        } else {
            if (letter == letter.toUpperCase()) {
                board[row][j] = letter.toLowerCase();
                multipliers[row][j] = '-';
            } else {
                board[row][j] = letter;
                multipliers[row][j] = '0';
            }
        }
    }
}

function transpose() {
    var transposedBoard = [];
    for (var row = 0; row < 15; row++) {
        transposedBoard.push([]);
        for (var col = 0; col < 15; col++) {
            transposedBoard[row].push(board[col][row]);
        }
    }
    board = transposedBoard;
    transposed = !transposed;
}

// rack
function updateRack() {
    while (rack.length != 7) {
        if (letters.length == 0) return;
        var index = Math.floor(Math.random() * letters.length);
        rack.push(letters[index]);
        letters.splice(index, 1);
    }
}

//
// funktsioon põhineb töös The World's Fastest Scrabble Program kirjeldatud algoritmil
function leftPart(partialWord, node, anchor) {
    var [row, col, limit] = anchor;
    extendRight(partialWord, node, [row, col+1]);
    if (limit > 0) {
        for (var letter in node.children) {
            if (rack.includes(letter)) {
                rack.splice(rack.indexOf(letter), 1);
                leftPart(partialWord+letter, node.children[letter], [row, col, limit-1]);
                rack.push(letter);
            }
            if (rack.includes(' ')) {
                rack.splice(rack.indexOf(' '), 1);
                leftPart(partialWord+letter.toUpperCase(), node.children[letter], [row, col, limit-1]);
                rack.push(' ');
            }
        }
    }
}

// funktsioon põhineb töös The World's Fastest Scrabble Program kirjeldatud algoritmil
function extendRight(partialWord, node, square) {
    var [row, col] = square;
    if (board[row][col] == '0') {
        if (node.isEnd) {
            legalMove(partialWord, row, col-partialWord.length);
        }
        for (var letter in node.children) {
            if (rack.includes(letter)) {
                rack.splice(rack.indexOf(letter), 1);
                extendRight(partialWord+letter, node.children[letter], [row, col+1]);
                rack.push(letter);
            }
            if (rack.includes(' ')) {
                rack.splice(rack.indexOf(' '), 1);
                extendRight(partialWord+letter.toUpperCase(), node.children[letter], [row, col+1]);
                rack.push(' ');
            }
        }
    } else {
        var squareLetter = board[row][col];
        if (squareLetter in node.children) {
            extendRight(partialWord+squareLetter, node.children[squareLetter], [row, col+1]);
        }
    }
}

function findAnchorSquares() {
    var anchorSquares = [];
    for (var row = 0; row < 15; row++) {
        var limit = 0;
        for (var col = 0; col < 15; col++) {
            limit += 1;
            if (board[row][col-1] == '0' && board[row][col] != '0') {
                anchorSquares.push([row, col-1, limit]);
            } else if (board[row][col-1] != '0') {
                limit = 0;
            }
        }
    }
    return anchorSquares;
}

function legalMove(word, row, col) {
    if (!checkMove(word, row, col)) return;
    if (!checkWord(word, row, col)) return;
    var score = scoreWord(word, row, col);
    if (score > bestScore) {
        bestMove = [word, row, col, score, transposed];
    }
}

function checkMove(possibleWord, row, col) {
    for (var j = col; j < col+possibleWord.length; j++) {
        var word = '';
        for (var i = 0; i < 15; i++) {
            var boardLetter = board[i][j];
            if (i == row) boardLetter = possibleWord[j-col];
            if (boardLetter == '0' && word.length == 1) {
                word = '';
            } else if (boardLetter == '0' && word.length > 1) {
                if (!dictionary.find(word)) return false;
                word = '';
            } else if (boardLetter != '0') {
                word += boardLetter;
            }
        }
    }
    if (word != '' && !dictionary.find(word)) return false;
    var word = '';
    for (var j = 0; j < 15; j++) {
        var boardLetter = board[row][j];
        if (j >= col && j < col+possibleWord.length) boardLetter = possibleWord[j-col];
        if (boardLetter == '0' && word.length == 1) {
            word = '';
        } else if (boardLetter == '0' && word.length > 1) {
            if (!dictionary.find(word)) return false;
            word = '';
        } else if (boardLetter != '0') {
            word += boardLetter;
        }
    }
    return true;
}

function checkWord(word, row, col) {
    if (transposed) {
        for (var mx in boardVerticalWords) {
            var [w, r, c] = boardVerticalWords[mx];
            if (w==word && r==row && c==col) return false;
        }
    } else {
        for (var mx in boardHorizontalWords) {
            var [w, r, c] = boardHorizontalWords[mx];
            if (w==word && r==row && c==col) return false;
        }
    }
    return true;
}

function scoreWord(word, row, col) {
    var score = 0;
    var wordMultiplier = 1;
    for (var j = col; j < col+word.length; j++) {
        var letter = word[j-col];
        var letterMultiplier = 1;
        var squareMultiplier;
        if (transposed) squareMultiplier = multipliers[j][row];
        else squareMultiplier = multipliers[row][j];
        if (squareMultiplier == '2l') {
            letterMultiplier = 2;
        } else if (squareMultiplier == '3l') {
            letterMultiplier = 3;
        } else if (squareMultiplier == '2w') {
            wordMultiplier *= 2;
        } else if (squareMultiplier == '3w') {
            wordMultiplier *= 3;
        } else if (squareMultiplier == '-') {
            letterMultiplier = 0;
        }
        if (letter != letter.toUpperCase()) {
            score += scores[letter]*letterMultiplier;
        }
    }
    score *= wordMultiplier;
    return score;
}
//

var yellowPositions = [0, 1, 2, 3];
var yellowPathRows = [1.5, 1.5, 2.5, 2.5, 4, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 6, 6, 5, 5, 5, 5];
var yellowPathCols = [1.5, 2.5, 1.5, 2.5, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 6, 6, 5, 4, 4, 4, 3, 2, 1, 1, 2, 3, 4];

var redPositions = [0, 1, 2, 3];
var redPathRows = [1.5, 1.5, 2.5, 2.5, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 6, 6, 5, 4, 4, 4, 3, 2, 1, 1, 2, 3, 4];
var redPathCols = [7.5, 8.5, 7.5, 8.5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 6, 6, 5, 4, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5 ,5, 5];

var bluePositions = [0, 1, 2, 3];
var bluePathRows = [7.5, 7.5, 8.5, 8.5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 6, 6, 5, 4, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5];
var bluePathCols = [7.5, 8.5, 7.5, 8.5, 9, 8, 7, 6, 6, 6, 5, 4, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 8, 7, 6];

var greenPositions = [0, 1, 2, 3];
var greenPathRows = [7.5, 7.5, 8.5, 8.5, 9, 8, 7, 6, 6, 6, 5, 4, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 8, 7, 6];
var greenPathCols = [1.5, 2.5, 1.5, 2.5, 4, 4, 4, 3, 2, 1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 6, 6, 5, 5, 5, 5];

function nextYellow(pieceNo) {
    yellowPositions[pieceNo]++;
    if (yellowPositions[pieceNo] < 4) yellowPositions[pieceNo] = 4;
    showYellow(pieceNo);
}
function nextRed(pieceNo) {
    redPositions[pieceNo]++;
    if (redPositions[pieceNo] < 4) redPositions[pieceNo] = 4;
    showRed(pieceNo);
}
function nextBlue(pieceNo) {
    bluePositions[pieceNo]++;
    if (bluePositions[pieceNo] < 4) bluePositions[pieceNo] = 4;
    showBlue(pieceNo);
}
function nextGreen(pieceNo) {
    greenPositions[pieceNo]++;
    if (greenPositions[pieceNo] < 4) greenPositions[pieceNo] = 4;
    showGreen(pieceNo);
}

function showYellow(pieceNo) {
    var index = yellowPositions[pieceNo];
    var yellowCol = yellowPathCols[index];
    var yellowRow = yellowPathRows[index];
    movePiece('yellow', pieceNo, yellowCol, yellowRow);
}

function showRed(pieceNo) {
    var index = redPositions[pieceNo];
    var redCol = redPathCols[index];
    var redRow = redPathRows[index];
    movePiece('red', pieceNo, redCol, redRow);
}

function showBlue(pieceNo) {
    var index = bluePositions[pieceNo];
    var blueCol = bluePathCols[index];
    var blueRow = bluePathRows[index];
    movePiece('blue', pieceNo, blueCol, blueRow);
}

function showGreen(pieceNo) {
    var index = greenPositions[pieceNo];
    var greenCol = greenPathCols[index];
    var greenRow = greenPathRows[index];
    movePiece('green', pieceNo, greenCol, greenRow);
}

function showBoard1() {
    document.getElementById('board').innerHTML = `
        <svg viewbox="0 0 100 100">
            <rect class="background" width="100" height="100"/>

            <!-- Home for each color -->
            <rect class="homeYellow" y="1.3" x="1.3" width="31.7" height="31.7"/>
            <rect class="whiteBlock" y="4.5" x="4.5" width="25" height="25"/>

            <rect class="homeRed" y="1.3" x="67" width="31.7" height="31.7"/>
            <rect class="whiteBlock" y="4.5" x="70.5" width="25" height="25"/>

            <rect class="homeGreen" y="67" x="1.3" width="31.7" height="31.7"/>
            <rect class="whiteBlock" y="70.3" x="4.3" width="25" height="25"/>

            <rect class="homeBlue" y="67" x="67" width="31.7" height="31.7"/>
            <rect class="whiteBlock" y="70.3" x="70.5" width="25" height="25"/>
            <!-- Home for each color -->



            <!-- The play squares, whites and their homes respective colors
                 1.3px from frame 0.84px between small blocks-->

            <!-- Red area -->

            <rect class="whiteSquare" y="1.3" x="34.2" width="10" height="10"/>
            <rect class="redSquare" y="1.3" x="45.1" width="10" height="10"/>
            <rect class="redSquare" y="1.3" x="55.9" width="10" height="10"/>

            <rect class="whiteSquare" y="12.1" x="34.2" width="10" height="10"/>
            <rect class="redSquare" y="12.1" x="45.1" width="10" height="10"/>
            <rect class="whiteSquare" y="12.1" x="55.9" width="10" height="10"/>

            <rect class="whiteSquare" y="23" x="34.2" width="10" height="10"/>
            <rect class="redSquare" y="23" x="45.1" width="10" height="10"/>
            <rect class="whiteSquare" y="23" x="55.9" width="10" height="10"/>

            <!-- Yellow area -->

            <rect class="yellowSquare" y="34.2" x="1.3" width="10" height="10"/>
            <rect class="whiteSquare" y="34.2" x="12.14" width="10" height="10"/>
            <rect class="whiteSquare" y="34.2" x="23" width="10" height="10"/>

            <rect class="yellowSquare" y="45.1" x="1.3" width="10" height="10"/>
            <rect class="yellowSquare" y="45.1" x="12.14" width="10" height="10"/>
            <rect class="yellowSquare" y="45.1" x="23" width="10" height="10"/>

            <rect class="whiteSquare" y="55.9" x="1.3" width="10" height="10"/>
            <rect class="whiteSquare" y="55.9" x="12.14" width="10" height="10"/>
            <rect class="whiteSquare" y="55.9" x="23" width="10" height="10"/>

            <!-- Green area -->

            <rect class="whiteSquare" y="67" x="34.2" width="10" height="10"/>
            <rect class="greenSquare" y="67" x="45.1" width="10" height="10"/>
            <rect class="whiteSquare" y="67" x="55.9" width="10" height="10"/>

            <rect class="whiteSquare" y="77.84" x="34.2" width="10" height="10"/>
            <rect class="greenSquare" y="77.84" x="45.1" width="10" height="10"/>
            <rect class="whiteSquare" y="77.84" x="55.9" width="10" height="10"/>

            <rect class="greenSquare" y="88.68" x="34.2" width="10" height="10"/>
            <rect class="greenSquare" y="88.68" x="45.1" width="10" height="10"/>
            <rect class="whiteSquare" y="88.68" x="55.9" width="10" height="10"/>

            <!-- Blue area -->

            <rect class="whiteSquare" y="34.2" x="67" width="10" height="10"/>
            <rect class="blueSquare" y="45.1" x="67" width="10" height="10"/>
            <rect class="whiteSquare" y="55.9" x="67" width="10" height="10"/>

            <rect class="whiteSquare" y="34.2" x="77.84" width="10" height="10"/>
            <rect class="blueSquare" y="45.1" x="77.84" width="10" height="10"/>
            <rect class="whiteSquare" y="55.9" x="77.84" width="10" height="10"/>

            <rect class="whiteSquare" y="34.2" x="88.68" width="10" height="10"/>
            <rect class="blueSquare" y="45.1" x="88.68" width="10" height="10"/>
            <rect class="blueSquare" y="55.9" x="88.68" width="10" height="10"/>

            <!-- Triangles X,Y -->

            <polygon class="redTriangle" points="50,49.5 34.7,34.2 65.4,34.2"/>
            <polygon class="yellowTriangle" points="49.5,50 34.2,34.7 34.2,65.4"/>
            <polygon class="greenTriangle" points="50,50.5 65.4,65.9 34.7,65.9"/>
            <polygon class="blueTriangle" points="50.5,50 65.9,34.7 65.9,65.4"/>

			<!-- Bokstaver -->
            <!-- Røde siden -->
            <text x="37" y="8" font-family="sans-serif" font-size="6px" fill="black">A</text>
            <text x="37" y="19" font-family="sans-serif" font-size="6px" fill="black">M</text>
            <text x="38" y="30" font-family="sans-serif" font-size="6px" fill="black">I</text>
            <text x="59" y="19" font-family="sans-serif" font-size="6px" fill="black">L</text>
            <text x="59" y="30" font-family="sans-serif" font-size="6px" fill="black">S</text>
            <!-- Blå siden -->
            <text x="70" y="41" font-family="sans-serif" font-size="6px" fill="black">K</text>
            <text x="81" y="41" font-family="sans-serif" font-size="6px" fill="black">O</text>
            <text x="92" y="41" font-family="sans-serif" font-size="6px" fill="black">R</text>
            <text x="70" y="63" font-family="sans-serif" font-size="6px" fill="black">D</text>
            <text x="81" y="63" font-family="sans-serif" font-size="6px" fill="black">U</text>
            <!-- Grønne siden -->
            <text x="59" y="74" font-family="sans-serif" font-size="6px" fill="black">E</text>
            <text x="59" y="85" font-family="sans-serif" font-size="6px" fill="black">H</text>
            <text x="59" y="96" font-family="sans-serif" font-size="6px" fill="black">J</text>
            <text x="37" y="74" font-family="sans-serif" font-size="6px" fill="black">V</text>
            <text x="37" y="85" font-family="sans-serif" font-size="6px" fill="black">N</text>
            <!-- Gule siden -->
            <text x="26" y="63" font-family="sans-serif" font-size="6px" fill="black">T</text>
            <text x="15" y="63" font-family="sans-serif" font-size="6px" fill="black">P</text>
            <text x="4" y="63" font-family="sans-serif" font-size="6px" fill="black">F</text>
            <text x="15" y="41" font-family="sans-serif" font-size="6px" fill="black">B</text>
            <text x="26" y="41" font-family="sans-serif" font-size="6px" fill="black">G</text>

            <circle id="yellow0" r="3" fill="yellow" stroke="black" stroke-width="0.4" />
            <circle id="yellow1" r="3" fill="yellow" stroke="black" stroke-width="0.4" />
            <circle id="yellow2" r="3" fill="yellow" stroke="black" stroke-width="0.4" />
            <circle id="yellow3" r="3" fill="yellow" stroke="black" stroke-width="0.4" />      

            <circle id="red0" r="3" fill="red" stroke="black" stroke-width="0.4" />
            <circle id="red1" r="3" fill="red" stroke="black" stroke-width="0.4" />
            <circle id="red2" r="3" fill="red" stroke="black" stroke-width="0.4" />
            <circle id="red3" r="3" fill="red" stroke="black" stroke-width="0.4" />

            <circle id="blue0" r="3" fill="blue" stroke="black" stroke-width="0.4" />
            <circle id="blue1" r="3" fill="blue" stroke="black" stroke-width="0.4" />
            <circle id="blue2" r="3" fill="blue" stroke="black" stroke-width="0.4" />
            <circle id="blue3" r="3" fill="blue" stroke="black" stroke-width="0.4" />

            <circle id="green0" r="3" fill="green" stroke="black" stroke-width="0.4" />
            <circle id="green1" r="3" fill="green" stroke="black" stroke-width="0.4" />
            <circle id="green2" r="3" fill="green" stroke="black" stroke-width="0.4" />
            <circle id="green3" r="3" fill="green" stroke="black" stroke-width="0.4" />

        </svg>`;
    showYellow(0);
    showYellow(1);
    showYellow(2);
    showYellow(3);
    showRed(0);
    showRed(1);
    showRed(2);
    showRed(3);
    showBlue(0);
    showBlue(1);
    showBlue(2);
    showBlue(3);
    showGreen(0);
    showGreen(1);
    showGreen(2);
    showGreen(3);

}

function movePieceWithSlider() {
    var col = parseFloat(document.getElementById('col').value);
    var row = parseFloat(document.getElementById('row').value);
    movePiece('yellow', 1, col, row);
    movePiece('red', 1, col, row);
}

function movePiece(color, pieceNo, col, row) {
    var cx = col * 10.9 - 4.8;
    var cy = row * 10.9 - 4.8;
    document.getElementById('colOut').innerHTML = col;
    document.getElementById('rowOut').innerHTML = row;
    document.getElementById(color + pieceNo).style.cx = cx;
    document.getElementById(color + pieceNo).style.cy = cy;
}
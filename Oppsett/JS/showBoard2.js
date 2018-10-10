function showBoard2() {
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
            <text x="37" y="8" font-family="sans-serif" font-size="6px" fill="black">a</text>
            <text x="37" y="19" font-family="sans-serif" font-size="6px" fill="black">m</text>
            <text x="38" y="30" font-family="sans-serif" font-size="6px" fill="black">i</text>
            <text x="59" y="19" font-family="sans-serif" font-size="6px" fill="black">l</text>
            <text x="59" y="30" font-family="sans-serif" font-size="6px" fill="black">s</text>
            <!-- Blå siden -->
            <text x="70" y="41" font-family="sans-serif" font-size="6px" fill="black">k</text>
            <text x="81" y="41" font-family="sans-serif" font-size="6px" fill="black">o</text>
            <text x="92" y="41" font-family="sans-serif" font-size="6px" fill="black">r</text>
            <text x="70" y="63" font-family="sans-serif" font-size="6px" fill="black">d</text>
            <text x="81" y="63" font-family="sans-serif" font-size="6px" fill="black">u</text>
            <!-- Grønne siden -->
            <text x="59" y="74" font-family="sans-serif" font-size="6px" fill="black">e</text>
            <text x="59" y="85" font-family="sans-serif" font-size="6px" fill="black">h</text>
            <text x="59" y="96" font-family="sans-serif" font-size="6px" fill="black">j</text>
            <text x="37" y="74" font-family="sans-serif" font-size="6px" fill="black">v</text>
            <text x="37" y="85" font-family="sans-serif" font-size="6px" fill="black">n</text>
            <!-- Gule siden -->
            <text x="26" y="63" font-family="sans-serif" font-size="6px" fill="black">t</text>
            <text x="15" y="63" font-family="sans-serif" font-size="6px" fill="black">p</text>
            <text x="4" y="63" font-family="sans-serif" font-size="6px" fill="black">f</text>
            <text x="15" y="41" font-family="sans-serif" font-size="6px" fill="black">b</text>
            <text x="26" y="41" font-family="sans-serif" font-size="6px" fill="black">g</text>


        </svg>`;
}

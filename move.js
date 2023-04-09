function move(element) {
    element.style.position = "fixed"

    function moveToCoordinates(left, bottom) {
        element.style.left = left + "px"
        element.style.bottom = bottom + "px"
    }

    function moveWithArrowKeys(left, bottom, callback){

        // =============================================
            // starting position for character on page load

        let direction = null;
        let x = 100;
        let y = 250;

        // =============================================
            // Listen for when user presses key and change direction variable in accordance

            document.addEventListener("keydown", function(e){
                if(e.repeat) return;
            
                if(e.key === "ArrowLeft"){
                    direction = "west"
                }
                if(e.key === "ArrowUp"){
                    direction = "north"
                }
                if(e.key === "ArrowRight"){
                    direction = "east"
                }
                if(e.key === "ArrowDown"){
                    direction = "south"
                }
                callback(direction)
            })
            
            document.addEventListener("keyup", function(e){
                direction = null
                callback(direction)
            })            

        // =============================================
            // Move the character based on x and y variables

            function moveCharacter(){
                if(direction === "west"){
                    x = x - 1
                }
                if(direction === "north"){
                    y = y + 1
                }
                if(direction === "east"){
                    x = x + 1
                }
                if(direction === "south"){
                    y = y - 1
                }
                character.style.left = x + "px";
                character.style.bottom = y + "px";

            } // function moveCharacter end

        // =============================================
            // Create speed at which the character is moving

            setInterval(moveCharacter, 1)    
        

        // =============================================
            // Listen for if the user lets go of the key and return the direction to null

            document.addEventListener("keyup", function(e){
                direction = null;
                callback(direction)
            })

    } // function moveWithArrowKeys end

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

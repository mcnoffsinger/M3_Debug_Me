//Maxwell Noffsinger
//1/24/25


let v1 = 3;
let v2 = 4;
//Had to uncomment it and add quotes around "equals", I also added semicolons to some stuff for conventions
alert("3 times 4" + " equals " + v1 * v2);



 // This sets the general styling for the divs within the section tag using .style

 //changed getElements to getElement. Style was spelled wrong
            let section = document.getElementById("s1")
            section.style.width = "50%"
            section.style.textAlign = "center"
            section.style.fontFamily = "arial, serif"
            section.style.fontWeight = "bold"
            section.style.fontStyle = "italic"
            section.style.fontSize = "20px"

            // Sets the customization for each individual color/div tag
			//.innerHTML is used to add content within each div tag.
			//.style.backgroundColor is used to assign a different background color to each div
			
            // RED. Needed to capitalize E
            let red = document.getElementById("red")
            red.innerHTML = "RED"
            red.style.backgroundColor = "red"

            // ORANGE. capitalize HTML
            let orange = document.getElementById("orange")
            orange.innerHTML = "ORANGE"
            orange.style.backgroundColor = "orange"

            // YELLOW
            let yellow = document.getElementById("yellow")
            yellow.innerHTML = "YELLOW"
            yellow.style.backgroundColor = "yellow"

            // GREEN
            let purple = document.getElementById("green")
            green.innerHTML = "GREEN"
            green.style.backgroundColor = "green"

            // INDIGO
            const indigo = document.getElementById("indigo")
            indigo.innerHTML = "INDIGO"
            indigo.style.backgroundColor = "indigo"

            // PURPLE
            const violet = document.getElementById("violet")
            violet.innerHTML = "VIOLET"
            violet.style.backgroundColor = "violet"
// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


// YOUR CODE GOES HERE

    function addParagraphs()
    {
        //Intro Paragraph
        let IntroParagraph = document.getElementById("IntroParagraph");
        if(IntroParagraph)
        {
            let firstParagraph = document.createElement("p");
            firstParagraph.textContent = `Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.`; 
            IntroParagraph.appendChild(firstParagraph);

            let secondParagraph = document.createElement("p");
            secondParagraph.textContent = `Greece has 1,400 islands, though only 230 of them are inhabited.`;
            IntroParagraph.appendChild(secondParagraph);

            let thirdParagraph = document.createElement("p");
            thirdParagraph.textContent =`And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.`;
            IntroParagraph.appendChild(thirdParagraph);
        }

        //Folegandros
        let Folegandros = document.getElementById("Folegandros");
        if(Folegandros)
        {
            Folegandros.textContent = `Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.`;
        }

        //Alonissos
        let Alonissos = document.getElementById("Alonissos");
        if(Alonissos)
        {
            Alonissos.textContent = `Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.`;
        }

        //Spetses
        let Spetses = document.getElementById("Spetses");
        if(Spetses)
        {
           Spetses.textContent = `This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.`;
        }

        //Amorgos
        let Amorgos = document.getElementById("Amorgos");
        if(Amorgos)
        {
            Amorgos.textContent = `Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.`;
        }

        //Syros
        let Syros = document.getElementById("Syros");
        if(Syros)
        {
            Syros.textContent = `A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.`;
        }

        //Milos
        let Milos = document.getElementById("Milos");
        if(Milos)
        {
            Milos.textContent = `This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.`;
        }

        //Hydra
        let Hydra = document.getElementById("Hydra");
        if(Hydra)
        {
            Hydra.textContent = `The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.`;
        }

        //Ithaca
        let Ithaca = document.getElementById("Ithaca");
        if(Ithaca)
        {
            Ithaca.textContent = `Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.`;
        }

        //Gavdos
        let Gavdos = document.getElementById("Gavdos");
        if(Gavdos)
        {
           Gavdos.textContent = `Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.`;
        }
    }

    function formValidation()
    {
        let contactForm = document.getElementsByTagName("form")[0];

        if(contactForm)
        {
            contactForm.noValidate = true;
            //let panelHead = document.getElementsByClassName("panel-heading");
            /* let errorMessage = document.createElement("div")
            errorMessage.setAttribute("class", "alert alert-danger");
            errorMessage.setAttribute("role", "alert");
            errorMessage.setAttribute("hidden", "true"); */
            
            //First Name Validation
            let firstName = document.getElementById("firstName")
            firstName.addEventListener("blur", (event) =>
            {
                if(firstName.value.length < 2)
                {
                    firstName.focus();
                    /* errorMessage.hidden = false;
                    errorMessage.textContent = "Please insert a valid first name"
                    panelHead.appendChild(errorMessage); */
                }
            });

            //Last Name Validation
            let lastName = document.getElementById("lastName")
            lastName.addEventListener("blur", (event) =>
            {
                if(lastName.value.length < 2)
                {
                    lastName.focus();
                    /* errorMessage.hidden = false;
                    errorMessage.textContent = "Please insert a valid first name"
                    panelHead.appendChild(errorMessage); */
                }
            });

            //Contact Number Validation
            let contactNumber = document.getElementById("contactNumber")
            contactNumber.addEventListener("blur", (event) =>
            {
                if(contactNumber.value.match(/^\d{10}$/))
                {
                    
                }
                else
                {
                    contactNumber.focus();
                    /* errorMessage.hidden = false;
                    errorMessage.textContent = "Please insert a valid first name"
                    panelHead.appendChild(errorMessage);*/ 
                }
            });

            //Email Validation
            let email = document.getElementById("email")
            email.addEventListener("blur", (event) =>
            {
                if(email.value.match(/^([^\.-_])([\w\.-]+)@([a-zA-Z0-9-]+).([a-z]){2,4}(\.[a-z]{2,4})?$/))
                {
                    
                }
                else
                {
                    email.focus();
                    /* errorMessage.hidden = false;
                    errorMessage.textContent = "Please insert a valid first name"
                    panelHead.appendChild(errorMessage); */
                }
            }); 

            //Message input
            let yourMessage = document.getElementById("yourMessage")

            //Send button
            let sendButton = document.getElementById("sendButton");
            sendButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                console.log(`First name is: ${firstName.value}`);
                console.log(`Last name is: ${lastName.value}`);
                console.log(`Contact number is: ${contactNumber.value}`);
                console.log(`Email is: ${email.value}`);
                console.log(`The message is: ${yourMessage.value}`);
                
            });
        }
    }

    function Start()
    {
        console.log('%cApp Started...', "color:purple; font-size: 24px;");

        let paragraph = addParagraphs();
        if(paragraph) 
        {
            console.log("Successfully added paragraphs to jumbotron");
        }

        let validation = formValidation();
        if(validation)
        {
            console.log("Successfully validated form");
        }
        else
        {
            console.warn("Form not validated - does not exist");
        }
    }

    window.addEventListener("load", Start);

})();


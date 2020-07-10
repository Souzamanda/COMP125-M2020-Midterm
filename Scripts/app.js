/*  File name: app.js
    Author's name: Amanda Cordeiro de Souza Puttomatti
    Web site name: The travel Report
    File Description: Javascript file */

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


// YOUR CODE GOES HERE

    // FUNCTION TO ADD PARAGRAPHS TO THE PAGE
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

    // FUNCTION TO VALIDATE THE FORM'S INPUTS
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
                    console.error("Please enter a valid first name. With at least 2 characters.");
                }
            });

            //Last Name Validation
            let lastName = document.getElementById("lastName")
            lastName.addEventListener("blur", (event) =>
            {
                if(lastName.value.length < 2)
                {
                    lastName.focus();
                    console.error("Please enter a valid last name. With at least 2 characters.");
                }
            });

            //Contact Number Validation
            let contactNumber = document.getElementById("contactNumber")
            contactNumber.addEventListener("blur", (event) =>
            {
                if(!contactNumber.value.match(/^[(]{0,1}\d{3}[)]{0,1}[-\s\.]{0,1}\d{3}[-\s\.]{0,1}\d{4}$/)) //RegEx to check if the number has 10 digits and can be in some formats (123) 456 7890, (123) 456-7890, 123-456-7890, 1234567890
                {
                    contactNumber.focus();
                    console.error("Please enter a valid contact number, with the area code.");
                }
            });

            //Email Validation
            let email = document.getElementById("email")
            email.addEventListener("blur", (event) =>
            {
                if(!email.value.match(/^([^\.-_])([\w\.-]+)@([a-zA-Z0-9-]+).([a-z]){2,4}(\.[a-z]{2,4})$/)) //RegEx to check if the input has the format of an email
                {
                    email.focus();
                    console.error("Please enter a valid email.");
                }
            }); 

            //Send button exibits form inputs
            let sendButton = document.getElementById("sendButton");
            sendButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                console.log(`%cFirst name is: ${firstName.value}`, "color: LIGHTSTEELBLUE; font-size: 16px;");
                console.log(`%cLast name is: ${lastName.value}`, "color: LIGHTSTEELBLUE; font-size: 16px;");
                console.log(`%cContact number is: ${contactNumber.value}`, "color: LIGHTSTEELBLUE; font-size: 16px;");
                console.log(`%cEmail is: ${email.value}`, "color: LIGHTSTEELBLUE; font-size: 16px;");
                console.log(`%cThe message is: ${yourMessage.value}`, "color: STEELBLUE; font-size: 16px;");
                
            });

            return true;
        }
    }

    //Add carousel at the top of the page
    function addCarousel()
    {
        let siteTop = document.getElementById("9Islands");
        if(siteTop)
        {
            let carousel = document.createElement("div")
            carousel.innerHTML = `
                <hr>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="#Folegandros"><img src="./Assets/images/folegandros.jpg" class="d-block w-100" alt="Folegandros" href="#Folegandros"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Alonissos"><img src="./Assets/images/alonissos.jpg" class="d-block w-100" alt="Alonissos"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Spetses"><img src="./Assets/images/spetses.jpg" class="d-block w-100" alt="Spetses"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Amorgos"><img src="./Assets/images/amorgos.jpg" class="d-block w-100" alt="Amorgos"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Syros"><img src="./Assets/images/syros.jpg" class="d-block w-100" alt="Syros"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Milos"><img src="./Assets/images/milos.jpg" class="d-block w-100" alt="Milos"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Hydra"><img src="./Assets/images/hydra.jpg" class="d-block w-100" alt="Hydra"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Ithaca"><img src="./Assets/images/ithaca.jpg" class="d-block w-100" alt="Ithaca"></a>
                </div>
                <div class="carousel-item">
                    <a href="#Gavdos"><img src="./Assets/images/gavdos.jpg" class="d-block w-100" alt="Gavdos"></a>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            `;
            siteTop.appendChild(carousel);
        }
    }

    /* function smoothScroll(target,duration)
    {
        let target = document.querySelector(target);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime)
        {
            if(startTime === null)
            {
                startTime = currentTime;
            }
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0,run);
            if(timeElapsed < duration)
            {
                requestAnimationFrame(animation);
            }
        }

        function ease(t, b, c, d)
        {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);

    } */

    /* let mainContent = document.querySelector('#mainContent');
    mainContent.addEventListener("click", (event) =>
    {
        smoothScroll('#contact', 3000);
    });

    let contact = document.querySelector('#contact');
    contact.addEventListener("click", (event) =>
    {
        smoothScroll('#mainContent', 3000);
    }); */

    
    function Start()
    {
        console.log('%cApp Started...', "color: #9932CC; -webkit-text-stroke: 1.5px #4B0082; font-size: 30px; font-weight:bold");

        addParagraphs();
        
        formValidation();

        addCarousel();
    }

    window.addEventListener("load", Start);

})();


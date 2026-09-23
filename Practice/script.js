const events = [

    {
        name: "AI Workshop",
        category: "Technical",
        date: "25 September 2026"
    },

    {
        name: "Web Development Workshop",
        category: "Technical",
        date: "28 September 2026"
    },

    {
        name: "Photography Competition",
        category: "Competition",
        date: "4 October 2026"
    }

];


function displayEvents(eventList) {

    const container =
        document.getElementById("event-container");

    container.innerHTML = "";

    eventList.forEach(event => {

        container.innerHTML += `

            <div class="event-card">

                <h3>
                    ${event.name}
                </h3>

                <p>
                    ${event.category}
                </p>

                <p>
                    ${event.date}
                </p>

            </div>

        `;

    });

}


function filterEvents(category, selectedButton) {

    const buttons =
        document.querySelectorAll(".filter-btn");


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    selectedButton.classList.add("active");


    let filteredEvents;


    if (category === "all") {

        filteredEvents = events;

    } else {

        filteredEvents =
            events.filter(event => {

                return event.category === category;

            });

    }


    displayEvents(filteredEvents);

}


displayEvents(events);
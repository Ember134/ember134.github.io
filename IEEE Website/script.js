// =========================
// EVENT DATA
// =========================

const events = [

    {
        name: "AI Workshop",
        category: "Technical",
        date: "25 September 2026",
        location: "Mansoura National University",
        description:
            "An introductory workshop covering the fundamentals of Artificial Intelligence."
    },

    {
        name: "Web Development Workshop",
        category: "Technical",
        date: "28 September 2026",
        location: "Mansoura National University",
        description:
            "Learn the fundamentals of HTML, CSS, JavaScript and modern web development."
    },

    {
        name: "Photography Competition",
        category: "Competition",
        date: "4 October 2026",
        location: "Mansoura National University",
        description:
            "A creative photography competition for students."
    }

];


// =========================
// DISPLAY EVENTS
// =========================

function displayEvents(eventList) {

    const container =
        document.getElementById("event-container");

    container.innerHTML = "";


    eventList.forEach((event, index) => {

        container.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <article class="event-card">

                    <p class="event-category text-primary">
                        ${event.category}
                    </p>

                    <h3>
                        ${event.name}
                    </h3>

                    <p>
                        ${event.date}
                    </p>

                    <button
                        class="btn btn-primary"
                        onclick="showEventDetails(${index})"
                    >
                        Details
                    </button>

                </article>

            </div>

        `;

    });

}


// =========================
// FILTER EVENTS
// =========================

function filterEvents(category, selectedButton) {

    // Get all filter buttons
    const buttons = document.querySelectorAll(".filter-btn");


    // Reset every button
    buttons.forEach(button => {

        button.classList.remove("btn-primary");
        button.classList.add("btn-outline-primary");

    });


    // Highlight the selected button
    selectedButton.classList.remove("btn-outline-primary");
    selectedButton.classList.add("btn-primary");


    // Filter the events
    let filteredEvents;


    if (category === "all") {

        filteredEvents = events;

    } else {

        filteredEvents = events.filter(event => {

            return event.category === category;

        });

    }


    // Display filtered events
    displayEvents(filteredEvents);

}


// =========================
// SHOW EVENT DETAILS
// =========================

function showEventDetails(index) {

    const event = events[index];


    document.getElementById("modalEventName")
        .textContent = event.name;


    document.getElementById("modalEventCategory")
        .textContent = event.category;


    document.getElementById("modalEventDate")
        .textContent = event.date;


    document.getElementById("modalEventLocation")
        .textContent = event.location;


    document.getElementById("modalEventDescription")
        .textContent = event.description;


    const modalElement =
        document.getElementById("eventModal");


    const modal =
        new bootstrap.Modal(modalElement);


    modal.show();

}


// =========================
// INITIALIZE
// =========================

displayEvents(events);
const events = [
    {
        name: "AI Workshop",
        category: "Technical",
        date: "25 September"
    },

    {
        name: "Web Development Workshop",
        category: "Technical",
        date: "28 September"
    },

    {
        name: "Photography Competition",
        category: "Competition",
        date: "4 October"
    }
];


function displayEvents(eventList) {

    const container = document.getElementById("events");

    container.innerHTML = "";

    eventList.forEach(event => {

        container.innerHTML += `
            <div class="card">

                <h2>${event.name}</h2>

                <p>Category: ${event.category}</p>

                <p>Date: ${event.date}</p>

                <button>Details</button>

            </div>
        `;

    });
}


function filterEvents(category) {

    const filtered = events.filter(event => {

        if (category === "all") {
            return true;
        }

        return event.category === category;

    });

    displayEvents(filtered);
}


// Show all events when the page first loads
displayEvents(events);
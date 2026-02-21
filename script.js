fetch("/api/stats")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("stats");

        Object.entries(data).forEach(([key, value]) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h2>${value}</h2>
                <p>${key.toUpperCase()}</p>
            `;

            container.appendChild(card);
        });
    });

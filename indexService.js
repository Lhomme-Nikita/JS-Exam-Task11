const BASE_URL = 'https://melon-potent-period.glitch.me';

const addSkillButton = document.getElementById("add-skill-button");

addSkillButton.addEventListener("click", () => {
    window.location.href = "add.html";
});

fetch(`${BASE_URL}/skills`)
    .then((response) => response.json())
    .then((data) => {
        const skillsList = document.getElementById("skills-list");

        data.forEach((skill) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${skill.id}</td>
        <td>${skill.skill}</td>
        <td><button class="delete-button" data-id="${skill.id}">Delete</button></td>
      `;

            const deleteButton = row.querySelector(".delete-button");
            deleteButton.addEventListener("click", () => {
                const skillId = deleteButton.getAttribute("data-id");

                fetch(`https://melon-potent-period.glitch.me/skill/${skillId}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        if (response.ok) {
                            location.reload();
                        } else {
                            throw new Error("Failed to delete skill.");
                        }
                    })
                    .catch((error) => {
                        alert("Error deleting skill: " + error.message);
                    });
            });

            skillsList.appendChild(row);
        });
    })
    .catch((error) => {
        alert("Error fetching skills: " + error.message);
    });
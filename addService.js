const BASE_URL = 'https://melon-potent-period.glitch.me';

const viewSkillsButton = document.getElementById("view-skills-button");
const addSkillButton = document.getElementById("add-skill-button");
const skillInput = document.getElementById("skill-input");

viewSkillsButton.addEventListener("click", () => {
	window.location.href = "index.html";
});

addSkillButton.addEventListener("click", () => {
	const newSkill = skillInput.value;

	fetch(`${BASE_URL}/skills`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ skill: newSkill }),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Failed to add skill.");
			}
		})
		.then(() => {
			alert("Skill added successfully!");
			window.location.href = "index.html";
		})
		.catch((error) => {
			alert("Error adding skill: " + error.message);
		});
});
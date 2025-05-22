export function buildContactPage() {
    const content = document.querySelector("#content")

    content.innerHTML = "";

    const contactTitle = document.createElement("div");
    contactTitle.className = "contact-title";
    contactTitle.innerHTML = "<h1>Contact Us</h1>";
    content.appendChild(contactTitle);

    const contacts = [
        {
            name: "Olivia Perry",
            position: "Owner",
            phone: "555-555-5555",
            email: "totallyRealEmail@notFake.com",
        },
        {
            name: "Steve Minecraft",
            position: "Waiter",
            phone: "555-555-5556",
            email: "mrMinecraftMan@notFake.com",
        },
    ]

    for (var i=0; i<contacts.length; i++) {
        const contact = document.createElement("div");
        contact.className = "contact-info";
        contact.innerHTML = `<h2>${contacts[i].name}</h2><h3>${contacts[i].position}</h3><p>${contacts[i].phone}</p><p>${contacts[i].email}</p>`
        content.appendChild(contact);
    }
}
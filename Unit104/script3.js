const name = "Chris",
job = "web Developer";

    console.log("Name: " + name + ', Job: ' + job);
    console.log(`Name: ${name}, Job: ${job}`);

    const div = document.getElementById("msg");
    let html2= `<ul>
                <li> Name: ${name} </li>
                <li> Job: ${job}</li>
                </ul>
                `;
                div.innerHTML=html2;
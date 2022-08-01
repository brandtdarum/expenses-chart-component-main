
fetch("../../data.json")
.then(response => {
    return response.json();
})
.then(data => {
    main(data);
});


function main(data) {
    console.log(data);
    let max = 0;
    let percentage = 0;

    for(let i = 0; i < data.length; i++) {
        if(data[i].amount > max) max = data[i].amount;
    }
    
    for(let i = 0; i < data.length; i++) {
        percentage = (data[i].amount/max) * 100;

        if(percentage == 100)
            document.querySelector("#" + data[i].day + " .statbar").style['background-color'] = "hsl(186, 34%, 60%)";

        document.querySelector("#" + data[i].day + " .statbar").style.height = percentage + "%";
        document.querySelector("#" + data[i].day + " .statbar").dataset.text = "$"+data[i].amount;
    }

    console.log(max);
}
var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById('a_generate');
var inp_aspeed = document.getElementById('a_speed');

var butts_algo = document.querySelectorAll('.algos-right button');
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "fflex-direction:row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array(){
    cont.innerHTML = "";
    for(var i=0; i<array_size; i++){
        div_sizes[i] = Math.floor(Math.random()*0.5*(inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        // console.log(divs[i]);
        divs[i].style = " margin:0% " + margin_size + "%; background-color:rgb(28, 11, 88); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size(){
    array_size = inp_as.value;
    generate_array();
}
window.onload = update_array_size();

for(var i=0; i<butts_algo.length; i++)
{
    // console.log(butts_algo.length);
    butts_algo[i].addEventListener("click", runalgo);
}

function runalgo(){
    this.classList.add("butt_selected");
    switch(this.innerHTML){
        case "Bubble Sort": Bubble();
            break;
        case "Selection Sort": Selection_sort();
            break;
        case "Insertion Sort": Insertion();
            break;
        case "Merge Sort": Merge();
            break;
        case "Quick Sort": Quick();
            break;
        default:
            break;

    }
}

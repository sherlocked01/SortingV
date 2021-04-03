function Quick() {
    c_delay = 0;

    quick_sort(0, array_size - 1);
}
function partition(low, high) {
    var i = low + 1;
    var pivot = div_sizes[low];
    div_update(divs[low], div_sizes[low], "yellow");

    for (var j = low + 1; j <= high; j++) {
        if (div_sizes[j] < pivot) {
            div_update(divs[j], div_sizes[j], "yellow");

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            div_update(divs[i], div_sizes[i], "blue");
            div_update(divs[j], div_sizes[j], "blue");

            i++;

        }
    }
    div_update(divs[low], div_sizes[low], "red");
    div_update(divs[i - 1], div_sizes[i - 1], "red");

    var temp = div_sizes[low];
    div_sizes[low] = div_sizes[i-1];
    div_sizes[i-1] = temp;

    div_update(divs[low], div_sizes[low], "red");
    div_update(divs[i - 1], div_sizes[i - 1], "red");

    for(var t=0; t<=i; t++){
        div_update(divs[t], div_sizes[t], "green");
    }

    return i-1;

}
function quick_sort(low, high) {
    if (low < high) {
        var pi = partition(low, high);
        quick_sort(low, pi - 1);
        quick_sort(pi + 1, high);
    }
}
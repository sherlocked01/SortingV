function Selection_sort() {
    c_delay = 0;
    for (var i = 0; i < array_size - 1; i++) {
        div_update(divs[i], div_sizes[i + 1], "red");
        var min_index = i;

        for (var j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow");

            if (div_sizes[j] < div_sizes[min_index]) {
                
                if(min_index!=i)
                {
                    div_update(divs[min_index], div_sizes[min_index], "rgb(28, 11, 88)");
                }
                min_index = j;
                div_update(divs[min_index], div_sizes[min_index], "red");
            }
            else{
                div_update(divs[j], div_sizes[j], "rgb(28, 11, 88)");
            }
        }
        div_update(divs[min_index], div_sizes[min_index], "red");
        div_update(divs[i], div_sizes[i], "red");

        if (min_index != i) {
            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[min_index];
            div_sizes[min_index] = temp;

            div_update(divs[min_index], div_sizes[min_index], "red");
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[min_index], div_sizes[min_index], "rgb(28, 11, 88)");
        }

        div_update(divs[i], div_sizes[i], "green");

    }
    div_update(divs[array_size - 1], div_sizes[array_size - 1], "green");
}
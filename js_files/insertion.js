function Insertion()
{
    c_delay=0;
    for(var j=0; j<array_size; j++){
        div_update(divs[j], div_sizes[j], "yellow");
        var i = j-1;
        var key = div_sizes[j];

        while(i>=0 && div_sizes[i]>key){
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[i+1], div_sizes[i+1], "red");

            div_sizes[i+1]=div_sizes[i];
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[i+1], div_sizes[i+1], "red");

            div_update(divs[i], div_sizes[i], "rgb(28, 11, 88)");
            if(i==j-1)
            {
                div_update(divs[i+1], div_sizes[i+1], "yellow");
            }
            else
            {
                div_update(divs[i+1], div_sizes[i+1], "rgb(28, 11, 88)");
            }
            i--;
        }
        div_sizes[i+1]=key;
        for(var k=0; k<j; k++){
            div_update(divs[k], div_sizes[k], "green");
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");
}
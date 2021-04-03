function Merge() {

    c_delay = 0;
    merge_partition(0, array_size - 1);
}
function merge_sort(start, mid, end) {
    var s = start, m = mid + 1;
    var arr = [];
    var k = 0;

    for (var i = start; i <= end; i++) {
        if (s > mid) {
            arr[k++] = div_sizes[m++];
            div_update(divs[m - 1], div_sizes[m - 1], "red");
        }
        else if (m > end) {
            arr[k++] = div_sizes[s++];
            div_update(divs[s - 1], div_sizes[s - 1], "red");
        }
        else if (div_sizes[s] < div_sizes[m]) {
            arr[k++] = div_sizes[s++];
            div_update(divs[s - 1], div_sizes[s - 1], "red");
        }
        else {
            arr[k++] = div_sizes[m++];
            div_update(divs[m - 1], div_sizes[m - 1], "red");
        }

    }
    for (var t = 0; t < k; t++) {
        div_sizes[start++] = arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green");
    }
}
function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);

    }

}
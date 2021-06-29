guest_array = [];
function submit() {
    var guestname = document.getElementById("name1").value;
    guest_array.push(guestname);
    console.log(guest_array);
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("name1").value = "";
    }
function show(){
    document.getElementById("show_names").innerHTML = guest_array;
}
function sort() {
   guest_array.sort();
    console.log(guest_array);
     document.getElementById("display_sorted_list").innerHTML = guest_array;
}
function search(){
    var s= document.getElementById("search_name").value;
    var found=0;
    var j;
    for(j=0; j<guest_array.length; j++){
        if(s==guest_array[j]){
            found=found+1;
        }
    }
    document.getElementById("search_list").innerHTML="name found"+found+"time";
    document.getElementById("search_name").value=" ";
}





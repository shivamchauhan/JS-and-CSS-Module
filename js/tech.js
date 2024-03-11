    $(function() {
        fetchJSONData();
       });
       
       function fetchJSONData() {
         fetch("./sample.json")
             .then((res) => {
                 if (!res.ok) {
                     throw new Error
                         (`error! Status: ${res.status}`);
                 }
                 return res.json();
             })
             .then((data) => showData(data))
             .catch((error) => 
                    console.error("Unable to fetch data:", error));
       }
       
function showData(data){
    console.log(data);
    var output = data.map(i => "<tr><td>" + i.id + "</td><td>" + i.name + "</td><td>" + i.email + "</td><td>" + i.course + "</td><td>" + i.duration + "</td><td>"+i.status+"</td></tr>");
    $(".data_table").html(output);
}
       
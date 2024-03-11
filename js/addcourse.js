let data = [
    {id:1719624932341, name: "Thomas", email: "thomas@gmail.com", phonenumber: "9650878821", course: "html"},
    {id:1719624932342, name: "Rahul", email: "rahul@gmail.com", phonenumber: "9650878822", course:"css"}
]

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.phonenumber}</td>
            <td>${record.course}</td>
            <td>
                <button class="edit" onclick={edit(${record.id})}>Edit</button>
                <button class="delete" onclick={delete1(${record.id})}>Delete</button>
            </td>
        </tr>`  
    ))

    tabledata.innerHTML = elements;
};

function delete1(id) {
    if (confirm("Are you sure want to delete!")) {
        data = data.filter(rec => rec.id !== id);
        document.querySelector('.name').value = "";
        document.querySelector('.email').value = "";
        document.querySelector('.phonenumber').value = "";
        document.querySelector('.course').value = "";
        readAll();
    } 
  }


function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
    document.querySelector('.name').value = "";
    document.querySelector('.email').value = "";
    document.querySelector('.phonenumber').value = "";
    document.querySelector('.course').value = "";
    const addBtn = document.querySelector("#btnUpdateSave");
    addBtn.innerText = 'Add Course';
    document.querySelector('.id').value = 'NaN'
}

var elm=document.getElementById("btnUpdateSave");
elm.onclick= function (){
    var id = parseInt(document.querySelector('.id').value);
    if(isNaN(id)){
        add();
    }else{
        update();
    }
};

function add() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var phonenumber = document.querySelector(".phonenumber").value;
    var course = document.querySelector(".course").value;
    var uniqueNum = new Date().getTime();
    var newObj = {id: uniqueNum, name: name, email: email, phonenumber: phonenumber, course: course};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}


function edit(id) {
    document.querySelector(".create_form").style.display = "block";
    const addBtn = document.querySelector("#btnUpdateSave");
    addBtn.innerText = 'Update Course';
     var obj = data.find(rec => rec.id === id);
     document.querySelector('.name').value = obj.name;
     document.querySelector('.email').value = obj.email;
     document.querySelector('.phonenumber').value = obj.phonenumber;
     document.querySelector('.course').value = obj.course;
     document.querySelector('.id').value = obj.id;
}


function update() {
    var id = parseInt(document.querySelector('.id').value);
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var phonenumber = document.querySelector('.phonenumber').value;
    var course = document.querySelector('.course').value;
    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name , email, phonenumber, course};
    readAll();
}
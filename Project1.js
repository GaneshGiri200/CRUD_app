let students = [
    {
        name: "Manish Rajput",
        age: 15,
        city: "Mumbai",
        height: "4.5"
    },
    {
        name: "Satish Bansode",
        age: 20,
        city: "Nagpur",
        height: "5.1"
    },
    {
        name: "Yogesh Ghule",
        age: 17,
        city: "pune",
        height: "4,8"
    },
    {
        name: "Sachin Chudhari",
        age: 16,
        city: "pune",
        height: "4.9"
    },
];

function display(superarray)
{
    let tabledata = "";
    let srno = 1;
    superarray.forEach(function (student,index) {
        let currentrow = 
        `<tr>
        <td>${srno}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
        <td>${student.height}</td>
        <td>
            <button onclick="deletStudent(${index})">Delet</button>
            <button type="submit" onclick="Popup(${index})">Update</button>
        </td>
        </tr>`;

        tabledata += currentrow;
        srno++;
    });

    //document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    document.getElementById("tdata").innerHTML = tabledata;
}
display(students);
 
function addStudent(e)
{
   e.preventDefault();

   let student = {} //creating blank object

   let name = document.getElementById("name").value;
   let age = document.getElementById("age").value;
   let city = document.getElementById("city").value;
   let height = document.getElementById("height").value;

   student.name = name;
   student.age = Number(age);
   student.city = city;
   student.height = height;

   students.push(student);

   console.log(students); 
   display(students);

   document.getElementById("name").value = "";
   document.getElementById("age").value = "";
   document.getElementById("city").value = "";
   document.getElementById("height").value = "";
}

function searchByName()
{
   let searchvalue = document.getElementById("searchvalue").value;
   console.log("typing..."+searchvalue);

   let newdata = students.filter(function(student)
   {
       return(student.name.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1);
    });
    console.log(newdata);
    display(newdata);
}
function deletStudent(index)
{
   students.splice(index,1);
   display(students);
}

function Popup(index)
{
   let model = document.getElementsByClassName("model")[0];
   model.style.display = "block";

   copyStudent(index);
}

function hidePopup(event)
{
    if(event.target.className == "model")
    {
        let model = document.getElementsByClassName("model")[0];
        model.style.display = "none";
    }
}

 
let updateIndex;
 
function copyStudent(index)
{
    updateIndex = index;
    let student = students[index]; 

   document.getElementById("upname").value = student.name;
   document.getElementById("upage").value = student.age;
   document.getElementById("upcity").value = student.city;
   document.getElementById("upheight").value = student.height;
}
function updateStudent(e)
{
    e.preventDefault();

    let student = students[updateIndex];
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let height = document.getElementById("upheight").value;

    student.name = name;
    student.age = Number(age);
    student.city = city;
    student.height = height;
    display(students);

    //hide popup
    let model = document.getElementsByClassName("model")[0];
    model.style.display = "none";
}
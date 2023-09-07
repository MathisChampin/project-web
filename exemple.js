function validateForm() {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var mail = document.getElementById("mail").value;
    var telephone = document.getElementById("telephone").value;
    var telephone_ecole = document.getElementById("telephone_ecole").value;
    var date_debut = document.getElementById("date_debut").value;
    var date_fin = document.getElementById("date_fin").value;
    var statut = document.getElementById("statut").value;

    if (name == "") {
        alert("Name is required");
        return false;
    }
    if (type == "") {
        alert("type is required");
        return false;
    }
    if (mail == "") {
        alert("mail is required");
        return false;
    }
    if (telephone == "") {
        alert("telephone is required");
        return false;
    }
    if (telephone_ecole == "") {
        alert("telephone ecole is required");
        return false;
    }
    if (date_debut == "") {
        alert("date début is required");
        return false;
    }
    if (date_fin == "") {
        alert("date fin is required");
        return false;
    }
    if (statut == "") {
        alert("statut is required");
        return false;
    }
    return true;
}

function showData() {
    var peopleList;
    if(localStorage.getItem("peopleList") == null)
        peopleList = [];
    else
        peopleList = JSON.parse(localStorage.getItem("peopleList"));

    var html;
    peopleList.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.type + "</td>";
        html += "<td>" + element.mail + "</td>";
        html += "<td>" + element.telephone + "</td>";
        html += "<td>" + element.telephone_ecole + "</td>";
        html += "<td>" + element.date_debut + "</td>";
        html += "<td>" + element.date_fin + "</td>";
        html += "<td>" + element.statut + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
        html += '</tr>';
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function addData() {
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var type = document.getElementById("type").value;
        var mail = document.getElementById("mail").value;
        var telephone = document.getElementById("telephone").value;
        var telephone_ecole = document.getElementById("telephone_ecole").value;
        var date_debut = document.getElementById("date_debut").value;
        var date_fin = document.getElementById("date_fin").value;
        var statut = document.getElementById("statut").value;

        var peopleList;
        if(localStorage.getItem("peopleList") == null)
            peopleList = [];
        else
            peopleList = JSON.parse(localStorage.getItem("peopleList"));

        peopleList.push({
            name : name,
            type : type,
            mail : mail,
            telephone : telephone,
            telephone_ecole : telephone_ecole,
            date_debut : date_debut,
            date_fin : date_fin,
            statut : statut,
        })

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("type").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("telephone_ecole").value = "";
        document.getElementById("date_debut").value = "";
        document.getElementById("date_fin").value = "";
        document.getElementById("statut").value = "";
    }
}

function deleteData(index) {
    var peopleList;
    if(localStorage.getItem("peopleList") == null)
        peopleList = [];
    else
        peopleList = JSON.parse(localStorage.getItem("peopleList"));

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

function updateData(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    var peopleList;
    if(localStorage.getItem("peopleList") == null)
        peopleList = [];
    else
        peopleList = JSON.parse(localStorage.getItem("peopleList"));

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("type").value = peopleList[index].type;
    document.getElementById("mail").value = peopleList[index].mail;
    document.getElementById("telephone").value = peopleList[index].telephone;
    document.getElementById("telephone_ecole").value = peopleList[index].telephone_ecole;
    document.getElementById("date_debut").value = peopleList[index].date_debut;
    document.getElementById("date_fin").value = peopleList[index].date_fin;
    document.getElementById("statut").value = peopleList[index].statut;

    document.querySelector("#update").onclick = function() {
        if (validateForm() == true) {
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].type = document.getElementById("type").value;
            peopleList[index].mail = document.getElementById("mail").value;
            peopleList[index].telephone = document.getElementById("telephone").value;
            peopleList[index].telephone_ecole = document.getElementById("telephone_ecole").value;
            peopleList[index].date_debut = document.getElementById("date_debut").value;
            peopleList[index].date_fin = document.getElementById("date_fin").value;
            peopleList[index].statut = document.getElementById("statut").value;
            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("type").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("telephone").value = "";
            document.getElementById("telephone_ecole").value = "";
            document.getElementById("date_debut").value = "";
            document.getElementById("date_fin").value = "";
            document.getElementById("statut").value = "";
            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }
    }
}
const school = [{
    "id": 1,
    "school_name": "Ghana Orphanage school",
    "visitOne": "07/15",
    "visitTwo": "01/16",
    "students": [{
        // "id": 1,
        "name": "Clyde",
        "status": "Active",
        "age": 10,
        "insurance": "Y",
        "birth certificate": "Y",
        "contact_Name": "Clyde",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 2,
        "name": "Saundra",
        "status": "Active",
        "age": 13,
        "insurance": "Y",
        "birth certificate": "N",
        "contact_Name": "Saundra",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 3,
        "name": "Lambert",
        "status": "Visitor",
        "age": 12,
        "insurance": "Y",
        "birth certificate": "Y",
        "contact_Name": "Lambert",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 4,
        "name": "Modestine",
        "status": "Active",
        "age": 8,
        "insurance": "N",
        "birth certificate": "N",
        "contact_Name": "Modestine",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 5,
        "name": "Jakob",
        "status": "Inactive",
        "age": 11,
        "insurance": "N",
        "birth certificate": "Y",
        "contact_Name": "Jakob",
        "phone_number": "123-456-7890",
    },]
  },
  {
    "id": 2,
    "school_name": "Togo Orphanage school",
    "visitOne": "09/15",
    "visitTwo": "04/16",
    "students": [{
        // "id": 1,
        "name": "Hank",
        "status": "Active",
        "age": 8,
        "insurance": "N",
        "birth certificate": "N",
        "contact_Name": "Hank",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 2,
        "name": "Kwame",
        "status": "Active",
        "age": 9,
        "insurance": "Y",
        "birth certificate": "N",
        "contact_Name": "Kwame",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 3,
        "name": "Uma",
        "status": "Inactive",
        "age": 8,
        "insurance": "Y",
        "birth certificate": "N",
        "contact_Name": "Uma",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 4,
        "name": "Imani",
        "status": "Inactive",
        "age": 14,
        "insurance": "N",
        "birth certificate": "Y",
        "contact_Name": "Imani",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 5,
        "name": "Asha",
        "status": "Active",
        "age": 10,
        "insurance": "N",
        "birth certificate": "Y",
        "contact_Name": "Asha",
        "phone_number": "123-456-7890",
    },
    {
        // "id": 6,
        "name": "Ash",
        "status": "Active",
        "age": 6,
        "insurance": "Y",
        "birth certificate": "Y",
        "contact_Name": "Ash",
        "phone_number": "123-456-7890",
    },]
  }
]

schoolIndex = 0

studentTotal = document.querySelector('.totalStudents p');
studentTotal.textContent = `${school[schoolIndex].students.length} Students`;

schooName = document.querySelector('.schoolName p');
schooName.textContent = `${school[schoolIndex].school_name}`;

visOne = document.querySelector('.visitLog').firstElementChild;
visTwo = document.querySelector('.visitLog').lastElementChild;
visOne.textContent = `Previous visit: ${school[schoolIndex].visitOne}`;
visTwo.textContent = `Last visit: ${school[schoolIndex].visitTwo}`;

for (var i = 0; i < school[schoolIndex].students.length; i++) {

  var newTempTr = document.createElement('tr');
  var tempTbod = document.querySelector('tbody');
  tempTbod.appendChild(newTempTr);

  Object.values(school[schoolIndex].students[i]).forEach(data => {

    var tempTd = document.createElement('td');
    tempTd.textContent = `${data}`;
    newTempTr.appendChild(tempTd);
  })

};


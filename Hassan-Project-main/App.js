 const data1 = [
    {
      name: 'Hasan Imran',
      grNo: '47',
      technology: 'CIT',
      section: 'A',
      shift: 'Morning',
      email: 'hasanimranishaque@gmail.com',
      account: 'hasanimranishaque@gmail.com',
      password: '1234567',
      address: 'Gulistan-e-jauhar / Block-19, Gulshan Banglows- Street # 4 / House R-49',
      img: 'img/student2.jpg'
    }, ];
    const data2 = [ 
    {
      name: 'Syed Samar Ali Shah',
      grNo: '13',
      technology: 'CIT',
      section: 'A',
      shift: 'Morning',
      email: 'syedsamarali398@gmail.com',
      account: 'syedsamarali398@gmail.com',
      password: '1234567',
      address: 'R-393 sector 15/B, Buffer Zone North Nazimabad, Karachi',
      img: 'img/student1.jpg'
    },];
    const data3 = [
    {
      name: 'Huzaifa Nizam',
      grNo: '62',
      technology: 'CIT',
      section: 'A',
      shift: 'Morning',
      email: 'huzaifameo48@gmail.com',
      account: 'huzaifameo48@gmail.com',
      password: '1234567',
      address: 'Manzoor colony Eid gah chowk/house 7, street 31',
      img: 'img/student4.jpg'
    },];
    const data4 = [
    {
      name: 'Hussain Imran',
      grNo: '46',
      technology: 'CIT',
      section: 'A',
      shift: 'Morning',
      email: 'hussainimran0x@gmail.com',
      account: 'hussainimran0x@gmail.com',
      password: '1234567',
      address: 'Gulistan-e-jauhar / Block-19, Gulshan Banglows- Street # 4 / House R-49',
      img: 'img/student3.jpg'
    }
  ];
  const data = [data1, data2, data3, data4];

  var email = localStorage.getItem('Email');
  var foundObject = null;
  
  // Loop through each array
  for (let i = 0; i < data.length; i++) {
    // Find the object that matches the email in the current array
    foundObject = data[i].find(obj => obj.email === email);
  
    if (foundObject) {
      // The email matched an object in the current array
      break; // Exit the loop since we found a match
    }
  }
  
  if (foundObject) {
    // The email matched an object in one of the arrays
    // console.log(foundObject.grNo)
  } else {
    // The email did not match any object in any of the arrays
    console.log("No object found with the provided email.");
  }
  
  
  


  const setRightDiv = document.querySelector('.setright');

  if (foundObject) {
    const filteredStudent = {};
    for (const prop in foundObject) {
      if (typeof foundObject[prop] === 'string' || typeof foundObject[prop] === 'number') {
        filteredStudent[prop] = foundObject[prop];
        // console.log(filteredStudent)
      }
    }
  
    setRightDiv.innerHTML = `
      <div class="rightside">
        <h1>Name: </h1>
      </div>
      <div class="leftside">
        <div class="proimg">
          <img class="proimg" width="70px" src="${filteredStudent.img}" alt="">
        </div>
        <p>GR No: ${filteredStudent.grNo}</p>
        <p>Technology: ${filteredStudent.technology}</p>
        <p>Section: ${filteredStudent.section}</p>
        <p>Shift: ${filteredStudent.shift}</p>
        <p>Email: ${filteredStudent.email}</p>
        <p>Address: ${filteredStudent.address}</p>
      </div>
    `;
  
    const rightDiv = setRightDiv.querySelector('.rightside');
    rightDiv.querySelector('h1').textContent += filteredStudent.name;
  } else {
    console.log("No object found with the provided email.");
  }
  
  // <p>GR No: </p>
  //       <p>Technology: </p>
  //       <p>Section: </p>
  //       <p>Shift: </p>
  //       <p>Email: </p>
  //       <p>Address: </p>



  // function showTimeSchedule() {
  //   // Code to display the time schedule
  //   var timeTableDiv = document.querySelector('.time-table');
  //   if (timeTableDiv.style.display === 'none') {
  //     timeTableDiv.style.display = 'block';
  //   } else {
  //     timeTableDiv.style.display = 'none';
  //   }
  // }
 
  var timeTableDiv = document.querySelector('.time-table');

  function showTimeSchedule() {
    timeTableDiv.classList.toggle('show');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var removeButton = document.getElementById('remove');
    var timeTableDiv = document.querySelector('.time-table');
  
    if (removeButton && !removeButton.hasEventListener('click', hideTimeTable)) {
      removeButton.addEventListener('click', hideTimeTable);
    }
  
    function hideTimeTable() {
      timeTableDiv.classList.remove('show');
    }
  });
  


function showNoticeBoard() {
  // Code to display the notice board
   
Swal.fire("DAE 3rd Year Final Exam's From 6 June to 14 June 2023-All Technologies.")
}

function showEvent() {
    // Code to display the event
    Swal.fire({
      title: 'Event :',
      text: 'Project Exibition 2023 Will be held on Thursday 22nd June 2023!',
      // imageUrl: 'https://unsplash.it/400/200',
      imageUrl: src="img/AIT-Front-1.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
}

function showFeeChallan() {
    // Code to display the fee challan
    Swal.fire(
      'Dear student, your fee challan is paid.',
      '',
      'success'
    )
}



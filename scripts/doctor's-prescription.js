const questions = [
  {
    question: "What is your primary health concern?",
    options: [
      "Heart-related",
      "Skin-related",
      "Child-related",
      "None of the above",
    ],
  },
  {
    question:
      "Have you experienced any of the following symptoms recently? (Select all that apply)",
    options: [
      "Chest pain",
      "Shortness of breath",
      "Fatigue",
      "Skin rash",
      "Fever",
      "Cough",
      "None of the above",
    ],
  },
  {
    question:
      "Have you been diagnosed with any chronic health conditions? (Select all that apply)",
    options: [
      "Hypertension",
      "Diabetes",
      "Asthma",
      "Arthritis",
      "None of the above",
    ],
  },
  {
    question:
      "Are you currently taking any medications? (Select all that apply)",
    options: [
      "Yes, prescription medications",
      "Yes, over-the-counter medications",
      "No, I am not taking any medications",
    ],
  },
  {
    question: "Do you have a history of any allergies? (Select all that apply)",
    options: [
      "Yes, food allergies",
      "Yes, medication allergies",
      "Yes, environmental allergies",
      "No, I do not have any allergies",
    ],
  },
  {
    question: "Have you had any recent surgeries or hospitalizations?",
    options: ["Yes", "Yes, over-the-counter medications", "No"],
  },
  {
    question:
      "Do you have a family history of any medical conditions? (Select all that apply)",
    options: [
      "Heart disease",
      "Cancer",
      "Diabetes",
      "High blood pressure",
      " No, there is no family history of medical conditions",
    ],
  },
  {
    question: "Are you currently pregnant or nursing?",
    options: [
      "Yes, I am pregnant",
      "Yes, I am nursing",
      "No, I am not pregnant or nursing",
      "None of the above",
    ],
  },
  {
    question: "In which city you prefer to see doctor?",
    options: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "New york",
      "Delhi",
      "London",
      "Windsor",
    ],
  },
];

const doctors = [
  {
    city: "Toronto",
    details: [
      {
        Name: "Dr. Samantha Johnson",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "123 Main Street, Suite 456, Cityville, Stateville",
        ContactNumber: "(555) 123-4567",
        Email: "dr.samantha.johnson@heartcareclinic.com",
      },
      {
        Name: "Dr. Michael Chen",
        Specialty: "Dermatologist",
        ClinicName: "SkinGlow Dermatology Clinic",
        Location: "789 Oak Avenue, Unit 234, Townsville, Stateville",
        ContactNumber: "(555) 987-6543",
        Email: "dr.michael.chen@skinglowderm.com",
      },
      {
        Name: "Dr. Emily Davis",
        Specialty: "Pediatrician",
        ClinicName: "KidsCare Pediatrics",
        Location: "456 Maple Road, Suite 789, Villagetown, Stateville",
        ContactNumber: "(555) 567-8901",
        Email: "dr.emily.davis@kidscarepediatrics.com",
      },
      {
        Name: "Dr. Rebecca Johnson",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "7890 Pathology Rd, Toronto, ON",
        ContactNumber: "442-123-5678",
        Email: "Dr.Rebecca.Johnson@onecare.com",
      },
    ],
  },
  {
    city: "Vancouver",
    details: [
      {
        Name: "Dr. John Smith",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "123 Main Street, Suite 456, Vancouver, BC",
        ContactNumber: "416-123-4567",
        Email: "Dr. John Smith@heartcareclinic.com",
      },
      {
        Name: "Dr. Rahid khan",
        Specialty: "Dermatologist",
        ClinicName: "Glow Dermatology Clinic",
        Location: "789 Oak Avenue, Unit 900, Vancouver, BC",
        ContactNumber: "(560) 987-6593",
        Email: "dr.rahid.khan@glow.com",
      },
      {
        Name: "Dr. Emma Will",
        Specialty: "Pediatrician",
        ClinicName: "KidsHere Pediatrics",
        Location: "900 Shapperd Road, Suite 878, Stateville,Vancouver, BC",
        ContactNumber: "(555) 567-8901",
        Email: "dr.emma.will@kidsherepediatrics.com",
      },
      {
        Name: "Dr. Sarah Johnson",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "7890 Pathology Rd, Vancover, ON",
        ContactNumber: "442-123-5678",
        Email: "Dr.sarah.Johnson@onecare.com",
      },
    ],
  },
  {
    city: "Montreal",
    details: [
      {
        Name: "Dr. Michael Chen",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "123 Main Street, Suite 456, Montreal",
        ContactNumber: "(590) 123-4567",
        Email: "dr.michael.chen@heartcareclinic.com",
      },
      {
        Name: "Dr. Jack smith",
        Specialty: "Dermatologist",
        ClinicName: "SkinGlow Dermatology Clinic",
        Location: "789 Oak Avenue, Unit 234, Montreal",
        ContactNumber: "(565) 987-6543",
        Email: "dr.jack.smith@skinglowderm.com",
      },
      {
        Name: "Dr. David Brown",
        Specialty: "Pediatrician",
        ClinicName: "KidsCare Pediatrics",
        Location: "789 Eva Road, Suite 789, Old market, Montreal",
        ContactNumber: "(555) 997-8901",
        Email: "dr.david.brown@kidscarepediatrics.com",
      },
      {
        Name: "Dr. Tory Johnson",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "7890 Pathology Rd, Montreal, ON",
        ContactNumber: "442-223-5678",
        Email: "Dr.tory.johnson@onecare.com",
      },
    ],
  },
  {
    city: "New york",
    details: [
      {
        Name: "Dr. Aish Patel",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "123 Main Street, Suite 456, New York, USA",
        ContactNumber: "(100) 123-4567",
        Email: "dr.aish.patel@heartcareclinic.com",
      },
      {
        Name: "Dr. salam rahi",
        Specialty: "Dermatologist",
        ClinicName: "SkinGlow Dermatology Clinic",
        Location: "1 Oak Avenue, Unit 190, New york city",
        ContactNumber: "(100) 987-6543",
        Email: "dr.salam.rahi@skinglowderm.com",
      },
      {
        Name: "Dr. Joshua Davis",
        Specialty: "Pediatrician",
        ClinicName: "KidsCare Pediatrics",
        Location: "456 King Road, Suite 100, New York",
        ContactNumber: "(515) 900-8901",
        Email: "dr.joshua.davis@kidscarepediatrics.com",
      },
      {
        Name: "Dr. Mary walker",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "7 Pathology Rd, New York",
        ContactNumber: "442-123-5678",
        Email: "Dr.mary.walker@onecare.com",
      },
    ],
  },
  {
    city: "Delhi",
    details: [
      {
        Name: "Dr. Ani singh",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "123 Chandni chock,Old delhi",
        ContactNumber: "9801010010",
        Email: "dr.ani.singh@heartcareclinic.com",
      },
      {
        Name: "Dr. Ramesh trivedi",
        Specialty: "Dermatologist",
        ClinicName: "SkinGlow Dermatology Clinic",
        Location: "789 NCR Road, Delhi",
        ContactNumber: "9859876543",
        Email: "dr.ramesh.trivedi@skinglowderm.com",
      },
      {
        Name: "Dr. Harsh Mishra",
        Specialty: "Pediatrician",
        ClinicName: "KidsCare Pediatrics",
        Location: "77 Red fort,New Delhi, Delhi",
        ContactNumber: "99878989898",
        Email: "dr.harsh.mishra@kidscarepediatrics.com",
      },
      {
        Name: "Dr. Karan Sharma",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "90 Doctors house, 7 course Road, Delhi",
        ContactNumber: "9898981001",
        Email: "Dr.karan.sharma@onecare.com",
      },
    ],
  },
  {
    city: "London",
    details: [
      {
        Name: "Dr. Daniel Martinez",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "898 Main Street, Suite 456, Cityville,London",
        ContactNumber: "(890) 123-4567",
        Email: "dr.daniel.martinez@heartcareclinic.com",
      },
      {
        Name: "Dr. Jhon snow",
        Specialty: "Dermatologist",
        ClinicName: "SkinGlow Dermatology Clinic",
        Location: "789 Oak Avenue, Unit 234, Stateville",
        ContactNumber: "(559) 987-6543",
        Email: "dr.jhon.snow@skinglowderm.com",
      },
      {
        Name: "Dr. Winter white",
        Specialty: "Pediatrician",
        ClinicName: "KidsCare Pediatrics",
        Location: "456 Maple Road, Suite 789, Stateville",
        ContactNumber: "(555) 800-8901",
        Email: "dr.winter.white@kidscarepediatrics.com",
      },
      {
        Name: "Dr. Rebecca jonior",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "7890 Pathology Rd, London, England",
        ContactNumber: "442-890-5678",
        Email: "Dr.Rebecca.jonior@onecare.com",
      },
    ],
  },
  {
    city: "Windsor",
    details: [
      {
        Name: "Dr. Samantha Johnson",
        Specialty: "Cardiologist",
        ClinicName: "HeartCare Clinic",
        Location: "123 Main Street, Suite 456, Windsor",
        ContactNumber: "(555) 123-4567",
        Email: "dr.samantha.johnson@heartcareclinic.com",
      },
      {
        Name: "Dr. Michael Chen",
        Specialty: "Dermatologist",
        ClinicName: "SkinGlow Dermatology Clinic",
        Location: "789 Oak Avenue, Unit 234, Windsor",
        ContactNumber: "(555) 987-6543",
        Email: "dr.michael.chen@skinglowderm.com",
      },
      {
        Name: "Dr. Emily Davis",
        Specialty: "Pediatrician",
        ClinicName: "KidsCare Pediatrics",
        Location: "456 Maple Road, Suite 789,Widsor City",
        ContactNumber: "(555) 567-8901",
        Email: "dr.emily.davis@kidscarepediatrics.com",
      },
      {
        Name: "Dr. Rebecca Johnson",
        Specialty: "Pathologist",
        ClinicName: "OneCare",
        Location: "7890 Pathology Rd, Windsor, ON",
        ContactNumber: "442-123-5678",
        Email: "Dr.Rebecca.Johnson@onecare.com",
      },
    ],
  },
];
let currentQuestion = 0;
let answer = []; // variable to keep track of the current question
// Function to load and display a question
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const option1LabelElement = document.getElementById("option1-label");
  const option2LabelElement = document.getElementById("option2-label");
  const option3LabelElement = document.getElementById("option3-label");
  const option4LabelElement = document.getElementById("option4-label");
  const option5LabelElement = document.getElementById("option5-label");
  const option6LabelElement = document.getElementById("option6-label");
  const option7LabelElement = document.getElementById("option7-label");

  // Update question and options based on current question
  questionElement.textContent = questions[currentQuestion].question;
  option1LabelElement.textContent = questions[currentQuestion].options[0];
  option2LabelElement.textContent = questions[currentQuestion].options[1];
  option3LabelElement.textContent = questions[currentQuestion].options[2];
  option4LabelElement.textContent = questions[currentQuestion].options[3];
  option5LabelElement.textContent = questions[currentQuestion].options[4];
  option6LabelElement.textContent = questions[currentQuestion].options[5];
  option7LabelElement.textContent = questions[currentQuestion].options[6];
  // Update more options as needed

  // Reset selected option
  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("option3").checked = false;
  document.getElementById("option4").checked = false;
  document.getElementById("option5").checked = false;
  document.getElementById("option6").checked = false;
  document.getElementById("option7").checked = false;
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  //get value of selected options
  const selectedOption = document.querySelector('input[name="option"]:checked');
  let optionvalue;
  if (optionvalue !== "") {
    optionvalue = selectedOption.nextElementSibling.textContent;
  }

  if (selectedOption) {
    // store selected options into array answer
    answer[currentQuestion] = optionvalue;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Cannot fetch data! Please try after some times");
  }
}

// Function to show the quiz result
function showResult() {
  let myObject = checkResult();
  var resultContainer = document.getElementById("result");
  var removeQuizContainer = document.getElementById("question-container");
  removeQuizContainer.parentNode.removeChild(removeQuizContainer);

  // Create HTML elements to display object properties or values
  var name = document.createElement("p");
  name.textContent = "Name: " + myObject.Name;

  var spacialty = document.createElement("p");
  spacialty.textContent = "Spacialty: " + myObject.Specialty;

  var clinicName = document.createElement("p");
  clinicName.textContent = "Clinic Name: " + myObject.ClinicName;

  var address = document.createElement("p");
  address.textContent = "Address: " + myObject.Location;

  var contact = document.createElement("p");
  contact.textContent = "ContactNumber: " + myObject.ContactNumber;

  var email = document.createElement("p");
  email.textContent = "Email: " + myObject.Email;

  let userMessage = document.createElement("p");
  userMessage.textContent = "Your prescription will be sent to you via Email. In case of any queries please find doctor details below";
  resultContainer.appendChild(userMessage);
  resultContainer.appendChild(name);
  resultContainer.appendChild(spacialty);
  resultContainer.appendChild(clinicName);
  resultContainer.appendChild(address);
  resultContainer.appendChild(contact);
  resultContainer.appendChild(email);
}

function checkResult() {
  if (answer[8] === "Toronto") {
    if (answer[0] === "Heart-related") {
      return doctors[0].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[0].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[0].details[2];
    } else {
      return doctors[0].details[3];
    }
  } else if (answer[8] === "Vancouver") {
    if (answer[0] === "Heart-related") {
      return doctors[1].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[1].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[1].details[2];
    } else {
      return doctors[1].details[3];
    }
  } else if (answer[8] === "Montreal") {
    if (answer[0] === "Heart-related") {
      return doctors[2].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[2].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[2].details[2];
    } else {
      return doctors[2].details[3];
    }
  } else if (answer[8] === "New york") {
    if (answer[0] === "Heart-related") {
      return doctors[3].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[3].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[3].details[2];
    } else {
      return doctors[3].details[3];
    }
  } else if (answer[8] === "Delhi") {
    if (answer[0] === "Heart-related") {
      return doctors[4].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[4].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[4].details[2];
    } else {
      return doctors[4].details[3];
    }
  } else if (answer[8] === "London") {
    if (answer[0] === "Heart-related") {
      return doctors[5].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[5].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[5].details[2];
    } else {
      return doctors[5].details[3];
    }
  } else if (answer[8] === "Windsor") {
    if (answer[0] === "Heart-related") {
      return doctors[6].details[0];
    } else if (answer[0] === "Skin-related") {
      return doctors[6].details[1];
    } else if (answer[0] === "Child-realted") {
      return doctors[6].details[2];
    } else {
      return doctors[6].details[3];
    }
  } else {
    return "Null";
  }
}

// Attach event listener to the form submit button
document.getElementById("options-form").addEventListener("submit", submitForm);

// Load the first question on page load
window.addEventListener("load", loadQuestion);

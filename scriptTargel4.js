function toggleFields() {
    let studyOptions = document.CollegeRegistration.study;
    let psychometricGrade = document.CollegeRegistration.PsychometricGrade;
    let mechinaGrade = document.CollegeRegistration.MechinaGrade;

    // מי נבחר
    let selectedOption = "";
    for (let i = 0; i < studyOptions.length; i++) {
        if (studyOptions[i].checked) {
            selectedOption = studyOptions[i].value;
        }
    }

    if (selectedOption === "PsychometricAndBagrut") {
        // לסגור מכינה
        mechinaGrade.value = "";
        mechinaGrade.disabled = true;

        // לפתוח פסיכומטרי
        psychometricGrade.disabled = false;
    }
    else if (selectedOption === "MechinaAndBagrut") {
        // לסגור פסיכומטרי
        psychometricGrade.value = "";
        psychometricGrade.disabled = true;

        // לפתוח מכינה
        mechinaGrade.disabled = false;
    }
}

function ValidateCollegeRegistration() {
    let age = document.CollegeRegistration.Age;
    let bagrutGrade = document.CollegeRegistration.BagrutGrade;
    let msg = document.getElementById("msg");

    
    toggleFields();

    // בדיקה שבגרות לא ריק
    if (bagrutGrade.value === "") {
        window.alert("You should enter a bagrut grade");
        bagrutGrade.focus();
        return false;
    }

    // הודעה ירוקה אם גיל > 30
    if (age.value > 30) {
        msg.innerHTML = "You are eligible for admission to any faculty you choose";
        msg.className = "green";
    } else {
        msg.innerHTML = "";
        msg.className = "";
    }

    return false;
}

// criminal-convictions
document.querySelector("#criminal-convictions-yes").addEventListener("click", () => {
    const criminalConvictions = document.getElementById("criminal-convictions-yes").value;
    const criminalConvictionsDetailsDiv = document.querySelector(".criminal-convictions-details-div");

    if (criminalConvictions === "yes") {
        criminalConvictionsDetailsDiv.style.display = "block";
    };
});

document.querySelector("#criminal-convictions-no").addEventListener("click", () => {
    const criminalConvictions = document.getElementById("criminal-convictions-no").value;
    const criminalConvictionsDetailsDiv = document.querySelector(".criminal-convictions-details-div");

    if (criminalConvictions === "no") {
        criminalConvictionsDetailsDiv.style.display = "none";
    };
});

// criminal-offence
document.querySelector("#criminal-offence-yes").addEventListener("click", () => {
    const criminalOffence = document.getElementById("criminal-offence-yes").value;
    const criminalOffenceDetailsDiv = document.querySelector(".criminal-offence-details-div");

    if (criminalOffence === "yes") {
        criminalOffenceDetailsDiv.style.display = "block";
    };
});

document.querySelector("#criminal-offence-no").addEventListener("click", () => {
    const criminalOffence = document.getElementById("criminal-offence-no").value;
    const criminalOffenceDetailsDiv = document.querySelector(".criminal-offence-details-div");

    if (criminalOffence === "no") {
        criminalOffenceDetailsDiv.style.display = "none";
    };
});


// Studied in the UK previously
document.querySelector("#studied-uk-previously-yes").addEventListener("click", () => {
    const studiedUkPreviously = document.getElementById("studied-uk-previously-yes").value;
    const studiedUkPreviouslyDetails = document.querySelector(".studied-uk-previously-details");

    if (studiedUkPreviously === "yes") {
        studiedUkPreviouslyDetails.style.display = "block";
    };
});

document.querySelector("#studied-uk-previously-no").addEventListener("click", () => {
    const studiedUkPreviously = document.getElementById("studied-uk-previously-no").value;
    const studiedUkPreviouslyDetails = document.querySelector(".studied-uk-previously-details");

    if (studiedUkPreviously === "no") {
        studiedUkPreviouslyDetails.style.display = "none";
    };
});

// For Add Details Studied in the UK previously
document.getElementById("studied-uk-previously-details-add-btn").addEventListener("click", () => {
    let ukVisaNumber = document.getElementById("uk-visa-number");
    let visaType = document.getElementById("visa-type");
    let validFrom = document.getElementById("valid-from");
    let validTo = document.getElementById("valid-to");
    let institution = document.getElementById("institution");
    let studiedUkPreviouslyDetailsTbody = document.querySelector(".studied-uk-previously-details-tbody");

    if (ukVisaNumber.value !== "" && visaType.value !== "" && validFrom.value !== "" && validTo.value !== "" && institution.value !== "") {
        const tr = `<tr>
    <td>${ukVisaNumber.value}</td>
    <td>${visaType.value}</td>
    <td>${validFrom.value}</td>
    <td>${validTo.value}</td>
    <td>${institution.value}</td>
    </tr>`;
        studiedUkPreviouslyDetailsTbody.innerHTML += tr;

        ukVisaNumber.value = "";
        visaType.value = "";
        validFrom.value = "";
        validTo.value = "";
        institution.value = "";
    };
});

// For Details of Courses
document.getElementById("details-of-course-add-btn").addEventListener("click", () => {
    let courseTitle = document.getElementById("course-title");
    let underUgOrPostPg = document.getElementById("under-ug-or-post-pg");
    let ugAdvance = document.getElementById("ug-advance");
    let monthYearEntry = document.getElementById("month-year-entry");
    let detailsOfCourseTbody = document.querySelector(".details-of-course-tbody");

    if (courseTitle.value !== "" && underUgOrPostPg.value !== "" && ugAdvance.value !== "" && monthYearEntry.value !== "") {

        const tr = `<tr>
    <td>${courseTitle.value}</td>
    <td>${underUgOrPostPg.value}</td>
    <td>${ugAdvance.value}</td>
    <td>${monthYearEntry.value}</td>
    </tr>`;

        detailsOfCourseTbody.innerHTML += tr;

        courseTitle.value = "";
        underUgOrPostPg.value = "";
        ugAdvance.value = "";
        monthYearEntry.value = "";
    };
});

// For Full Academic History
document.getElementById("full-academic-history-add-btn").addEventListener("click", () => {
    let nameOfInstitution = document.getElementById("name-of-institution");
    let programmeOfStudy = document.getElementById("programme-of-study");
    let nqfLevelIfStudiedInTheUk = document.getElementById("nqf-Level-if-studied in-the-uk");
    let startDateOfCourse = document.getElementById("start-date-of-course");
    let endDateOfCourse = document.getElementById("end-date-of-course");
    let degreeCertificate = document.getElementById("degree-certificate");

    let fullAcademicHistoryTbody = document.querySelector(".full-academic-history-tbody");

    if (nameOfInstitution.value !== "" && programmeOfStudy.value !== "" && nqfLevelIfStudiedInTheUk.value !== "" && startDateOfCourse.value !== "" && endDateOfCourse !== "" && degreeCertificate !== null) {

        const tr = `<tr>
    <td>${nameOfInstitution.value}</td>
    <td>${programmeOfStudy.value}</td>
    <td>${nqfLevelIfStudiedInTheUk.value}</td>
    <td>${startDateOfCourse.value}</td>
    <td>${endDateOfCourse.value}</td>
    <td>${degreeCertificate.files[0].name}</td>
    </tr>`;
        fullAcademicHistoryTbody.innerHTML += tr;

        nameOfInstitution.value = "";
        programmeOfStudy.value = "";
        nqfLevelIfStudiedInTheUk.value = "";
        startDateOfCourse.value = "";
        endDateOfCourse.value = "";
    };
});

// For Do you have a curtailment letter
document.querySelector("#curtailment-letter-yes").addEventListener("click", () => {
    const curtailmentLetter = document.getElementById("curtailment-letter-yes").value;
    const curtailmentLetterDetails = document.querySelector(".curtailment-letter-details");

    if (curtailmentLetter === "yes") {
        curtailmentLetterDetails.style.display = "block";
    };

});

document.querySelector("#curtailment-letter-no").addEventListener("click", () => {
    const curtailmentLetter = document.getElementById("curtailment-letter-no").value;
    const curtailmentLetterDetails = document.querySelector(".curtailment-letter-details");

    if (curtailmentLetter === "no") {
        curtailmentLetterDetails.style.display = "none";
    };
});

document.getElementById("curtailment-letter-details-add-btn").addEventListener("click", () => {
    let curtailmentLetterFile = document.getElementById("curtailment-letter-file");

    if (curtailmentLetterFile.files !== null) {
        console.log(curtailmentLetterFile);
    };
});

// For visa-refusal-letter
document.querySelector("#visa-refusal-letter-yes").addEventListener("click", () => {
    const visaRefusalLetter = document.getElementById("visa-refusal-letter-yes").value;
    const visaRefusalLetterDetails = document.querySelector(".visa-refusal-letter-details");

    if (visaRefusalLetter === "yes") {
        visaRefusalLetterDetails.style.display = "block";
    };

});

document.querySelector("#visa-refusal-letter-no").addEventListener("click", () => {
    const visaRefusalLetter = document.getElementById("visa-refusal-letter-no").value;
    const visaRefusalLetterDetails = document.querySelector(".visa-refusal-letter-details");

    if (visaRefusalLetter === "no") {
        visaRefusalLetterDetails.style.display = "none";
    };
});

document.getElementById("visa-refusal-letter-add-btn").addEventListener("click", () => {
    let visaRefusalLetterFile = document.getElementById("visa-refusal-letter-file");

    if (visaRefusalLetterFile.files !== null) {
        console.log(visaRefusalLetterFile);
    };
});

// For disability
document.querySelector("#disability-yes").addEventListener("click", () => {
    const disability = document.getElementById("disability-yes").value;
    const disabilityDetails = document.querySelector(".disability-details");

    if (disability === "yes") {
        disabilityDetails.style.display = "block";
    };

});

document.querySelector("#disability-no").addEventListener("click", () => {
    const disability = document.getElementById("disability-no").value;
    const disabilityDetails = document.querySelector(".disability-details");

    if (disability === "no") {
        disabilityDetails.style.display = "none";
    };

});

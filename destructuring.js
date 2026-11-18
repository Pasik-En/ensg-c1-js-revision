// Destructuring arrays
const staffSalaries = [100000, 200000, 150000, 55000, 75000, 95000, 505000];
const [staff1, , staff3, ...restOfStaffSalaries] = staffSalaries;

console.log(staff1, staff3);
console.log(restOfStaffSalaries);

// Destructuring of objects
const worker = {
    fullName: "John Doe",
    age: 25,
    role: "Software Engineer",
    experienceLevel: "Mid-Level",
    skills: ["React.js", "TypeScript", "Tailwnd CSS", "Node", "Express"],
}

const fullName = "Emmanuel Sunday";
const {fullName: fullWorkerName, skills, role, ...restofProps} = worker;

console.log(fullWorkerName);
console.log(`${fullWorkerName} is a ${role} and has skills in ${skills.join(", ")}`);
console.log(restofProps);


const user = {
    fullName: "John Doe",
    age: 25,
    role: "Software Engineer",
    experienceLevel: "Mid-Level",
    skills: ["React.js", "TypeScript", "Tailwnd CSS", "Node", "Express"],
    location: {
        state: "Enugu",
        country: "Nigeria"
    }
}

const {skills: [skill1, skill2], location: {state}} = user;
console.log(skill2);
console.log(state);
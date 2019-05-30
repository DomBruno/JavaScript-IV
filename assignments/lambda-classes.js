// CODE here for your Lambda Classes
class Person {
    constructor(personProps) {
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
    };

    speak() {return `Hello my name is ${this.name}, I am from ${this.location}`};
};

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    };

    demo(subject) {return `Today we are learning about `+ subject};
    grade(student, subject) {return student + ` recieves a perfect score on ` + subject};
};

class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    };

listsSubjects() {for (i = 0; i < favSubjects.length; i++);
    return this.favSubjects[i]};
PRAssignment(subject) {return `${this.name} has submitted a PR for ` + subject};
sprintChallenge(subject) {return `${this.name} has begun the sprint challenge on ` + subject};

};

class ProjectManagers extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    };

    standup(channel) {return `${this.name} announces to ${channel}, @channel standy times!`};
    debugsCode(student, subject) {return `${this.name} debugs ` + student + `'s code on ` + subject}
};

const Devin = new Person ({
    name: "Devin",
    age: 35,
    location: "Tuscaloosa, AL"
})

console.log(Devin.speak());

const Dan = new Instructor ({
    name: "Danzer",
    age: 32,
    location: "Miami, FL",
    specialty: "winemaking",
    favLanguage: "javascript",
    catchPhrase: "consume a satchel of richards!",
})

console.log(Dan.catchPhrase);
console.log(Dan.demo("constructors"))

const Lisa = new Instructor ({
    name: "Lisa",
    age: 29,
    location: "Washington, D.C.",
    specialty: "whiskey distilling",
    favLanguage: "Assembler",
    catchPhrase: "Boogie down!",
})

console.log(Lisa.grade("Ralph", "Applied Javascript"));

const Dom = new Student ({
    name: "Dominick",
    age: 42,
    location: "Knoxville, TN",
    previousBackground: "CompSci",
    className: "WPT7",
    favSubjects: ["JS", "D3", "MongoDB"],
    })

    console.log(Dom.listsSubjects);
    console.log(Dom.sprintChallenge("Responsive Web Design"));

    const Yassir = new Student ({
        name: "Yassir",
        age: 30,
        location: "Sand Diego, CA",
        previousBackground: "Millionaire",
        className: "WPT7",
        favSubjects: ["gnu", "linux", "BSD"],
    })

    console.log(Yassir.PRAssignment("REACT"));

    const Phil = new ProjectManagers ({
        name: "Phil",
        age: 27,
        location: "Denver, CO",
        specialty: "skiing",
        favLanguage: "Javascript",
        catchPhrase: "awesome!",
        gradClassName: "web4",
        favInstructor: "Dan Levy",
    })

    console.log(Phil.debugsCode("Dominick", "media queries"));
    console.log(Phil.standup("WPT7-Phil"));


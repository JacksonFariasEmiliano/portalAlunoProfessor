const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Físcia",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quimíca",
]

const weekdays = [
    "Domingo",
    "Segunda-feirsa",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-fseira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes (time) {
    const [hour, minutes] = time.split(':')
    return Number ((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //inserir dados
    proffyValue = { 
        name: 'Pedro Alves', 
        avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/s960x960/116607018_3362156130472319_8140096298518504399_o.jpg?_nc_cat=106&_nc_sid=dd7718&_nc_ohc=b9QakZcpWY4AX-sZ4gT&_nc_ht=scontent.fsjk2-1.fna&_nc_tp=7&oh=ef905a87483cb858dd10f68f8106e51b&oe=5F4E1809', 
        whatsapp: '12 981813457', 
        bio: 'Este é Pedro, o bebe mais lindo e amado do universo' 
    }

    classValue = {
        subject: 1, 
        cost: 'R$ 1000000,00' 
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]


    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //Consultar dados inserido
    // const selectedProffys = await db.all("Select * from proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    // const selectClassesAndProffys = await db.all(`
    //     select classes. *, proffys.*
    //     from proffys
    //     join classes on ( classes.proffy_id = proffys.id)
    //     where classes.proffy_id =1;
    // `)
    // console.log(selectClassesAndProffys)
    
    //o horário que a pessoa trabalha, por exemplo é das 8h as 18
    //o horario do time_from (8h) precisa ser menor ou igual ao horário solicitado
    ////o time_to precisa ser acima 

    const selectClassesSchedules = await db.all(`
        select class_schedule.*
        from class_schedule
        where class_schedule.class_id = class_id = 1
        and class_schedule.weekday = 0
        and class_schedule.time_from <= "420"
        and class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})
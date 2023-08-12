const express=require("express");
const app=express();
const PORT=3002;
app.use(express.json());

app.listen(PORT,()=>{
    console.log("Server is running at port "+PORT);
});

const details=[
    {
        Students_List:"/students"
    },
    {
        Attendence_details:"/attendence"
    },
    {
        Academic_details:"/academic"
    }

]

const stud_list=[
    {
        name:"Giri Prasath",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105017
    },
    {
        name:"Ajay Krishna",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105003
    },
    {
        name:"Mukilan",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105039
    }

]

const att_details=[
    {
        name:"Giri Prasath",
        Rollno:71762105017,
        Attendence_percentage:[
            {
                Sem_1:98
            },
            {
                Sem_2:90
            },
            {
                Sem_3:95
            },
            {
                Sem_4:91
            }
        ]
    },
    {
        name:"Ajay Krishna",
        Rollno:71762105003,
        Attendence_percentage:[
            {
                Sem_1:99
            },
            {
                Sem_2:95
            },
            {
                Sem_3:90
            },
            {
                Sem_4:93
            }
        ]
    },
    {
        name:"Mukilan",
        Rollno:71762105039,
        Attendence_percentage:[
            {
                Sem_1:98
            },
            {
                Sem_2:95
            },
            {
                Sem_3:94
            },
            {
                Sem_4:90
            }
        ]
    }
]


const acad_details=[
    {
        GiriPrasath :"/academic/giriprasath"
    },
    {
        AjayKrishna:"/academic/ajaykrishna"
    },
    {
        Mukilan:"/academic/mukilan"
    }
    
];

const acad_giri=[
    {
        Sem_1:"8.33 GPA",
        Sem_2:"8.41 GPA",
        Sem_3:"8.48 GPA"
    }
    
];

const acad_ak=[
    {
        Sem_1:"7.67 GPA",
        Sem_2:"7.9 GPA",
        Sem_3:"8.33 GPA"
    }
    
];

const acad_mkln=[
    {
        Sem_1:"7.75 GPA",
        Sem_2:"8.45 GPA",
        Sem_3:"8.45 GPA"
    }
    
];

const acad_hanush=[
    {}
    
];

app.get("/",(request,response)=>{

    response.send(details);
});

app.get("/students",(request,response)=>{

    response.send(stud_list);
});

app.get("/attendence",(request,response)=>{

    response.send(att_details);
});

app.get("/academic",(request,response)=>{

    response.send(acad_details);
});

app.get("/academic/giriprasath",(request,response)=>{

    response.send(acad_giri);
});

app.get("/academic/ajaykrishna",(request,response)=>{

    response.send(acad_ak);
});

app.get("/academic/mukilan",(request,response)=>{

    response.send(acad_mkln);
});

app.get("/academic/hanush",(request,response)=>{

    response.send(acad_hanush);
});

//-------------- Post Methods------------------------

app.post("/students",(request,response)=>{
    stud_list.push(request.body);
    response.send(stud_list);
});

app.post("/attendence",(request,response)=>{
    att_details.push(request.body);
    response.send(att_details);
});

app.post("/academic",(request,response)=>{
    acad_details.push(request.body);
    response.send(acad_details);
});

app.post("/academic/hanush",(request,response)=>{
    acad_hanush.push(request.body)
    response.send(acad_hanush);
});





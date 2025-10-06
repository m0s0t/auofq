
/* ---------- بيانات تجريبية (dummy) ---------- */
const DB = {
  // 🚩 الأقسام (departments)
  departments: [
    {
      id: "anesthesia",
      name: "التخدير",
      about: "قسم متخصص بالعناية والتخدير.",
      stages: ["Stage 2", "Stage 3.1"],
      teachers: ["د. ليث", "د.عادل"]
    },
    
  ],

  // 🚩 الدورات (courses)
  courses: [
    // === الدورات الأصلية ===
   {
  id: "an1",
  title: "محاضرات التخدير",
  desc: "محاضرات في مادة التخدير الكورس الاول للمرحلة الثالثة",
  subject: " تخدير",
  stage: "Stage 3.1",
  dept: "anesthesia",
  thumb: "an.png",
  doctor: "د. حسام",
  lessons: [
    {
      id: "an2L1",
      title: "Regional Anaesthesia",
      yt: "HXCs6U7iF4s"
    },
    {
      id: "an2L2",
      title: "Renal Disease and Anesthesia",
      yt: "buWSlHhCdPU"
    },
    {
      id: "an2L3",
      title: "Liver Disease and Anesthesia",
      yt: "IezLnNJVg5s"
    },
    {
      id: "an2L4",
      title: "Anesthesia for orthopedic surgery",
      yt: "QilDCovuP6A"
    },
    {
      id: "an2L5",
      title: "Day case surgery",
      yt: "htPOCiRo80A"
    },
    {
      id: "an2L6",
      title: "Anesthesia for laparoscopic surgery",
      yt: "LQUswDYEfvI"
    },
    {
      id: "an2L7",
      title: "Non Operating Room Anaesthesia (NORA)",
      yt: "hQoMO4dSTHw"
    },
    {
      id: "an2L8",
      title: "Anesthesia for ophthalmic surgery",
      yt: "D-gBvoaukLc"
    }
    ]
  },

    {
  id: "ana3.1",
  title: "العناية الكورس الاول مرحلة ثالثة",
  desc: "قائمة تشغيل لفديوهات دكتور حسام في مادة العناية للمرحلة الثالثة",
  subject: "عناية ",
  stage: "Stage 3.1",
  dept: "anesthesia",
  thumb: "an2.PNG",
  doctor: "د. حسام",
  lessons: [
    {
      id: "ana3L1",
      title: "Respiratory monitoring",
      yt: "HQSBcsyGp6s"
    },
    {
      id: "ana3L2",
      title: "ARDS and ALI",
      yt: "fHKk0elS438"
    },
    {
      id: "ana3L3",
      title: "COPD and Acute asthma",
      yt: "4G025boFktM"
    },
    {
      id: "ana3L4",
      title: "Arterial Blood Gas Analysis ABG",
      yt: "S49wI1Nd2Tc"
    },
    {
      id: "ana3L5",
      title: "Cardiopulmonary resuscitation CPR",
      yt: "adXy666nh1Q"
    },
    {
      id: "ana3L6",
      title: "Mechanical Ventilation in Brain Injured Patients",
      yt: "YCK77rQJDr4"
    },
    {
      id: "ana3L7",
      title: "Fluid therapy for critical ill patient",
      yt: "tbi59UK4yPU"
    },
    {
      id: "ana3L8",
      title: "Blood transfusion",
      yt: "OSXIWigGAEg"
    },
    {
      id: "ana3L9",
      title: "Status epilepticus",
      yt: "Mg1YYp0GJMI"
    }
  ]
},


  ],

  // 🚩 الملازم (notes)
  notes: [
    // 🔹 مادة اجهزة نظري - مرحلة ثالثة تخدير
{
  id: "e101",
  subject: "اجهزة نظري",
  number: 1,
  title: "Tracheal Tube",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l1.pdf"
},
{
  id: "e102",
  subject: "اجهزة نظري",
  number: 2,
  title: "Oropharyngeal Airways",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l2.pdf"
},
{
  id: "e103",
  subject: "اجهزة نظري",
  number: 3,
  title: "Laryngeal Mask",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l3.pdf"
},
{
  id: "e104",
  subject: "اجهزة نظري",
  number: 4,
  title: "Laryngoscope",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l4.pdf"
},
{
  id: "e105",
  subject: "اجهزة نظري",
  number: 5,
  title: "Humidifiers",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l5.pdf"
},
{
  id: "e106",
  subject: "اجهزة نظري",
  number: 6,
  title: "Nebulizers",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l6.pdf"
},
{
  id: "e107",
  subject: "اجهزة نظري",
  number: 7,
  title: "Medical Suction Apparatus",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/th/ah3k1l7.pdf"
},
    {
      id: "n101",
      subject: "اجهزة مرتب",
      number: 1,
      title: "اجهزة  1",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/اجهزة/th/a1.pdf"
    },
     {
      id: "n102",
      subject: "اجهزة مرتب",
      number: 2,
      title: "اجهزة  2",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/اجهزة/th/a2.pdf"
    },
     {
      id: "n103",
      subject: "اجهزة مرتب",
      number: 3,
      title: "اجهزة 3",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/اجهزة/th/a3.pdf"
    },
      // 🔹 مادة اجهزة عملي - مرحلة ثالثة تخدير
{
  id: "epr101",
  subject: "اجهزة عملي",
  number: 1234,
  title: "اول 4 محاضرات",
  teacher: "د. ميثم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/pr/1234.pdf"
},
{
  id: "epr104",
  subject: "اجهزة عملي",
  number: 4,
  title: " محاضرة 4 ",
  teacher: "د. ميثم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/pr/4.pdf"
},
{
  id: "epr1056",
  subject: "اجهزة عملي",
  number: 56,
  title: " محاضرة 5, 6 ",
  teacher: "د.ميثم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/pr/56.pdf"
},
{
  id: "epr107",
  subject: "اجهزة عملي",
  number: 7,
  title: " محاضرة 7 ",
  teacher: "د.ميثم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/اجهزة/pr/7.pdf"
},

    // 🔹 مادة باطني نظري - مرحلة ثالثة تخدير
{
  id: "m101",
  subject: "باطني نظري",
  number: 1,
  title: "Jaundice",
  teacher: "د.احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/باطني/th//ba3k1l1.pdf"
},
{
  id: "m102",
  subject: "باطني نظري",
  number: 2,
  title: "Peptic Ulcer",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file:"files/الكورس الاول/باطني/th//ba3k1l2.pdf"
},
{
  id: "m103",
  subject: "باطني نظري",
  number: 3,
  title: "Cerebrovascular Accident",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/باطني/th//ba3k1l3.pdf"
},
{
  id: "m104",
  subject: "باطني نظري",
  number: 4,
  title: "Renal Failure",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/باطني/th//ba3k1l4.pdf"
},
{
  id: "m105",
  subject: "باطني نظري",
  number: 5,
  title: "Coronary Artery Diseases",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/باطني/th//ba3k1l5.pdf"
},
{
  id: "m106",
  subject: "باطني نظري",
  number: 6,
  title: "Arrhythmia",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file:"files/الكورس الاول/باطني/th//ba3k1l6.pdf"
},
{
  id: "m107",
  subject: "باطني نظري",
  number: 7,
  title: "Hypertension",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/باطني/th//ba3k1l7.pdf"
},
  // 🔹 مادة باطني نظري - مرحلة ثالثة تخدير
  {
  id: "pr101",
  subject: "باطني عملي",
  number: 1,
  title: "EXAMINATION OF RESPIRATORY SYSTEM",
  teacher: "",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/باطني/pr//1.pdf"
},
// 🔹 مادة العناية  العملي - مرحلة ثالثة تخدير
  {
      id: "in1010",
      subject: "عناية عملي",
      number: "1,2,3",
      title: "عناية عملي",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/pr/m123.pdf"
    },
  
    // 🔹 مادة العناية  النظري - مرحلة ثالثة تخدير
  {
      id: "in101",
      subject: "عناية نظري",
      number: 1,
      title: "Monitoring Respiratory monitoring ",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/1.pdf"
    },
      {
      id: "in102",
      subject: "عناية نظري",
      number: 2,
      title: "Pathophysiology ",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/2.pdf"
    }, 
     {
      id: "in103",
      subject: "عناية نظري",
      number: 3,
      title: "ARDS",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/3.pdf"
    },  {
      id: "in104",
      subject: "عناية نظري",
      number: 4,
      title: "Arterial Blood Gas (ABG)",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/4.pdf"
    },  {
      id: "in105",
      subject: "عناية نظري",
      number: 5,
      title: " Cardiorespiratory Arrest",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/1.pdf"
    },  {
      id: "in106",
      subject: "عناية نظري",
      number: 6,
      title: " Mechanical Ventilation in Brain InjuredPatients",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/6.pdf"
    },  {
      id: "in107",
      subject: "عناية نظري",
      number: 7,
      title: "Fluid therapy for critical  ",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/7.pdf"
    },  {
      id: "in108",
      subject: "عناية نظري",
      number: 8,
      title: "Blood transfusion ",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/8.pdf"
    },  {
      id: "in109",
      subject: "عناية نظري",
      number: 9,
      title: "Status Epilepticus ",
      teacher: "د. محمد",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/الكورس الاول/عناية/th/9.pdf"
    },
  
    // 🔹 مادة التخدير  النظري - مرحلة ثالثة تخدير
   {
  id: "an101",
  subject: "تخدير نظري",
  number: 1,
  title: "regional anesthesia ",
   titleExam: "lec1",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/1.pdf"
},
 {
  id: "an102",
  subject: "تخدير نظري",
  number: 2,
  title: "Renal Disease and Anesthesia",
   titleExam: "lec2",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/2.pdf"
},
{
  id: "an103",
  subject: "تخدير نظري",
  number: 3,
  title: "Liver Disease and Anesthesia",
   titleExam: "lec3",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/3.pdf"
},
 {
  id: "an104",
  subject: "تخدير نظري",
  number: 4,
  title: "NON-OPERATING ROOM ANAESTHESIA",
   titleExam: "lec4",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/4.pdf"
},
{
  id: "an105",
  subject: "تخدير نظري",
  number: 5,
  title: "Day case surgery and recovery",
   titleExam: "lec5",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/5.pdf"
},
{
  id: "an106",
  subject: "تخدير نظري",
  number: 6,
  title: "Anesthesia for Orthopediac surgery",
   titleExam: "lec6",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/6.pdf"
},
 {
  id: "an107",
  subject: "تخدير نظري",
  number: 7,
  title: "ANESTHESIA FOR LAPAROSCOPIC SURGERY",
   titleExam: "lec7",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/7.pdf"
},
 {
  id: "an108",
  subject: "تخدير نظري",
  number: 8,
  title: "anesthesia for Opthalmic surgery",
   titleExam: "lec8",
  teacher: "د.حسام ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/تخدير/th/8.pdf"
  
},

// 🔹 مادة الجراحة النظري - مرحلة ثالثة تخدير
{
  id: "s101",
  subject: "جراحة نظري",
  number: 1,
  title: "Git (Upper and Lower)",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/جراحة/th/SU3K1L1.pdf"
},
{
  id: "s102",
  subject: "جراحة نظري",
  number: 2,
  title: "Git (General Review and Surgical Approaches)",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/جراحة/th/SU3K1L2.pdf"
},
{
  id: "s103",
  subject: "جراحة نظري",
  number: 3,
  title: "Liver",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/جراحة/th/SU3K1L3.pdf"
},
{
  id: "s104",
  subject: "جراحة نظري",
  number: 4,
  title: "Spleen",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/جراحة/th/SU3K1L4.pdf"
},
{
  id: "s105",
  subject: "جراحة نظري",
  number: 5,
  title: "Esophageal Diseases & Surgery",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/جراحة/th/SU3K1L5.pdf"
},
{
  id: "s106",
  subject: "جراحة نظري",
  number: 6,
  title: "Pancreas",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/الكورس الاول/جراحة/th/SU3.K1.L6"
},

// 🔹 مادة عناية النظري - مرحلة ثالثة تخدير
{
    id: "n201",
    subject: "عناية نظري",
    number: 1,
    title: "Intensive care unit (ICU)",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/الكورس الاول/عناية/th/ic3k1l1.pdf"
  },
  {
    id: "n202",
    subject: "عناية نظري",
    number: 2,
    title: "POST ANESTHESIA CARE UNIT (PACU)",
    titleExam: "lec2",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/الكورس الاول/عناية/th/ic3k1l4.pdf"
  },
  {
    id: "n203",
    subject: "عناية نظري",
    number: 3,
    title: "Standard in PACU",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/الكورس الاول/عناية/th/ic3k1l3.pdf"
  },
  {
    id: "n204",
    subject: "عناية نظري",
    number: 4,
    title: "ROUTINE OBSERVATION In the PACU",
    titleExam: "lec4",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/الكورس الاول/عناية/th/ic3k1l4.pdf"
  },
  {
    id: "n205",
    subject: "عناية نظري",
    number: 5,
    title: "Cardiovascular assessment",
    titleExam: "lec5",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/الكورس الاول/عناية/th/ic3k1l5.pdf"
  },
  {
    id: "n206",
    subject: "عناية نظري",
    number: 6,
    title: "Direct arterial blood pressure",
    titleExam: "lec6",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/الكورس الاول/عناية/th/ic3k1l6.pdf"
  }


  ],

  // 🚩 الامتحانات (exams)
exams: [
  {
    id: "e16",
    date: "2025-11-25",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان تخدير نظري",
    dept: "anesthesia",
    notes:["n101","n102","n103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: " وهمي مد ثاني"
  },
   {
    id: "e16",
    date: "2025-11-25",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان تخدير نظري",
    dept: "anesthesia",
    notes:["n101","n102","n103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: " وهمي مد ثاني"
  },
     {
    id: "e26",
    date: "2025-12-25",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان عناية نظري",
    dept: "anesthesia",
    notes:["n206","n205","n204"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: " وهمي مد ثاني"
  }

]

};


  // 🚩 منشورات ثقافية (culture)
  culture: [

//اجهزة**//

{
  id: "d1",
  type: "device",
  title: "ECG (Electrocardiogram – تخطيط القلب)",
  excerpt: "جهاز يسجل النشاط الكهربائي للقلب.",
  image: "https://i.pinimg.com/1200x/21/f3/bc/21f3bc074b583a588945ceece9a32946.jpg",
  body: [
    "جهاز يسجل النشاط الكهربائي للقلب.",
    "يُستخدم لتشخيص اضطرابات نظم القلب والجلطات.",
    "يظهر على شكل موجات كهربائية (P, QRS, T).",
  ]
},
{
  id: "d2",
  type: "device",
  title: "Defibrillator (جهاز الصدمات الكهربائية)",
  excerpt: "جهاز يستخدم لإعادة نبض القلب عند توقفه.",
  image: "https://i.pinimg.com/1200x/eb/e0/5f/ebe05fbfda04e7a4214a4e2bed235d80.jpg",
  body: [
    "جهاز يستخدم لإعادة نبض القلب عند توقفه.",
    "يطلق صدمة كهربائية لإعادة النظم القلبي الطبيعي.",
    "يُستخدم في الإنعاش القلبي الرئوي (CPR).",
  ]
},
{
  id: "t1",
  type: "term",
  title: "Auscultation (الاستماع)",
  excerpt: "الاستماع إلى أصوات الجسم باستخدام السماعة الطبية.",
  image: "https://i.pinimg.com/1200x/c0/7e/de/c07ede4cdaf92d7ed5a139a2d03a7934.jpg",
  body: [
    "الاستماع إلى أصوات الجسم باستخدام السماعة الطبية.",
    "يستخدم غالباً لسماع أصوات القلب، الرئة، والأمعاء.",
    "يساعد على كشف أمراض مثل الالتهاب الرئوي أو اللغط القلبي.",
  ]
},
{
  id: "t2",
  type: "term",
  title: "Spontaneous Ventilation (التهوية التلقائية)",
  excerpt: "عملية التنفس الطبيعي دون تدخل أجهزة.",
  image: "https://i.pinimg.com/1200x/70/ee/76/70ee7641caf616570e3f3e8e5593a8f6.jpg",
  body: [
    "عملية التنفس الطبيعي دون تدخل أجهزة.",
    "تعتمد على عمل الحجاب الحاجز وعضلات التنفس.",
    "مؤشر مهم على سلامة المريض وعدم الحاجة لجهاز التنفس الصناعي.",
  ]
},
{
  id: "t3",
  type: "term",
  title: "Aspiration (الشفط/الاستنشاق الخاطئ)",
  excerpt: "دخول سوائل أو أجسام غريبة إلى مجرى التنفس.",
  image: "https://i.pinimg.com/736x/99/bc/62/99bc62da3fd518d42b38e1a269974426.jpg",
  body: [
    "دخول سوائل أو أجسام غريبة إلى مجرى التنفس.",
    "قد يؤدي إلى التهاب رئوي أو انسداد مجرى الهواء.",
    "شائع عند فقدان الوعي أو ضعف منعكس البلع.",
  ]
},
{
  id: "d3",
  type: "device",
  title: "Vacuum (جهاز الشفط)",
  excerpt: "جهاز لسحب الإفرازات أو السوائل من مجرى التنفس والجروح.",
  image: "https://i.pinimg.com/1200x/90/ef/04/90ef04bb92b3c4ff1aecc87795d494e7.jpg",
  body: [
     "جهاز لسحب الإفرازات أو السوائل من مجرى التنفس والجروح.",
    "يُستخدم أثناء العمليات وأقسام الطوارئ.",
    "يساعد على إبقاء مجرى الهواء مفتوحًا.",
  ]
},
{
  id: "d4",
  type: "device",
  title: "Non-Invasive Blood Pressure Monitor (جهاز ضغط الدم غير الباضع)",
  excerpt: "جهاز يقيس ضغط الدم عبر الكفة الهوائية.",
  image: "https://i.pinimg.com/1200x/be/ee/c4/beeec4a52c923b05ffbba1512d1e9f4a.jpg",
  body: [
    "جهاز يقيس ضغط الدم عبر الكفة الهوائية.",
    "يستخدم في العيادات والمستشفيات لمراقبة المرضى.",
    "يعطي قراءة للضغط الانقباضي والانبساطي.",
  ]
},
{
  id: "d5",
  type: "device",
  title: "Ventilator (جهاز التنفس الصناعي)",
  excerpt: "جهاز يساعد أو يستبدل عملية التنفس.",
  image: "https://i.pinimg.com/736x/cb/4c/48/cb4c48243dc2dd7b7f9d88a640e3b94d.jpg",
  body: [
     "جهاز يساعد أو يستبدل عملية التنفس.",
    "يُستخدم في غرف العمليات والعناية المركزة.",
    "يعمل بأنماط مختلفة مثل الضغط أو الحجم.",
  ]
},
{
  id: "d6",
  type: "device",
  title: "Infusion Pump (مضخة التسريب)",
  excerpt: "جهاز لضخ الأدوية أو السوائل بدقة.",
  image: "https://i.pinimg.com/1200x/5e/79/7a/5e797a0a597f5aa5b5c6fe0367019c47.jpg",
  body: [
     "جهاز لضخ الأدوية أو السوائل بدقة.",
    "يتيح التحكم بمعدل تدفق السوائل إلى المريض.",
    "مهم في العناية المركزة والعمليات.",
  ]
},
{
  id: "d7",
  type: "device",
  title: "Suction Apparatus (جهاز الشفط الطبي)",
  excerpt: "جهاز لسحب الإفرازات والدم من مجرى التنفس.",
  image: "https://i.pinimg.com/1200x/4a/3f/f0/4a3ff0209c533747a805a362faefd82b.jpg",
  body: [
    "جهاز لسحب الإفرازات والدم من مجرى التنفس.",
    "يُستخدم أثناء التنبيب والعمليات.",
    "يحافظ على مجرى التنفس مفتوحًا.",
  ]
},
{
  id: "d8",
  type: "device",
  title: "Portable Crash Cart (عربة الطوارئ المتنقلة)",
  excerpt: "عربة مجهزة بالأدوية والأدوات الطارئة.",
  image: "https://i.pinimg.com/1200x/26/33/db/2633dbec85ad659b81671c76a352af33.jpg",
  body: [
    "عربة مجهزة بالأدوية والأدوات الطارئة.",
    "تحتوي على مزيل رجفان، أدوية إنعاش، وأدوات تنبيب.",
    "تُستخدم في أقسام الطوارئ والإنعاش.",
  ]
},
{
  id: "d9",
  type: "device",
  title: "Ambu Bag (كيس التنفس اليدوي)",
  excerpt: "جهاز يدوي لدعم التنفس في حالات الطوارئ.",
  image: "https://i.pinimg.com/736x/05/48/97/0548970688d6547d3405a63062c53811.jpg",
  body: [
    "جهاز يدوي لدعم التنفس في حالات الطوارئ.",
    "يُستخدم قبل التوصيل بجهاز التنفس الصناعي.",
    "يتطلب ضغط يدوي لتوصيل الهواء للرئتين.",
  ]
},
{
  id: "d10",
  type: "device",
  title: "Medication Box (صندوق الأدوية)",
  excerpt: "صندوق يحتوي على أدوية طبية منظمة.",
  image: "https://i.pinimg.com/736x/4b/1b/83/4b1b83775eb6a3d7ad4f683ca6babe7a.jpg",
  body: [
     "صندوق يحتوي على أدوية طبية منظمة.",
    "يستخدم في الطوارئ لتسريع إعطاء الأدوية.",
    "يشمل أدوية الإنعاش والمضادات الحيوية.",
  ]
},
{
  id: "d11",
  type: "device",
  title: "Mobile X-ray Units (الأشعة السينية المتنقلة)",
  excerpt: "جهاز أشعة يُنقل إلى سرير المريض.",
  image: "https://i.pinimg.com/1200x/83/50/8c/83508ca1ac210f2c71b428b82b001b30.jpg",
  body: [
     "جهاز أشعة يُنقل إلى سرير المريض.",
    "يُستخدم في أقسام العناية والطوارئ.",
    "يساعد على تشخيص كسور الرئة والقلب دون نقل المريض.",
  ]
},
{
  id: "d12",
  type: "device",
  title: "Portable Clinical Laboratory Device (جهاز مختبر متنقل)",
  excerpt: "جهاز صغير لتحليل عينات الدم والبول.",
  image: "https://i.pinimg.com/736x/78/f0/24/78f02470bc2b56ef96ff4d433df91ee7.jpg",
  body: [
    "جهاز صغير لتحليل عينات الدم والبول.",
    "يوفر نتائج سريعة للفحوصات الأساسية.",
    "مفيد في الطوارئ والمناطق النائية.",
  ]
},

{
  id: "t1",
  type: "term",
  title: "Auscultation (الاستماع)",
  excerpt: "الاستماع إلى أصوات الجسم باستخدام السماعة الطبية.",
  image: "https://i.pinimg.com/1200x/c0/7e/de/c07ede4cdaf92d7ed5a139a2d03a7934.jpg",
  body: [
    "الاستماع إلى أصوات الجسم باستخدام السماعة الطبية.",
    "يستخدم غالباً لسماع أصوات القلب، الرئة، والأمعاء.",
    "يساعد على كشف أمراض مثل الالتهاب الرئوي أو اللغط القلبي.",
  ]
},
{
  id: "t2",
  type: "term",
  title: "Spontaneous Ventilation (التهوية التلقائية)",
  excerpt: "عملية التنفس الطبيعي دون تدخل أجهزة.",
  image: "https://i.pinimg.com/1200x/70/ee/76/70ee7641caf616570e3f3e8e5593a8f6.jpg",
  body: [
    "عملية التنفس الطبيعي دون تدخل أجهزة.",
    "تعتمد على عمل الحجاب الحاجز وعضلات التنفس.",
    "مؤشر مهم على سلامة المريض وعدم الحاجة لجهاز التنفس الصناعي.",
  ]
},
{
  id: "t3",
  type: "term",
  title: "Aspiration (الشفط/الاستنشاق الخاطئ)",
  excerpt: "دخول سوائل أو أجسام غريبة إلى مجرى التنفس.",
  image: "https://i.pinimg.com/736x/99/bc/62/99bc62da3fd518d42b38e1a269974426.jpg",
  body: [
    "دخول سوائل أو أجسام غريبة إلى مجرى التنفس.",
    "قد يؤدي إلى التهاب رئوي أو انسداد مجرى الهواء.",
    "شائع عند فقدان الوعي أو ضعف منعكس البلع.",
  ]
},
{
  id: "t4",
  type: "term",
  title: "Glottis (الحنجرة العليا)",
  excerpt: "الفتحة بين الحبلين الصوتيين.",
  image: "https://i.pinimg.com/1200x/72/63/41/726341649f9fa289e91d9e1fcd18b822.jpg",
  body: [
    "الفتحة بين الحبلين الصوتيين.",
    "جزء مهم في مرور الهواء وإصدار الصوت.",
    "تغلق أثناء البلع لمنع دخول الطعام والشراب.",
  ]
},
{
  id: "t5",
  type: "term",
  title: "Cricoid Cartilage (غضروف الحلق الحلقي)",
  excerpt: "غضروف حلقي يقع أسفل الحنجرة.",
  image: "https://i.pinimg.com/1200x/cd/1c/64/cd1c64f2f3818b60c37e8c90748d4ab9.jpg",
  body: [
    "غضروف حلقي يقع أسفل الحنجرة.",
    "أصغر غضروف كامل في مجرى التنفس.",
    "يستخدم كمرجع أثناء التنبيب الرغامي.",
  ]
},
{
  id: "t6",
  type: "term",
  title: "Necrosis (النخر)",
  excerpt: "موت الخلايا أو الأنسجة.",
  image: "https://i.pinimg.com/1200x/aa/77/3d/aa773dcd91f1f52f5f1840bc7a92a290.jpg",
  body: [
     "موت الخلايا أو الأنسجة.",
    "قد ينجم عن نقص التروية أو العدوى.",
    "يُعتبر علامة مرضية خطيرة تستوجب التدخل.",
  ]
},
{
  id: "t7",
  type: "term",
  title: "Tracheal Mucosa (الغشاء المخاطي للقصبة الهوائية)",
  excerpt: "طبقة تغطي القصبة الهوائية وتحميها.",
  image: "https://i.pinimg.com/1200x/3e/84/f4/3e84f4a8b421a2f3f13d75029d7318b5.jpg",
  body: [
     "طبقة تغطي القصبة الهوائية وتحميها.",
    "تفرز مواد مخاطية لترطيب وحماية مجرى الهواء.",
    "قد تتضرر من التنبيب لفترات طويلة.",
  ]
},
{
  id: "t8",
  type: "term",
  title: "Wrinkles (التجاعيد/الطيات)",
  excerpt: "طيات جلدية أو أنسجة تظهر مع العمر أو الحركة.",
  image: "https://i.pinimg.com/1200x/f4/9a/38/f49a383f9e189c1a48ef86ef0a229f8b.jpg",
  body: [
     "طيات جلدية أو أنسجة تظهر مع العمر أو الحركة.",
    "قد تكون طبيعية أو مرتبطة بجفاف وفقدان مرونة الجلد.",
    "أحياناً تُلاحظ في الأغشية المخاطية أيضاً.",
  ]
},
{
  id: "t9",
  type: "term",
  title: "Sinus Infection (التهاب الجيوب)",
  excerpt: "التهاب في الجيوب الأنفية.",
  image: "https://i.pinimg.com/1200x/85/24/ab/8524ab4fa37de7cf34596f407b14b870.jpg",
  body: [
    "التهاب في الجيوب الأنفية.",
    "يسبب احتقان، صداع، وإفرازات أنفية.",
    "قد يكون بكتيري أو فيروسي.",
  ]
},
{
  id: "t10",
  type: "term",
  title: "أوكسيفينيا (Hypoxemia)",
  excerpt: "قلة الأكسجين في الدم.",
  image: "https://i.pinimg.com/1200x/c7/bb/f4/c7bbf4a97022799b4d6683d3e7064565.jpg",
  body: [
    "الأوكسيفينيا تعني انخفاض مستوى الأكسجين في الدم الشرياني عن المعدل الطبيعي.",
    "من أهم أسبابها أمراض الرئة المزمنة مثل الربو و COPD، أمراض القلب، أو التسمم بغازات معينة.",
    "أعراضها تشمل ضيق التنفس، زُرقة الشفاه والأظافر، صداع، وتعب شديد.",
    "التشخيص يتم بواسطة قياس نسبة الأكسجين في الدم (SpO2) وتحليل الغازات الشريانية.",
  ]
},
{
  id: "t11",
  type: "term",
  title: "ضغط دم مرتفع (Hypertension)",
  excerpt: "زيادة ضغط الدم عن الطبيعي.",
  image: "https://i.pinimg.com/1200x/58/5f/07/585f07ca7d1ed41e41da7e35821502fc.jpg",
  body: [
    "ارتفاع ضغط الدم من أكثر الأمراض المزمنة شيوعًا في العالم.",
    "قد لا يشعر المريض بأي أعراض واضحة، لكنه يزيد من خطر السكتة الدماغية والنوبات القلبية.",
    "الوقاية تشمل ممارسة الرياضة بانتظام، تناول غذاء صحي، وتجنب التوتر.",
    "المتابعة الدورية لقياس الضغط مهمة للسيطرة على المرض.",
    
  ]
},
{
  id: "t12",
  type: "term",
  title: "Hypertrophy of Adenoid (تضخم اللحمية)",
  excerpt: "زيادة حجم النسيج اللمفاوي خلف الأنف.",
  image: "https://i.pinimg.com/1200x/5b/0d/7e/5b0d7e3c1a3c29e7dcae86c2fef8ef2f.jpg",
  body: [
    "التهاب في الجيوب الأنفية.",
    "يؤدي إلى انسداد الأنف وصعوبة التنفس.",
    "شائع عند الأطفال وقد يسبب الشخير.",
  ]
},
{
  id: "t13",
  type: "term",
  title: "Nasal Mucosa (الغشاء المخاطي للأنف)",
  excerpt: "بطانة الأنف الداخلية التي تفرز المخاط.",
  image: "https://i.pinimg.com/1200x/72/97/33/72973388e67e66e930d5a2a3dd4206cf.jpg",
  body: [
    "بطانة الأنف الداخلية التي تفرز المخاط.",
    "ترطب الهواء وتعمل كحاجز ضد الميكروبات.",
    "تتعرض للالتهاب في حالات الحساسية أو العدوى.",
  ]
},
{
  id: "t14",
  type: "term",
  title: "Neonatal (حديث الولادة)",
  excerpt: "الفترة الأولى بعد الولادة حتى 28 يومًا.",
  image: "https://i.pinimg.com/1200x/16/3c/1c/163c1c06de02879d8321c4a3ed2a59d2.jpg",
  body: [
    "الفترة الأولى بعد الولادة حتى 28 يومًا.",
    "تتميز بحاجة عالية للرعاية الطبية الدقيقة.",
    "يشمل متابعة الوزن، التنفس، والتغذية.",
  ]
},
{
  id: "t15",
  type: "term",
  title: "Herniation (الفتق)",
  excerpt: "خروج عضو أو نسيج من مكانه الطبيعي.",
  image: "https://i.pinimg.com/1200x/5c/fb/9a/5cfb9a826548d7a9fa60fd6f4d2eb25c.jpg",
  body: [
    "خروج عضو أو نسيج من مكانه الطبيعي.",
    "قد يحدث في البطن أو الدماغ (فتق دماغي).",
    "يتطلب علاج جراحي في بعض الحالات.",
  ]
},
{
  id: "t16",
  type: "term",
  title: "Oesophageal (المريئي)",
  excerpt: "مرتبط بالمريء، الأنبوب الناقل للطعام.",
  image: "https://i.pinimg.com/1200x/d3/7f/9d/d37f9df1db16bc7b61c1b2b7fbb6b6b3.jpg",
  body: [
    "مرتبط بالمريء، الأنبوب الناقل للطعام.",
    "يستخدم لوصف أمراض مثل الارتجاع المريئي.",
    "المريء جزء أساسي في الجهاز الهضمي العلوي.",
  ]
},
{
  id: "t17",
  type: "term",
  title: "Bronchial (الشعبي/القصبي)",
  excerpt: "مرتبط بالشُعب الهوائية.",
  image: "https://i.pinimg.com/1200x/cc/0d/54/cc0d54e87c4d1f5d90bca89ab41c37b6.jpg",
  body: [
    "مرتبط بالشُعب الهوائية.",
    "يستخدم في أمراض مثل التهاب الشعب الهوائية.",
    "جزء رئيسي في نقل الهواء إلى الرئة.",
  ]
},
{
  id: "t18",
  type: "term",
  title: "Septic (إنتاني)",
  excerpt: "مرتبط بالعدوى الشديدة أو التسمم الدموي.",
  image: "https://i.pinimg.com/1200x/58/5d/41/585d41a5f388a7b72eb893ad2d621be3.jpg",
  body: [
    "مرتبط بالعدوى الشديدة أو التسمم الدموي.",
    "قد يؤدي إلى صدمة إنتانية.",
    "يتطلب علاج سريع بالمضادات الحيوية والدعم الطبي.",
  ]
},
{
  id: "t19",
  type: "term",
  title: "RR (Respiratory Rate – معدل التنفس)",
  excerpt: "عدد مرات التنفس في الدقيقة.",
  image: "https://i.pinimg.com/1200x/22/8b/9f/228b9f0c78389d9a90c55e312c2a0e87.jpg",
  body: [
    "عدد مرات التنفس في الدقيقة.",
    "القيمة الطبيعية للبالغين: 12–20 نفس/دقيقة.",
    "مؤشر مهم في تقييم حالة المريض.",
  ]
},
{
  id: "t20",
  type: "term",
  title: "BP (Blood Pressure – ضغط الدم)",
  excerpt: "قوة دفع الدم على جدران الشرايين.",
  image: "https://i.pinimg.com/1200x/94/5d/47/945d477e4c5e6f8f43c1556e907eec70.jpg",
  body: [
     "قوة دفع الدم على جدران الشرايين.",
    "يُقاس بالملليمتر زئبق (mmHg).",
    "الطبيعي: 120/80 mmHg تقريبًا.",
  ]
},
{
  id: "t21",
  type: "term",
  title: "PR (Pulse Rate – معدل النبض)",
  excerpt: "عدد ضربات القلب في الدقيقة.",
  image: "https://i.pinimg.com/1200x/5d/63/8d/5d638d2aaf5e54f17c70f26aee5cb8aa.jpg",
  body: [
    "عدد ضربات القلب في الدقيقة.",
    "المعدل الطبيعي: 60–100 نبضة/دقيقة.",
    "يمكن قياسه في المعصم أو العنق.",
  ]
},
{
  id: "t21",
  type: "term",
  title: "BT (Body Temperature – درجة حرارة الجسم)",
  excerpt: "الحرارة الداخلية للجسم.",
  image: "https://i.pinimg.com/1200x/94/1f/90/941f90d3f8134b7a4ff66e3f322a9d1c.jpg",
  body: [
    "الحرارة الداخلية للجسم.",
    "القيمة الطبيعية: 36.5 – 37.5 °C.",
    "ارتفاعها يدل على الحمى، وانخفاضها على انخفاض الحرارة.",
  ]
},
{
  id: "t22",
  type: "term",
  title: "CO (Cardiac Output – النتاج القلبي)",
  excerpt: "كمية الدم التي يضخها القلب في الدقيقة.",
  image: "https://i.pinimg.com/1200x/d2/b7/51/d2b751e80a25959c157cc71cd5b39b7d.jpg",
  body: [
    "كمية الدم التي يضخها القلب في الدقيقة.",
    "تساوي حجم الضربة × معدل ضربات القلب.",
    "مؤشر على كفاءة عمل القلب.",
  ]
},
{
  id: "t23",
  type: "term",
  title: "O2 in Blood (الأكسجين في الدم)",
  excerpt: "كمية الأكسجين الذائب في الدم.",
  image: "https://i.pinimg.com/1200x/e7/73/6a/e7736ac9f0d62cdd46960a92bb26fb59.jpg",
  body: [
     "كمية الأكسجين الذائب في الدم.",
    "يُقاس بتحليل الغازات الشريانية.",
    "النقص يؤدي إلى نقص الأكسجة (Hypoxemia).",
  ]
},
{
  id: "t24",
  type: "term",
  title: "CO2 in Blood (ثاني أكسيد الكربون في الدم)",
  excerpt: "كمية ثاني أكسيد الكربون في الدم.",
  image: "https://i.pinimg.com/1200x/b8/6d/47/b86d47a0d5c59e1b7f42cb11c5d4a92d.jpg",
  body: [
    "كمية ثاني أكسيد الكربون في الدم.",
    "يُقاس بتحليل الغازات.",
    "ارتفاعه يدل على قصور تهوية أو مرض رئوي.",
  ]
},
{
  id: "t25",
  type: "term",
  title: "SpO2 (تشبع الأكسجين)",
  excerpt: "النسبة المئوية للهيموغلوبين المشبع بالأكسجين.",
  image: "https://i.pinimg.com/1200x/2f/11/9a/2f119a40b2e6472f97ddce5d8d76b6f5.jpg",
  body: [
     "النسبة المئوية للهيموغلوبين المشبع بالأكسجين.",
    "القيمة الطبيعية: 95–100%.",
    "يُقاس بجهاز Pulse Oximeter.",
  ]
},
{
  id: "t26",
  type: "term",
  title: "ETCO2 (End Tidal CO2 – ثاني أكسيد الكربون الزفيري)",
  excerpt: "قياس CO2 في نهاية الزفير.",
  image: "https://i.pinimg.com/1200x/34/14/0c/34140cf4d67f90a48bdf0d473a9a5c16.jpg",
  body: [
     "قياس CO2 في نهاية الزفير.",
    "المعدل الطبيعي: 35–45 mmHg.",
    "يستخدم لمراقبة التهوية أثناء التخدير.",
  ]
},
{
  id: "t27",
  type: "term",
  title: "Hypothermia (انخفاض الحرارة)",
  excerpt: "هبوط حرارة الجسم عن 35°C.",
  image: "https://i.pinimg.com/1200x/70/23/9b/70239b08fc144f2a9c7474a2a1f28f47.jpg",
  body: [
     "هبوط حرارة الجسم عن 35°C.",
    "يسبب رجفان، ضعف وارتباك.",
    "قد يحدث أثناء العمليات أو التعرض للبرد.",
  ]
},
{
  id: "t28",
  type: "term",
  title: "Hyperthermia (ارتفاع الحرارة)",
  excerpt: "زيادة حرارة الجسم بشكل مفرط.",
  image: "https://i.pinimg.com/1200x/15/42/65/154265cc9f6e0466a48b9692d9b8b1e7.jpg",
  body: [
    "زيادة حرارة الجسم بشكل مفرط.",
    "قد تكون بسبب عدوى، ضربة شمس، أو فرط الاستقلاب.",
    "تستدعي علاج لتجنب تلف الأعضاء.",
  ]
},
{
  id: "t29",
  type: "term",
  title: "Fluid Disturbances (اضطرابات السوائل)",
  excerpt: "خلل في توازن السوائل بالجسم.",
  image: "https://i.pinimg.com/1200x/83/26/71/832671250dc3d21390c6f2365e4f51c8.jpg",
  body: [
    "خلل في توازن السوائل بالجسم.",
    "تشمل الجفاف أو فرط السوائل.",
    "تؤثر على الدورة الدموية والأعضاء الحيوية.",
  ]
},
{
  id: "t30",
  type: "term",
  title: "Electrolyte Disturbances (اضطرابات الأملاح)",
  excerpt: "خلل في مستويات الصوديوم، البوتاسيوم، الكالسيوم…",
  image: "https://i.pinimg.com/1200x/77/77/44/777744c5e234cba0da25a2163e3082a7.jpg",
  body: [
    "خلل في مستويات الصوديوم، البوتاسيوم، الكالسيوم…",
    "قد تسبب اضطراب نبض القلب أو تشنجات.",
    "تُقاس بفحوصات الدم وتحتاج تصحيح عاجل.",
  ]
},
{
  id: "t31",
  type: "term",
  title: "Nausea (الغثيان)",
  excerpt: "إحساس بالرغبة في التقيؤ.",
  image: "https://i.pinimg.com/1200x/41/3b/55/413b55a2edc29377f0de9e83f1f10e53.jpg",
  body: [
    "إحساس بالرغبة في التقيؤ.",
    "شائع بعد التخدير أو تناول بعض الأدوية.",
    "قد يرتبط بأمراض الجهاز الهضمي أو العصبي.",
  ]
},
{
  id: "t32",
  type: "term",
  title: "Airway Reflexes (منعكسات مجرى الهواء)",
  excerpt: "ردود فعل تحمي مجرى التنفس.",
  image: "https://i.pinimg.com/1200x/8c/6f/2b/8c6f2ba15a0db76b6571f6ac17b9a127.jpg",
  body: [
    "ردود فعل تحمي مجرى التنفس.",
    "تشمل السعال والبلع لمنع دخول الأجسام الغريبة.",
    "قد تتأثر بالتخدير أو الأمراض العصبية.",
  ]
},
{
  id: "t33",
  type: "term",
  title: "Hyperglycemia (ارتفاع السكر بالدم)",
  excerpt: "ارتفاع مستوى الجلوكوز في الدم.",
  image: "https://i.pinimg.com/736x/6a/a0/0a/6aa00a40d8979ad22d2705344344cb6c.jpg",
  body: [
    "ارتفاع السكر في الدم يعني أن مستوى الجلوكوز في الدم أعلى من الطبيعي.",
    "مثال: قراءة سكر الدم 200 ملغ/ديسيلتر بعد الوجبة.",
    "شرح بسيط: الجسم لا يستخدم الجلوكوز بشكل فعّال بسبب نقص الإنسولين أو مقاومة الإنسولين.",
    "طريقة الفهم: تخيل أن الخلايا مثل المحركات، والجلوكوز هو الوقود، إذا لم يتم توصيله بشكل صحيح يظل في الدم.",

  ]
},
{
  id: "t34",
  type: "term",
  title: "Hypotension (انخفاض ضغط الدم)",
  excerpt: "انخفاض ضغط الدم عن المعدل الطبيعي.",
  image: "https://i.pinimg.com/1200x/bd/ae/fb/bdaefbc97787c63fb380baa655d311d7.jpg",
  body: [
    "انخفاض ضغط الدم يعني أن ضغط الدم في الشرايين أقل من الطبيعي.",
    "مثال: قراءة ضغط الدم 85/55 ملم زئبق.",
    "شرح بسيط: تدفق الدم إلى الأعضاء الحيوية قد يكون غير كافٍ.",
    "طريقة الفهم: تخيل خزان مياه ضغطه منخفض، لا يصل الماء لكل الأنابيب.",
    {
      type: "link",
      text: "راجع أيضًا: Tachycardia (تسرع ضربات القلب)",
      to: "t5"
    }
  ]
},
{
  id: "t35",
  type: "term",
  title: "Tachycardia (تسرع ضربات القلب)",
  excerpt: "زيادة معدل ضربات القلب عن الطبيعي.",
  image: "https://i.pinimg.com/736x/3f/11/c6/3f11c601f3d344bc8efa8c2d908729a6.jpg",
  body: [
    "تسرع ضربات القلب يعني أن القلب ينبض بسرعة أعلى من الطبيعي (>100 ضربة في الدقيقة للبالغين).",
    "مثال: شخص معدل ضرباته 120 نبضة/دقيقة أثناء الراحة.",
    "شرح بسيط: القلب يعمل أسرع لضخ الدم بسبب حاجة الجسم للأكسجين أو بسبب مشاكل قلبية.",
    "طريقة الفهم: تخيل مضخة ماء تعمل بسرعة عالية لتلبية الطلب الكبير فجأة.",
    {
      type: "link",
      text: "راجع أيضًا: Bradycardia (بطء ضربات القلب)",
      to: "t6"
    }
  ]
},
{
  id: "t36",
  type: "term",
  title: "Bradycardia (بطء ضربات القلب)",
  excerpt: "انخفاض معدل ضربات القلب عن الطبيعي.",
  image: "https://i.pinimg.com/736x/3b/08/1b/3b081b9d5963e0b62c3a64b7df923901.jpg",
  body: [
    "بطء ضربات القلب يعني أن القلب ينبض ببطء أقل من الطبيعي (<60 ضربة في الدقيقة للبالغين).",
    "مثال: شخص معدل ضرباته 50 نبضة/دقيقة أثناء الراحة.",
    "شرح بسيط: قد يكون بسبب لياقة عالية، أو مشاكل كهربائية في القلب.",
    "طريقة الفهم: تخيل مضخة ماء تعمل ببطء، قد لا يفي الطلب باحتياجات الجسم.",
    {
      type: "link",
      text: "راجع أيضًا: Hypertension (ارتفاع ضغط الدم)",
      to: "t1"
    }
  ]
},
{
  id: "t37",
  type: "term",
  title: "MRP2 Transporter (ناقل البيليروبين)",
  excerpt: "بروتين ينقل البيليروبين من خلايا الكبد إلى القنوات الصفراوية.",
  image: "https://i.pinimg.com/564x/47/67/e1/4767e162a2a51006f54bb569de3bafe5.jpg",
  body: [
    "بروتين ينقل البيليروبين من خلايا الكبد إلى القنوات الصفراوية.",
    "يُعد جزءًا من آلية التخلص من البيليروبين المباشر.",
    "خلل هذا الناقل يظهر في متلازمة Dubin-Johnson."
  ]
},
{
  id: "t38",
  type: "term",
  title: "UDP-glucuronyl Transferase",
  excerpt: "إنزيم كبدي يحوّل البيليروبين غير المباشر إلى مباشر.",
  image: "https://i.pinimg.com/564x/f7/3e/61/f73e61728e20b14bc7f118bd1478d772.jpg",
  body: [
    "إنزيم كبدي يحوّل البيليروبين غير المباشر إلى مباشر.",
    "يرتبط البيليروبين بحمض الغلوكورونيك ليُصبح قابلًا للذوبان في الماء.",
    "نقص هذا الإنزيم يسبب أمراضًا مثل Gilbert's Syndrome و Crigler-Najjar."
  ]
},
{
  id: "t39",
  type: "term",
  title: "Bilirubin (البيليروبين)",
  excerpt: "صبغة صفراء تنتج من تحلل كريات الدم الحمراء.",
  image: "https://i.pinimg.com/564x/bc/62/6d/bc626d845f1129a6bd04e98b8f6ccafd.jpg",
  body: [
    "صبغة صفراء تنتج من تحلل كريات الدم الحمراء.",
    "يوجد بنوعين: غير مباشر (غير مذاب) ومباشر (مقترن ومذاب).",
    "ارتفاعه يؤدي إلى اليرقان، ويمكن أن يدل على مشاكل بالكبد أو الدم أو القنوات الصفراوية."
  ]
},

//اجهزة**//

{
  id: "d1",
  type: "device",
  title: "ECG (Electrocardiogram – تخطيط القلب)",
  excerpt: "جهاز يسجل النشاط الكهربائي للقلب.",
  image: "https://i.pinimg.com/1200x/21/f3/bc/21f3bc074b583a588945ceece9a32946.jpg",
  body: [
    "جهاز يسجل النشاط الكهربائي للقلب.",
    "يُستخدم لتشخيص اضطرابات نظم القلب والجلطات.",
    "يظهر على شكل موجات كهربائية (P, QRS, T).",
  ]
},
{
  id: "d2",
  type: "device",
  title: "Defibrillator (جهاز الصدمات الكهربائية)",
  excerpt: "جهاز يستخدم لإعادة نبض القلب عند توقفه.",
  image: "https://i.pinimg.com/1200x/eb/e0/5f/ebe05fbfda04e7a4214a4e2bed235d80.jpg",
  body: [
    "جهاز يستخدم لإعادة نبض القلب عند توقفه.",
    "يطلق صدمة كهربائية لإعادة النظم القلبي الطبيعي.",
    "يُستخدم في الإنعاش القلبي الرئوي (CPR).",
  ]
},
{
  id: "d3",
  type: "device",
  title: "Vacuum (جهاز الشفط)",
  excerpt: "جهاز لسحب الإفرازات أو السوائل من مجرى التنفس والجروح.",
  image: "https://i.pinimg.com/1200x/90/ef/04/90ef04bb92b3c4ff1aecc87795d494e7.jpg",
  body: [
     "جهاز لسحب الإفرازات أو السوائل من مجرى التنفس والجروح.",
    "يُستخدم أثناء العمليات وأقسام الطوارئ.",
    "يساعد على إبقاء مجرى الهواء مفتوحًا.",
  ]
},
{
  id: "d4",
  type: "device",
  title: "Non-Invasive Blood Pressure Monitor (جهاز ضغط الدم غير الباضع)",
  excerpt: "جهاز يقيس ضغط الدم عبر الكفة الهوائية.",
  image: "https://i.pinimg.com/1200x/be/ee/c4/beeec4a52c923b05ffbba1512d1e9f4a.jpg",
  body: [
    "جهاز يقيس ضغط الدم عبر الكفة الهوائية.",
    "يستخدم في العيادات والمستشفيات لمراقبة المرضى.",
    "يعطي قراءة للضغط الانقباضي والانبساطي.",
  ]
},
{
  id: "d5",
  type: "device",
  title: "Ventilator (جهاز التنفس الصناعي)",
  excerpt: "جهاز يساعد أو يستبدل عملية التنفس.",
  image: "https://i.pinimg.com/736x/cb/4c/48/cb4c48243dc2dd7b7f9d88a640e3b94d.jpg",
  body: [
     "جهاز يساعد أو يستبدل عملية التنفس.",
    "يُستخدم في غرف العمليات والعناية المركزة.",
    "يعمل بأنماط مختلفة مثل الضغط أو الحجم.",
  ]
},
{
  id: "d6",
  type: "device",
  title: "Infusion Pump (مضخة التسريب)",
  excerpt: "جهاز لضخ الأدوية أو السوائل بدقة.",
  image: "https://i.pinimg.com/1200x/5e/79/7a/5e797a0a597f5aa5b5c6fe0367019c47.jpg",
  body: [
     "جهاز لضخ الأدوية أو السوائل بدقة.",
    "يتيح التحكم بمعدل تدفق السوائل إلى المريض.",
    "مهم في العناية المركزة والعمليات.",
  ]
},
{
  id: "d7",
  type: "device",
  title: "Suction Apparatus (جهاز الشفط الطبي)",
  excerpt: "جهاز لسحب الإفرازات والدم من مجرى التنفس.",
  image: "https://i.pinimg.com/1200x/4a/3f/f0/4a3ff0209c533747a805a362faefd82b.jpg",
  body: [
    "جهاز لسحب الإفرازات والدم من مجرى التنفس.",
    "يُستخدم أثناء التنبيب والعمليات.",
    "يحافظ على مجرى التنفس مفتوحًا.",
  ]
},
{
  id: "d8",
  type: "device",
  title: "Portable Crash Cart (عربة الطوارئ المتنقلة)",
  excerpt: "عربة مجهزة بالأدوية والأدوات الطارئة.",
  image: "https://i.pinimg.com/1200x/26/33/db/2633dbec85ad659b81671c76a352af33.jpg",
  body: [
    "عربة مجهزة بالأدوية والأدوات الطارئة.",
    "تحتوي على مزيل رجفان، أدوية إنعاش، وأدوات تنبيب.",
    "تُستخدم في أقسام الطوارئ والإنعاش.",
  ]
},
  ]
/* ---------- مختصر DOM ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const qsParam = (k) => new URLSearchParams(location.search).get(k);

/* ---------- الأدوات ---------- */
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g,(m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]); }
function debounce(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t = setTimeout(()=>fn(...a), ms); }; }


/* ---------- عناصر البحث التفاعلي (Autocomplete) ---------- */
function initAutocomplete(inputEl, onSelect){
  // container لعرض الاقتراحات
  const wrapper = document.createElement('div');
  wrapper.className = 'autocomplete';
  inputEl.parentNode.insertBefore(wrapper, inputEl);
  wrapper.appendChild(inputEl);

  const list = document.createElement('div');
  list.className = 'autocomplete-list';
  list.style.display = 'none';
  wrapper.appendChild(list);

  // صنع مجموعة اقتراحات من العناوين (دورات، ملازم، منشورات)
  const items = [
    ...DB.courses.map(c => ({
        type: 'course',
        id: c.id,
        title: c.title,
        meta: `${c.subject} - ${c.stage}` // ✅ إضافة المرحلة هنا
    })),
    ...DB.notes.map(n => ({
    type: 'note',
    id: n.id,
    title: `مذكرة ${n.number}: ${n.title}:الكورس ${n.course}`, // ✅ ترقيم المذكرة بالـ number
    meta: `${n.subject} - ${n.stage} - الكورس ${n.course}` // ✅ إضافة الكورس هنا
})),

    ...DB.culture.map(p => ({
        type: 'post',
        id: p.id,
        title: p.title,
        meta: p.type
    }))
];

  let activeIndex = -1;
  function renderList(filtered){
    list.innerHTML = filtered.map(it=>`<div class="autocomplete-item" data-type="${it.type}" data-id="${it.id}"><span>${escapeHtml(it.title)}</span><small class="muted">${escapeHtml(it.meta)}</small></div>`).join('');
    list.style.display = filtered.length ? 'block' : 'none';
    activeIndex = -1;
  }

  function query(q){
    if(!q) return renderList([]);
    const low = q.toLowerCase();
    const filtered = items.filter(it => (it.title + ' ' + it.meta).toLowerCase().includes(low)).slice(0,8);
    renderList(filtered);
  }

  const run = debounce((ev)=> query(ev.target.value), 160);
  inputEl.addEventListener('input', run);

  // keyboard navigation
  inputEl.addEventListener('keydown', (e)=>{
    if(list.style.display === 'none') return;
    const nodes = Array.from(list.children);
    if(e.key === 'ArrowDown'){ activeIndex = Math.min(activeIndex+1, nodes.length-1); e.preventDefault(); }
    else if(e.key === 'ArrowUp'){ activeIndex = Math.max(activeIndex-1, 0); e.preventDefault(); }
    else if(e.key === 'Enter'){ e.preventDefault(); if(activeIndex>=0) nodes[activeIndex].click(); else { inputEl.form && inputEl.form.requestSubmit(); } }
    nodes.forEach((n,i)=> n.classList.toggle('active', i===activeIndex));
    if(activeIndex>=0) nodes[activeIndex].scrollIntoView({block:'nearest', inline:'nearest'});
  });

  // click on item
  list.addEventListener('click', (e)=>{
    const item = e.target.closest('.autocomplete-item'); if(!item) return;
    const type = item.dataset.type; const id = item.dataset.id;
    list.style.display = 'none';
    inputEl.value = item.querySelector('span').textContent;
    if(typeof onSelect === 'function') onSelect({type, id});
  });

  // click outside -> hide
  document.addEventListener('click', (e)=>{ if(!wrapper.contains(e.target)) list.style.display = 'none'; });
}

/* ---------- تنسيقات الصفحة العامة ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const el = $('#year'); if(el) el.textContent = new Date().getFullYear();

  // init autocomplete on any search inputs that exist in header/hero
  const homeInput = $('#homeSearch');
  if(homeInput) initAutocomplete(homeInput, ({type,id})=>{
    if(type === 'course') location.href = `course-details.html?courseId=${id}`;
    else if(type === 'note') location.href = `notes.html?filter=${id}`;
    else if(type === 'post') location.href = `culture-post.html?postId=${id}`;
  });

  // generic: if a search field exists on courses page, enhance it too
  const coursesSearch = $('#courseSearch');
  if(coursesSearch) initAutocomplete(coursesSearch, ({type,id})=>{
    if(type==='course') location.href = `course-details.html?courseId=${id}`;
    else if(type==='post') location.href = `culture-post.html?postId=${id}`;
  });
});

/* ---------- Renderers (per page) ---------- */

/* Helpers لبطاقات */
function formatCourseCard(course){
  return `
    <article class="card">
      <img class="thumb" src="${course.thumb}" alt="${escapeHtml(course.title)}" />
      <div class="content">
        <div class="chips"><span class="chip">${escapeHtml(course.subject)}</span><span class="chip">${escapeHtml(course.stage)}</span></div>
        <h3>${escapeHtml(course.title)}</h3>
        <p class="muted">${escapeHtml(course.desc)}</p>
        <div style="margin-top:10px;display:flex;gap:8px;justify-content:flex-start">
          <a class="btn" href="course-details.html?courseId=${course.id}">تفاصيل</a>
          <a class="btn ghost" href="notes.html?course=${course.id}">ملازم متعلقة</a>
        </div>
      </div>
    </article>
  `;
}
function formatNoteCard(note){
  return `
    <article class="card">
      <div class="content">
        <div class="chips">
          <span class="chip">${escapeHtml(note.subject)}</span>
          <span class="chip">${escapeHtml(note.stage)}</span> <!-- ✅ إضافة المرحلة هنا -->
          <span class="chip">مذكرة ${note.number}</span>
        </div>
        <h3>${escapeHtml(note.title)}</h3>
        <p class="muted">المدرّس: ${escapeHtml(note.teacher)}</p>
        <div style="margin-top:10px;display:flex;gap:8px">
          <a class="btn" href="${note.file}" download>تحميل</a>
        </div>
      </div>
    </article>
  `;
}

function formatCultureCard(post){
  return `
    <article class="card">
      <img class="thumb" src="${post.image}" alt="${escapeHtml(post.title)}" />
      <div class="content">
        <h3>${escapeHtml(post.title)}</h3>
        <p class="muted">${escapeHtml(post.excerpt)}</p>
        <div style="margin-top:10px;display:flex;gap:8px">
          <a class="btn" href="culture-post.html?postId=${post.id}">اقرأ</a>
        </div>
      </div>
    </article>
  `;
}

/* Page: Home */
function renderHome(){
  const hc = $('#homeCourses'); if(hc) hc.innerHTML = DB.courses.slice(0,3).map(formatCourseCard).join('');
  const hn = $('#homeNotes'); if(hn) hn.innerHTML = DB.notes.slice(0,3).map(formatNoteCard).join('');
  const hcu = $('#homeCulture'); if(hcu) hcu.innerHTML = DB.culture.slice(0,3).map(formatCultureCard).join('');
  const hf = $('#homeSearchForm');
  if(hf) hf.addEventListener('submit', e=>{
    e.preventDefault();
    const q = $('#homeSearch').value.trim();
    if(!q) return location.href='courses.html';
    location.href = `courses.html?search=${encodeURIComponent(q)}`;
  });
}

/* Page: Departments */
function renderDepartments(){
  const root = $('#deptList');
  if(!root) return;
  root.innerHTML = DB.departments.map(d=>`
    <article class="card">
      <div class="content">
        <h3>${escapeHtml(d.name)}</h3>
        <p class="muted">${escapeHtml(d.about)}</p>
        <div style="margin-top:10px">
          <button class="btn" data-dept="${d.id}">عرض القسم</button>
        </div>
      </div>
    </article>
  `).join('');

  document.body.addEventListener('click', (e)=>{
    const deptId = e.target.getAttribute('data-dept');
    if(deptId) showDeptDetails(deptId);
  });
}
function showDeptDetails(deptId){
  const d = DB.departments.find(x=>x.id===deptId); if(!d) return;
  $('#deptTitle').textContent = d.name;
  $('#deptStages').innerHTML = d.stages.map(s=>`<button class="chip" data-stage="${encodeURIComponent(s)}">${escapeHtml(s)}</button>`).join(' ');
  $('#deptTeachers').innerHTML = d.teachers.map(t=>`<span class="chip">${escapeHtml(t)}</span>`).join(' ');
  $('#deptDetails').hidden = false;
  $('#stageContent').innerHTML = d.stages.map(stage=>{
    const courses = DB.courses.filter(c=>c.dept===deptId && c.stage===stage);
    const notes = DB.notes.filter(n=>n.dept===deptId && n.stage===stage);
    return `<div class="card"><div class="content"><h4>${escapeHtml(stage)}</h4>
      <div><strong>دورات:</strong> ${courses.map(c=>escapeHtml(c.title)).join(', ') || 'لا توجد'}</div>
      <div><strong>ملازم:</strong> ${notes.map(n=>escapeHtml(n.title)).join(', ') || 'لا توجد'}</div></div></div>`;
  }).join('');
}

/* Page: Courses */
function renderCourses(){
  const deptSel = $('#filterDepartment');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value=\"\">كل الأقسام</option>';
  DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  const uniqueStages = [...new Set(DB.courses.map(c=>c.stage))];
  const stageSel = $('#filterStage');
  stageSel.innerHTML = '<option value="">كل المراحل</option>';
  uniqueStages.forEach(s=> stageSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));

  const grid = $('#coursesGrid');
  const initQuery = qsParam('search') || '';

  $('#courseSearch').value = initQuery;

  function applyFilters(){
    const q = ($('#courseSearch').value || '').trim().toLowerCase();
    const dept = $('#filterDepartment').value;
    const stage = $('#filterStage').value;
    let list = DB.courses.slice();
    if(q) list = list.filter(c => (c.title + ' ' + c.desc + ' ' + c.subject).toLowerCase().includes(q));
    if(dept) list = list.filter(c=>c.dept===dept);
    if(stage) list = list.filter(c=>c.stage===stage);
    grid.innerHTML = list.map(formatCourseCard).join('') || '<div class="card"><div class="content">لا توجد نتائج</div></div>';
  }

  $('#courseSearch').addEventListener('input', debounce(applyFilters, 160));
  $('#filterDepartment').addEventListener('change', applyFilters);
  $('#filterStage').addEventListener('change', applyFilters);
  applyFilters();
}

/* Page: Course Details */
function renderCourseDetails(){
  const courseId = qsParam('courseId');
  if(!courseId) return $('#courseTitle').textContent = 'لم يتم تحديد دورة';
  const course = DB.courses.find(c=>c.id===courseId);
  if(!course) return $('#courseTitle').textContent = 'الدورة غير موجودة';
  $('#courseTitle').textContent = course.title;
  $('#courseThumb').src = course.thumb;
  $('#courseMeta').innerHTML = `<span class="chip">${escapeHtml(course.subject)}</span><span class="chip">${escapeHtml(course.stage)}</span><span class="chip">${escapeHtml(course.doctor)}</span><span class="chip">${escapeHtml(course.dept)}</span>`;
  const listEl = $('#lessonList'); listEl.innerHTML = '';
  course.lessons.forEach((l, idx)=>{
    const watchedKey = `watched:${courseId}:${l.id}`;
    const watched = localStorage.getItem(watchedKey) === '1';
    const li = document.createElement('li');
    li.innerHTML = `<span>${idx+1}. ${escapeHtml(l.title)}</span>
                    <div style="display:flex;gap:8px">
                      <button class="btn" data-play="${l.id}">شغّل</button>
                      <button class="btn ghost" data-toggle-watched="${l.id}">${watched ? 'مُشاهَد' : 'علّم كمشاهدة'}</button>
                    </div>`;
    listEl.appendChild(li);
  });

  function updateProgress(){
    const total = course.lessons.length;
    const watchedCount = course.lessons.reduce((s,l)=> s + (localStorage.getItem(`watched:${courseId}:${l.id}`)==='1' ? 1:0), 0);
    const percent = Math.round((watchedCount/total)*100);
    $('#courseProgress').style.width = percent+'%';
  }
  updateProgress();

  const player = $('#ytPlayer'); const nowPlaying = $('#nowPlaying');
  function playLesson(lessonId){
    const lesson = course.lessons.find(x=>x.id===lessonId); if(!lesson) return;
    player.src = `https://www.youtube.com/embed/${lesson.yt}?rel=0&autoplay=1`;
    nowPlaying.textContent = lesson.title;
    localStorage.setItem(`watched:${courseId}:${lessonId}`,'1');
    $$('[data-toggle-watched]').forEach(b=>{
      const id = b.getAttribute('data-toggle-watched');
      const watched = localStorage.getItem(`watched:${courseId}:${id}`) === '1';
      b.textContent = watched ? 'مُشاهَد' : 'علّم كمشاهدة';
    });
    updateProgress();
  }

  document.body.addEventListener('click', (e)=>{
    const playId = e.target.getAttribute('data-play'); if(playId) playLesson(playId);
    const toggleId = e.target.getAttribute('data-toggle-watched');
    if(toggleId){
      const key = `watched:${courseId}:${toggleId}`;
      const cur = localStorage.getItem(key) === '1';
      localStorage.setItem(key, cur ? '0':'1');
      updateProgress();
      e.target.textContent = localStorage.getItem(key) === '1' ? 'مُشاهَد' : 'علّم كمشاهدة';
    }
  });

  $('#prevLesson').addEventListener('click', ()=>{
    const current = course.lessons.findIndex(l => $('#nowPlaying').textContent === l.title);
    const prev = Math.max(0, current-1);
    if(current === -1) playLesson(course.lessons[0].id); else playLesson(course.lessons[prev].id);
  });
  $('#nextLesson').addEventListener('click', ()=>{
    const current = course.lessons.findIndex(l => $('#nowPlaying').textContent === l.title);
    const next = Math.min(course.lessons.length-1, current+1);
    if(current === -1) playLesson(course.lessons[0].id); else playLesson(course.lessons[next].id);
  });
}

/* Page: Notes */
function renderNotes(){
  const deptSel = $('#noteDept'), stageSel = $('#noteStage'), subjSel = $('#noteSubject');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value="">كل الأقسام</option>'; DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  stageSel.innerHTML = '<option value="">كل المراحل</option>'; [...new Set(DB.notes.map(n=>n.stage))].forEach(s=> stageSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));
  subjSel.innerHTML = '<option value="">كل المواد</option>'; [...new Set(DB.notes.map(n=>n.subject))].forEach(s=> subjSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));
  const grid = $('#notesGrid');

  function apply(){
    const q = ($('#noteSearch').value||'').trim().toLowerCase();
    const dept = deptSel.value; const stage = stageSel.value; const subject = subjSel.value;
    let list = DB.notes.slice();
    if(q) list = list.filter(n => (n.title + ' ' + n.teacher + ' ' + n.subject).toLowerCase().includes(q));
    if(dept) list = list.filter(n=> n.dept===dept);
    if(stage) list = list.filter(n=> n.stage===stage);
    if(subject) list = list.filter(n=> n.subject===subject);
    grid.innerHTML = list.map(formatNoteCard).join('') || '<div class="card"><div class="content">لا توجد ملاحظات</div></div>';
  }
  $('#noteSearch').addEventListener('input', debounce(apply, 160));
  deptSel.addEventListener('change',apply); stageSel.addEventListener('change',apply); subjSel.addEventListener('change',apply);

  const qcourse = qsParam('course');
  if(qcourse){
    const c = DB.courses.find(x=>x.id===qcourse);
    if(c) $('#noteSearch').value = c.subject;
  }
  apply();
}

/* Page: Exams */
function renderExams(){
  const deptSel = $('#examDeptFilter');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value="">كل الأقسام</option>';
  DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  const tbody = $('#examTable tbody');
  function apply(){
    const dept = deptSel.value;
    let list = DB.exams.slice();
    if(dept) list = list.filter(e=> e.dept === dept);
    tbody.innerHTML = list.map(e=>{
      const notesLinks = e.notes.map(id=>{ const n=DB.notes.find(x=>x.id===id); return n? `<a href="${n.file}" download>${escapeHtml(n.titleExam)}</a>` : '' }).join(', ');
      const coursesLinks = e.courses.map(id=>{ const c=DB.courses.find(x=>x.id===id); return c? `<a href="course-details.html?courseId=${c.id}">${escapeHtml(c.title)}</a>` : '' }).join(', ');
      return `<tr>
  <td data-label="التاريخ">${escapeHtml(e.date)}</td>
  <td data-label="الوقت">${escapeHtml(e.time)}</td>
  <td data-label="اليوم">${escapeHtml(e.day)}</td>
    <td data-label="نوع الامتحان">${escapeHtml(e.examType)}</td>
  <td data-label="نوع الامتحان">${escapeHtml(e.session)}</td>
  <td data-label="اسم الامتحان">${escapeHtml(e.name)}</td>
  <td data-label="القسم">${escapeHtml(e.dept)}</td>
  <td data-label="الملاحظات / الدورات">${notesLinks} ${coursesLinks}</td>
  <td data-label="رقم القاعة">${escapeHtml(e.remarks)}</td>
</tr>`;

    }).join('') || '<tr><td colspan="6">لا توجد مواعيد</td></tr>';
  }
  deptSel.addEventListener('change',apply); apply();
}

/* Page: Culture (grid) */
function renderCulture(){
  const grid = $('#cultureGrid'); if(!grid) return;
  function apply(){
    const q = ($('#cultureSearch').value||'').trim().toLowerCase();
    const filter = $('#cultureFilter').value;
    let list = DB.culture.slice();
    if(filter) list = list.filter(p=> p.type === filter);
    if(q) list = list.filter(p=> (p.title + ' ' + p.excerpt).toLowerCase().includes(q));
    grid.innerHTML = list.map(formatCultureCard).join('') || '<div class="card"><div class="content">لا توجد مقالات</div></div>';
  }
  $('#cultureSearch').addEventListener('input', debounce(apply, 120));
  $('#cultureFilter').addEventListener('change', apply);
  apply();
}
/* Page: Culture Post (single page view) */
function renderCulturePostPage(){
  const postId = qsParam('postId');
  const wrap = $('#postContent');
  if(!wrap) return;
  if(!postId) { wrap.innerHTML = '<div class="content">لم يتم تحديد المقال.</div>'; return; }
  const post = DB.culture.find(p=>p.id===postId);
  if(!post){ wrap.innerHTML = '<div class="content">المقال غير موجود.</div>'; return; }
  wrap.innerHTML = `
    <div class="article-hero">
      <h1>${escapeHtml(post.title)}</h1>
      <div class="article-meta"><span>${escapeHtml(post.type)}</span><span class="muted">قابل للقراءة</span></div>
    </div>
    <div class="article-body">
      ${escapeHtml(post.body).replace(/\n/g,'<br><br>')}
    </div>
    <div style="margin-top:16px"><a class="link" href="medical-culture.html">← العودة إلى المقالات</a></div>
  `;
}
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.getAttribute('data-page');
  if(page === 'home') renderHome();
  else if(page === 'departments') renderDepartments();
  else if(page === 'courses') renderCourses();
  else if(page === 'course-details') renderCourseDetails();
  else if(page === 'notes') renderNotes();
  else if(page === 'exams') renderExams();
  else if(page === 'culture') renderCulture();
  else if(page === 'culture-post') renderCulturePostPage();
});

closeCultureModal.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});
cultureModalOverlay.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});
function goToPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;
  document.getElementById("post-container").innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
function renderBody(body) {
  return body.map(item => {
    if (typeof item === "object" && item.type === "link") {
      return `<p><a href="#" onclick="showPost('${item.to}'); return false;">${escapeHtml(item.text)}</a></p>`;
    } 
    else if (typeof item === "string") {
      return `<p>${escapeHtml(item)}</p>`;
    }
  }).join('');
}
function showPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;
  const container = document.getElementById("post-container");
  if (!container) return;
  container.innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});
/* ---------- تطبيق الرندر حسب الصفحة ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.getAttribute('data-page');
  if(page === 'home') renderHome();
  else if(page === 'departments') renderDepartments();
  else if(page === 'courses') renderCourses();
  else if(page === 'course-details') renderCourseDetails();
  else if(page === 'notes') renderNotes();
  else if(page === 'exams') renderExams();
});
const cultureModal = document.getElementById("cultureModal");
const closeCultureModal = document.getElementById("closeCultureModal");
const cultureModalOverlay = document.getElementById("cultureModalOverlay");

// فتح الـ modal عند الضغط على أي عنصر (مثال، لاحقًا اربطه مع بياناتك)
function openCultureModal(title, body, img) {
  document.getElementById("cultureModalTitle").textContent = title;
  document.getElementById("cultureModalBody").textContent = body;
  document.getElementById("cultureImage").src = img;

  cultureModal.classList.add("show");
}


function closePopup() {
  document.getElementById("welcomePopup").style.display = "none";
}

// إغلاق عند الضغط خارج الصندوق
window.onclick = function(event) {
  const popup = document.getElementById("welcomePopup");
  if (event.target === popup) closePopup();
}
// إغلاق الـ modal عند الضغط على زر الإغلاق أو الخلفية
closeCultureModal.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});

cultureModalOverlay.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});
function goToPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;

  document.getElementById("post-container").innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
function renderBody(body) {
  return body.map(item => {
    // إذا كان النص عبارة عن رابط
    if (typeof item === "object" && item.type === "link") {
      // رابط ينفذ دالة JS تعرض المنشور المطلوب
      return `<p><a href="#" onclick="showPost('${item.to}'); return false;">${escapeHtml(item.text)}</a></p>`;
    } 
    // نص عادي
    else if (typeof item === "string") {
      return `<p>${escapeHtml(item)}</p>`;
    }
  }).join('');
}

// دالة لعرض المنشور المطلوب
function showPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;
  // افترض أن لديك عنصر يحتوي على المنشور، مثل: <div id="post-container"></div>
  const container = document.getElementById("post-container");
  if (!container) return;

  container.innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // إخفاء المودال
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});
window.addEventListener('resize', apply);
let notesLinks = e.notes.map(id=>{
  const n=DB.notes.find(x=>x.id===id);
  if(!n) return '';
  return window.innerWidth < 768 
         ? `<a href="${n.file}" download>${escapeHtml(n.title).slice(0,10)}...</a>` 
         : `<a href="${n.file}" download>${escapeHtml(n.title)}</a>`;
}).join(', ');

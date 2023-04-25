module.exports = function () {
  var data = {
    Damnificados:[
      {
        dni: 17643952,
        nombres: "Luisa",
        apellidos: "García González",
        edad: 28,
        peso: 58,
        telefono:  912345678,
        contrasena: "ContraseñaSegura123",
        correo: "luisa.garcia@hotmail.com"
      },
      {
        dni: 24891368,
        nombres: "Carlos",
        apellidos: "Martínez López",
        edad: 42,
        peso: 72,
        telefono: 5512345678,
        contrasena: "qW3rTy5uIop",
        correo: "carlos.martinez@gmail.com"
      },
      {
        dni: 78653290,
        nombres: "Ana",
        apellidos: "Fernández García",
        edad: 19,
        peso: 54,
        telefono:  212345678,
        contrasena: "MiContraseña123",
        correo: "ana.fernandez@upc.edu.pe"
      },
      {
        dni: 72509744,
        nombres: "Michael Andre",
        apellidos: "Cuadros Ccahuana",
        edad:21,
        peso:69,
        telefono:445645,
        contrasena:"HolaQuePex",
        correo:"Eclipse_lunarg@gmail.com"

      },
      {
        dni: 725644,
        nombres: "Franco Enrique",
        apellidos: "Huaman Risco",
        edad:10,
        peso:65,
        telefono:445645,
        contrasena:"codigo_21",
        correo:"peru_chile@hotmail.com"
      }
    ],
    Tipos_de_caso:[
      {
        id: 1,
        nombre: "Grave",
        descripcion: "Este caso es grave, ya que hay personas heridas"
      },
      {
        id: 2,
        nombre: "Urgente",
        descripcion: "Hay personas en el hospital en el área de urgencias"
      },
      {
        id: 3,
        nombre: "Emergencia",
        descripcion: "Hay personas en el hospital en el área de emergencia"
      },
    ],
    Ubicaciones:[
      {
        id:1,
        departamento:"Lima",
        distrito:"Rimac",
        direccion:"Puente nuevo av.21"
      },
      {
        id:2,
        departamento:"Lima",
        distrito:"Rimac",
        direccion:"Viru Rio Rimac av.12 cuadra20"
      },
    ],


    Donadores:[{
      dni: 725644,
      nombres: "Franco Enrique",
      apellidos: "Huaman Risco",
      edad:10,
      telefono:445645,
      contrasena:"codigo_21",
      correo:"peru_chile@hotmail.com",
      ong:false
    },
    {
      dni: 45156415,
      nombres: "Tony",
      apellidos: "Montana",
      edad:29,
      telefono:9944564,
      contrasena:"codigo_20",
      correo:"Tony_el_papi_montana@hotmail.com",
      ong:false
    },
  ],

     cuentabancarias:[
      {
      numero: 465465456456455,
      cvv: 455,
      vencimiento: "2000-09-10"
     },
     {
      numero: 445122456456455,
      cvv: 725,
      vencimiento: "2030-05-11"
     }
    ]

  }
  return data
}

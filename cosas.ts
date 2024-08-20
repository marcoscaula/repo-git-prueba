interface Persona {
    dni: number;      
    nombre: string;   
    apellido: string; 
    edad: number;     
}
let personas: Persona[] = [
    {
        dni: 12345678,
        nombre: 'Carlos',
        apellido: 'González',
        edad: 28
    },
    {
        dni: 87654321,
        nombre: 'Ana',
        apellido: 'Martínez',
        edad: 34
    },
    {
        dni: 11223344,
        nombre: 'Luis',
        apellido: 'Pérez',
        edad: 45
    },
    {
        dni: 12345678,
        nombre: 'María',
        apellido: 'López',
        edad: 22
    }
];

function getAll(){
    return personas;
}
function getDni(dni:number){
    
    const pencontrada =  personas.find(persona => persona.dni ===  dni);
    return pencontrada;    
    
}
export {getAll,getDni};
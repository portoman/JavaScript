class Programa{
    public nombre: string;
    public version: number;

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre=nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version:number){
        this.version=version;
    }
}

class EditorVideo extends Programa{
    public timeline: number;

    setTimeline(timeline: number){
        this.timeline=timeline;
    }
}
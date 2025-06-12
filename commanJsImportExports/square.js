// export default in CommonJS 

module.exports = class Square{
    constructor(width){
        this.width = width;
    }
    area(){
        return this.width ** 2;
    }
}
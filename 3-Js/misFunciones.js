/**
 * conversión de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades
 * @param {string} id 
 * @param {number} valor
 
 */
convertirUnidades=(id, valor) => {
    let metros, pulgadas, pies, yardas;

    if(isNaN(valor)){
        alert("Ingresó un valor incorrecto: "+id);
        metros="";
        pulgadas="";
        pies="";
        yardas=""
       
    }else if(id=="metro"){
        metros=valor;
        pulgadas=valor*39.3781;
        pies=valor*3.28884;
        yardas=valor*1.09361;
    }else if(id=="pie"){
        pies=valor;
        metros=valor*0.3048;
        pulgadas=valor*12;
        yardas=valor*0.333333;
    }else if(id=="yarda"){
        yardas=valor;
        metros=valor*0.9144;
        pulgadas=valor*36;
        pies=valor*3;
    }else if(id=="pulgada"){
        pulgadas=valor;
        metros=valor*0.0254;
        yardas=valor*0.0277778;
        pies=valor*0.0833333;
    }




     document.getElementById("metro").value=" ";
        document.getElementById("pulgada").value=" ";
        document.getElementById("pie").value="";
        document.getElementById("yarda").value="";
}
 
/**
 * conversión de grados a radianes
 * @method convertirGR
 * @param {string} id  - id del elemento input en el html
 */
function convertirGR(id){
    let grad, rad;
    if(id=="grados"){
        grad=Document.getElementById("grados").value;
        rad= grad*Math.PI/180;
    }else{
        rad= Document.getElementById("radianes").value;
        grad=rad*180/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}
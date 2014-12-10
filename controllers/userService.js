app.service('UserService', function () {
        
    var ordenes = [];

     var ptr = "images/Flores/flor", i, j, cc, descri = [], flores = [], ordenados = [];

      descri.push({ Titulo: "Rosa Jardín", Precio: 500} );
      descri.push({ Titulo: "Armonía en Domingo", Precio: 700} );
      descri.push({ Titulo: "Sobre Balcón", Precio: 600} );
      descri.push({ Titulo: "Camino Nupcial", Precio: 950} );
      descri.push({ Titulo: "Alegría Nupcial", Precio: 1200} );
      descri.push({ Titulo: "Centro de Mesa", Precio: 1120} );
      descri.push({ Titulo: "Amor de Primavera", Precio: 1700} );
      descri.push({ Titulo: "Nueva vida", Precio: 950} );
      descri.push({ Titulo: "Arreglo Rústico", Precio: 500} );
     
      cc = 0;
      for(i = 1; i <= 3; ++i){

        tripleta = [];
        for(j = 1; j <= 3; ++j){
            
            ordenados[descri[cc].Titulo] = 0;
            tripleta.push({link: ptr+(cc+1)+".jpg", Titulo: descri[cc].Titulo, Precio: descri[cc].Precio });
            cc++;
        }
        flores.push( tripleta );
      }

    function find(orden){
        for (i in ordenes){
            if( ordenes[i].Titulo == orden.Titulo)
                return true;
        }
        return false;
    }

    this.save = function (orden) {
        if (find(orden) === false) {
            ordenes.push(orden);
        } else {
    
            for (i in ordenes) {
                if (ordenes[i].Titulo == orden.Titulo) {
                    ordenes[i] = orden;
                }
            }
        }

    }

    
    this.get = function (id) {
        for (i in ordenes) {
            if (ordenes[i].id == id) {
                return ordenes[i];
            }
        }

    }
    
    this.delete = function (id) {
        for (i in ordenes) {
            if (ordenes[i].Titulo == id.Titulo) {
                ordenes.splice(i, 1);
                ordenados[id.Titulo] = 0;
            }
        }
    }

    this.getMoney = function(){
        res = 0;
        for( i in ordenes){
            res += ordenes[i].Precio*ordenados[ordenes[i].Titulo];
        }
        return res;
    }

    this.list = function () {
        return ordenes;
    }

    this.getFlores = function(){
        return flores;
    }

    this.hashMap = function(){
        return ordenados;
    }
    
});

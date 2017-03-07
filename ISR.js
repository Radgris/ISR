function obtenerNumero() {
    numeroIngresos = document.getElementById("numeroDeIngresos").value
    return numeroIngresos
}

function identificarEnTabla(valorIngresos) {
    var bandera = 0
    if (document.getElementById("inputMensual").checked == true) {
        while (validation == false) {
            valorIngresos()
        }
    }
    else if (document.getElementById("inputQuincenal").checked == true) {}
    else {
        alert("Porfavor elija su forma de pago")
    }
}

function doItAll() {
    numeroExtraido = obtenerNumero()
}
var listaDeReferenciaMensual = [
    {
        tier: 0
        , limiteInferio: 0.01
        , limiteSuperior: 496.07
        , cuotaFija: 0.00
        , Porcentaje: 1.92
    }
    , {
        tier: 1
        , limiteInferio: 496.08
        , limiteSuperior: 4210.41
        , cuotaFija: 9.52
        , Porcentaje: 6.40
    }
    , {
        tier: 2
        , limiteInferio: 4210.42
        , limiteSuperior: 7399.42
        , cuotaFija: 247.24
        , Porcentaje: 10.88
    }
    , {
        tier: 3
        , limiteInferio: 7399.43
        , limiteSuperior: 8601.50
        , cuotaFija: 594.21
        , Porcentaje: 16.00
    }
    , {
        tier: 4
        , limiteInferio: 8601.51
        , limiteSuperior: 10298.35
        , cuotaFija: 786.54
        , Porcentaje: 17.92
    }
    , {
        tier: 5
        , limiteInferio: 10298.36
        , limiteSuperior: 20770.29
        , cuotaFija: 1090.61
        , Porcentaje: 21.36
    }
    , {
        tier: 6
        , limiteInferio: 20770.30
        , limiteSuperior: 32736.83
        , cuotaFija: 3327.42
        , Porcentaje: 23.53
    }
    , {
        tier: 7
        , limiteInferio: 32736.84
        , limiteSuperior: 62500.00
        , cuotaFija: 6141.95
        , Porcentaje: 30.00
    }
    , {
        tier: 8
        , limiteInferio: 62500.01
        , limiteSuperior: 83333.33
        , cuotaFija: 15070.90
        , Porcentaje: 32.00
    }
    , {
        tier: 9
        , limiteInferio: 83333.34
        , limiteSuperior: 250000.00
        , cuotaFija: 21737.57
        , Porcentaje: 34.00
    }
    , {
        tier: 10
        , limiteInferio: 250000.01
        , limiteSuperior: 9999999
        , cuotaFija: 78404.23
        , Porcentaje: 35.00
    }
, ];
var listaDeReferenciaQuincenal = [
    {
        tier: 0
        , limiteInferio: 0.01
        , limiteSuperior: 244.80
        , cuotaFija: 0.00
        , Porcentaje: 1.92
    }
    , {
        tier: 1
        , limiteInferio: 244.81
        , limiteSuperior: 2077.50
        , cuotaFija: 4.65
        , Porcentaje: 6.40
    }
    , {
        tier: 2
        , limiteInferio: 2077.51
        , limiteSuperior: 3651.00
        , cuotaFija: 121.95
        , Porcentaje: 10.88
    }
    , {
        tier: 3
        , limiteInferio: 3651.01
        , limiteSuperior: 4244.10
        , cuotaFija: 293.25
        , Porcentaje: 16.00
    }
    , {
        tier: 4
        , limiteInferio: 4244.11
        , limiteSuperior: 5081.40
        , cuotaFija: 388.05
        , Porcentaje: 17.92
    }
    , {
        tier: 5
        , limiteInferio: 5081.41
        , limiteSuperior: 10248.45
        , cuotaFija: 538.20
        , Porcentaje: 21.36
    }
    , {
        tier: 6
        , limiteInferio: 10248.46
        , limiteSuperior: 16153.05
        , cuotaFija: 1641.75
        , Porcentaje: 23.53
    }
    , {
        tier: 7
        , limiteInferio: 16153.06
        , limiteSuperior: 30838.80
        , cuotaFija: 3030.60
        , Porcentaje: 30.00
    }
    , {
        tier: 8
        , limiteInferio: 30838.81
        , limiteSuperior: 41118.45
        , cuotaFija: 7436.25
        , Porcentaje: 32.00
    }
    , {
        tier: 9
        , limiteInferio: 41118.46
        , limiteSuperior: 123355.20
        , cuotaFija: 10725.75
        , Porcentaje: 34.00
    }
    , {
        tier: 10
        , limiteInferio: 123355.21
        , limiteSuperior: 9999999
        , cuotaFija: 38686.35
        , Porcentaje: 35.00
    }
, ];
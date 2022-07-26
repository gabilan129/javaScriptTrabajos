function demoraDeUnidades() {

    let sector = prompt("ingrese el sector")


    let demora = 0

    while (sector != "fin") {
        switch (sector) {
            case "mecanica":
                console.log("demora de 40 minutos")
                demora = demora + 40
                break
            case "electricidad":
                console.log("demora de 60 minutos")
                demora = demora + 60
                break
            case "carroceria":
                console.log("demora de 20 minutos")
                demora = demora + 20
                break
            case "lavadero":
                console.log("demora de 10 minutos")
                demora = demora + 10
                break

            default:
                let nuevaDemora = prompt("ingrese nueva demora")
                if (!isNaN(nuevaDemora)) { // isNan de vuelve falso cuando es un numero entonces lo negamos para que sea true .
                    demora = demora + parseInt(nuevaDemora);
                } else {
                    alert("ese no es un tiempo de demora valido")
                }


        }

        sector = prompt("Ingrese nuevamente sector")


    }

    console.log("el tiempo de demora es de" + " " + demora + " " + "minutos")

}

demoraDeUnidades()

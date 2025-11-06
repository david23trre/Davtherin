  const inicio = new Date("2024-09-07T17:30:00");

  function calcularTiempo() {
    const hoy = new Date();
    const diferencia = hoy - inicio;

    const totalDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    let anios = hoy.getFullYear() - inicio.getFullYear();
    let meses = hoy.getMonth() - inicio.getMonth();
    let dias = hoy.getDate() - inicio.getDate();

    if (dias < 0) {
      meses--;
      const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
      dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
      anios--;
      meses += 12;
    }

    const horasTotales = Math.floor(diferencia / (1000 * 60 * 60));
    const horas = horasTotales % 24;

    function pluralizar(valor, singular, plural) {
      return `${valor} ${valor === 1 ? singular : plural}`;
    }

    document.getElementById("principal").textContent =
      `${pluralizar(anios, "Año", "Años")}, ` +
      `${pluralizar(meses, "Mes", "Meses")}, ` +
      `${pluralizar(dias, "Día", "Días")} y ` +
      `${pluralizar(horas, "Hora", "Horas")}`;

    document.getElementById("secundario").textContent =
      `(${pluralizar(totalDias, "Día", "Días")} en total)`;
  }

  calcularTiempo();
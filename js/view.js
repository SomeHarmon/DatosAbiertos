export const View = {
    renderDepartamentos(departamentos) {
      const select = document.getElementById("departamento-select");
      select.innerHTML = '<option value="">Todos</option>';
      departamentos.forEach(dep => {
        const option = document.createElement("option");
        option.value = dep;
        option.textContent = dep;
        select.appendChild(option);
      });
    },
  
    renderMunicipios(municipios) {
      const select = document.getElementById("municipio-select");
      select.innerHTML = '<option value="">Todos</option>';
      municipios.forEach(mun => {
        const option = document.createElement("option");
        option.value = mun;
        option.textContent = mun;
        select.appendChild(option);
      });
    },
  
    renderTabla(municipios) {
      const tbody = document.getElementById("tabla-municipios");
      tbody.innerHTML = "";
      municipios.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.region}</td>
          <td>${item.departamento}</td>
          <td>${item.codigo_dane_departamento}</td>
          <td>${item.municipio}</td>
          <td>${item.codigo_dane_municipio}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  };
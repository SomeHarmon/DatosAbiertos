export const Model = {
    data: [],
  
    async loadData() {
      const response = await fetch("./MunicipiosColombia.json");
      const raw = await response.json();
  
      this.data = raw.map(item => ({
        region: item.region || "",
        codigo_dane_departamento: item["c_digo_dane_del_departamento"] || "",
        departamento: item.departamento || "",
        codigo_dane_municipio: item["c_digo_dane_del_municipio"] || "",
        municipio: item.municipio || ""
      }));
  
      return this.data;
    },
  
    getDepartamentos() {
      return [...new Set(this.data.map(d => d.departamento))].sort();
    },
  
    getMunicipios(departamento) {
      return [...new Set(
        this.data
          .filter(d => !departamento || d.departamento === departamento)
          .map(d => d.municipio)
      )].sort();
    },
  
    getFiltrados(departamento, municipio) {
      return this.data.filter(item =>
        (!departamento || item.departamento === departamento) &&
        (!municipio || item.municipio === municipio)
      );
    }
  };
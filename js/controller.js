import { Model } from "./model.js";
import { View } from "./view.js";

const init = async () => {
  await Model.loadData();

  View.renderDepartamentos(Model.getDepartamentos());
  View.renderMunicipios(Model.getMunicipios());

  View.renderTabla(Model.data);

  const dptoSelect = document.getElementById("departamento-select");
  const muniSelect = document.getElementById("municipio-select");
  const textoBusqueda = document.getElementById("busqueda-texto");

  const aplicarFiltros = () => {
    const dep = dptoSelect.value;
    const mun = muniSelect.value;
    const texto = textoBusqueda.value.toLowerCase();

    const filtrados = Model.getFiltrados(dep, mun).filter(item =>
      item.municipio.toLowerCase().includes(texto) ||
      item.departamento.toLowerCase().includes(texto)
    );

    View.renderTabla(filtrados);
  };

  dptoSelect.addEventListener("change", () => {
    View.renderMunicipios(Model.getMunicipios(dptoSelect.value));
    aplicarFiltros();
  });

  muniSelect.addEventListener("change", aplicarFiltros);
  textoBusqueda.addEventListener("input", aplicarFiltros);
};

init();
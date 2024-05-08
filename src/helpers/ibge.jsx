const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';

export const fetchEstados = () => {
    const url = `${BASE_URL}/localidades/estados`;
    return fetch(url).then(response => response.json());
};

export const fetchCidades = (state) => {
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    return fetch(url).then(response => response.json());
}


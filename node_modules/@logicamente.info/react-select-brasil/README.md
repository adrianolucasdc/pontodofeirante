# React-Select-Brasil

![Build status][workflow]
[![Package version][npm-badge]][npm]

Este é um Component React que cria um campo de seleção com temáticas trabalhadas no Brasil.

Para ver este projeto funcionando, faça o download e execute `yarn start`.

## Instalação

```bash
$ npm i -S @logicamente.info/react-select-brasil # NPM user
$ yarn add @logicamente.info/react-select-brasil # YARN user
```

## Uso

```js
import React from 'react';
import SelectBrasil from '@logicamente.info/react-select-brasil';

export default class Demo extends React.Component {
  render() {
    return (
      <SelectBrasil.CategoriaCNH
        value={this.state.categoria}
        onChange={(e) => this.setState({ categoria: e?.value })}>
    );
  }
}
```

## Tipos implementados

| Componente                    | Temática                                                                                                                                                                      |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SelectBrasil.CommonSelect`   | Componente base para a criação de novos componentes de seleção, não é possível renderizar este componente diretamente                                                         |
| `SelectBrasil.Bancos`         | Exibe seleção de bancos existentes no Brasil, sendo o valor resultante o código do banco                                                                                      |
| `SelectBrasil.CategoriasCNH`  | Exibe seleção de categorias de carteira de habilitação A, B, AB, C, D e E                                                                                                     |
| `SelectBrasil.Cidades`        | Exibe seleção de cidades para um dado estado. Este componente possui uma propriedade obrigatória `estado` que deve receber a **sigla do estado** das cidades a serem exibidas |
| `SelectBrasil.Estados`        | Exibe seleção dos estados brasileiros                                                                                                                                         |
| `SelectBrasil.EstadosCivis`   | Exibe selação dos estados civís possíveis (solteiro(a), casado(a), divorciado(a)...)                                                                                          |
| `SelectBrasil.Generos`        | Exibe seleção de gêneros (masculino, feminino, cisgênero...)                                                                                                                  |
| `SelectBrasil.GrausInstrucao` | Exibe seleção de graus de instrução escolares (médio, superior...)                                                                                                            |
| `SelectBrasil.Nacionalidades` | Exibe seleção de nacionalidades, isto é, o país de origem de uma pessoa (brasileiro, canadense, tibetano...)                                                                  |
| `SelectBrasil.Racas`          | Exibe seleção de raças e cores conforme os valores esperados pelo IBGE (branca, parda, preta...)                                                                              |
| `SelectBrasil.UnidadesMedida` | Exibe seleção de unidades de medida conforme necessário em notas fiscais                                                                                                      |

## Retorno do onChange

Toda alteração da opção selecionada causará a emissão do evento `change`. Você deve utilizar esse método para atualizar o estado.

O valor da propriedade `onChange` **deve** ser uma função. Nela o componente injetará no primeiro parâmetro os dados da opção selecionada no formato de objeto JS com o valor `{ value: 'valor', label: 'texto' }` ou `null` caso não tenha uma opção selecionada.

<img src="https://media0.giphy.com/media/PmGGX8KEaNF4dIL06c/giphy.gif?cid=ecf05e47q6thxh6fbz1400ww48uttopgo1pgp6clzvlv127x&rid=giphy.gif&ct=g" style="width: 30px"> Ao selecionar cidades ou estado, o método também retornará o código IBGE da opção selecionada (e.g. `{ value: 'RO', label: 'Rondônia', ibge: 11 }`).

## Props

Utilizamos como base o [react-select][react-select] para a criação dos controles gráficos. Todas as propriedades deste componente são as mesmas que o react-select, portanto verifique todas as possibilidades na [documentação de propriedades][react-select-props] deles.

Este componente utiliza a versão síncrona do react-select e suas opções não são controláveis.

## Como criar meus próprios selects

Para criar selects com suas próprias opções, crie um componente que retorne `CommonSelect` e defina as opções nas propriedades dele. Sério, é só isso mesmo.

```ts
import SelectBrasil, {
  SelectProps,
} from "@logicamente.info/react-select-brasil";

export const MeuSelect = (props: SelectProps) => (
  <SelectBrasil.CommonSelect
    options={[
      { value: "1", label: "Um" },
      { value: "2", label: "Um" },
      { value: "3", label: "Tres" },
    ]}
    {...props}
  />
);
```

## Contribua com o projeto

Para incluir outros selects neste projeto, faça o PR de uma nova branch contendo seu componente na pasta `src/Components`. Vamos analisar juntos e mesclar suas alterações na master. Siga o processo de criação de selects personalizados acima.

```bash
$ yarn start # Inicia a aplicação rodando o especificado em `./demo/src/index.js`
$ yarn build # Gera os módulos para distribuição
```

[workflow]: https://github.com/logicamenteinfo/react-select-brasil/actions/workflows/ci.yml/badge.svg
[npm-badge]: https://img.shields.io/npm/v/@logicamente.info/react-select-brasil.png?style=flat-square
[npm]: https://www.npmjs.org/@logicamente.info/react-select-brasil
[react-select]: https://react-select.com
[react-select-props]: https://react-select.com/props

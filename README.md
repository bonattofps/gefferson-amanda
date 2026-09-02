# Diário da Gravidez

Site estático, moderno e responsivo para acompanhar a gravidez semana a semana, começando em **7 semanas e 5 dias** na data de referência **02/09/2026**, com previsão aproximada de nascimento em **16/04/2027**.

O diário foi personalizado para a **mamãe Amanda** e o **papai Gefferson**.

## Como abrir localmente

1. Abra a pasta do projeto.
2. Dê dois cliques em `index.html`.
3. O site funciona diretamente no navegador, sem servidor e sem instalação.

## Como alterar a data prevista do nascimento

Abra `script.js` e edite esta linha:

```js
const DUE_DATE = new Date(2027, 3, 16, 0, 0, 0);
```

No JavaScript, os meses começam em zero. Janeiro é `0`, fevereiro é `1`, março é `2`, abril é `3`, e assim por diante.

## Como alterar a data de referência

Abra `script.js` e edite:

```js
const REFERENCE_DATE = new Date(2026, 8, 2, 0, 0, 0);
const INITIAL_GESTATIONAL_DAYS = (7 * 7) + 5;
```

Setembro é `8` porque os meses começam em zero.

## Como trocar fotos

Você pode trocar as fotos de duas formas.

Pelo próprio site:

1. Clique em `Momentos`.
2. Cole o link da imagem no campo `Link da imagem`.
3. Escolha onde colocar a foto.
4. Escreva um título opcional.
5. Clique em `Salvar imagem`.

O link fica salvo no navegador usando `localStorage`.

Pelos arquivos do projeto:

Coloque suas imagens dentro da pasta:

```text
assets/images
```

Depois, no `index.html` ou no bloco `galleryItems` dentro de `script.js`, substitua os placeholders pelos nomes e descrições das fotos reais.

## Como adicionar vídeos

Coloque os vídeos dentro da pasta:

```text
assets/videos
```

No `index.html`, troque os caminhos dos arquivos:

```html
<source src="assets/videos/primeiro-registro.mp4" type="video/mp4">
```

Use vídeos curtos em `.mp4` para melhor compatibilidade.

## Como editar os textos das semanas

Abra `script.js` e edite o objeto:

```js
const weekTexts = {
  7: {
    title: "Um segredo lindo crescendo",
    description: "..."
  }
};
```

A linha do tempo começa na semana 7 e vai até a semana 40.

## Como editar os tamanhos do bebê por semana

As comparações carinhosas, como "mirtilo", "framboesa", "feijãozinho" e "melancia", ficam em `script.js`:

```js
const weekGrowth = {
  7: {
    comparison: "um mirtilo",
    size: "cerca de 1 cm",
    note: "..."
  }
};
```

Essas comparações são lúdicas e aproximadas, pensadas para um diário familiar.

## Como funciona o vídeo animado

A seção "Crescimento animado" usa HTML, CSS e JavaScript puro. A linha do tempo também inclui vídeos reais em `.webm`, um para cada semana, dentro da pasta:

```text
assets/videos
```

Os arquivos seguem este padrão:

```text
semana-07.webm
semana-08.webm
semana-09.webm
semana-10.webm
...
semana-40.webm
```

As capas dos vídeos ficam em:

```text
assets/images/semana-07.png
```

Para trocar por um vídeo real gravado ou baixado com autorização de uso, substitua o arquivo da semana correspondente mantendo o mesmo nome.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para o repositório.
3. No GitHub, vá em `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde o link do GitHub Pages ficar disponível.

## Como alterar as cores do tema

Abra `style.css` e edite as variáveis dentro de `:root`:

```css
:root {
  --rose: #a8dfb2;
  --lilac: #b8e6c2;
  --beige: #eef1d6;
  --gold: #d8bd6a;
}
```

Para o tema escuro, edite as variáveis dentro de:

```css
body.dark-theme {
  --bg: #101913;
}
```

## Como alterar as mensagens principais

Os textos da página inicial, seção final e chamadas principais ficam em `index.html`.

Procure por:

```html
<h1>Diário da Gravidez</h1>
```

e edite os textos conforme desejar.

## Recursos incluídos

- Contador regressivo até 16/04/2027
- Barra de progresso automática considerando 40 semanas
- Linha do tempo da semana 7 até a semana 40
- Tela inicial leve: as semanas só são carregadas quando a pessoa clica em `Semanas`
- Comparação de tamanho do bebê em cada semana
- Player animado mostrando o crescimento dentro da barriga da mamãe
- Ilustração animada da barriga com o bebê em HTML e CSS
- Galeria com lightbox
- Cards de vídeo responsivos
- Mensagens para o bebê salvas em `localStorage`
- Tema claro e escuro
- Layout mobile-first compatível com celular, tablet e computador

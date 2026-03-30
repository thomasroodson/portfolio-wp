# Design do Site (Design System)

Documento de referência visual para o site, usando os tokens fornecidos.

---

## Tokens de Cores

```json
{
  "primary": "#4F46E5",
  "secondary": "#06B6D4",
  "background": "#0F172A",
  "surface": "#1E293B",
  "text": {
    "primary": "#F8FAFC",
    "secondary": "#94A3B8"
  }
}
```

### Uso recomendado

- `primary` (`#4F46E5`): botões primários, links em destaque, elementos ativos.
- `secondary` (`#06B6D4`): badges/destaques, ícones e bordas secundárias.
- `background` (`#0F172A`): fundo geral do site (page canvas).
- `surface` (`#1E293B`): cards, painéis e áreas elevadas (ex: seções com contorno/caixa).
- `text.primary` (`#F8FAFC`): títulos e texto principal.
- `text.secondary` (`#94A3B8`): descrições, legendas e texto secundário.

### Sugestão de variáveis CSS

```css
:root {
  --color-primary: #4F46E5;
  --color-secondary: #06B6D4;
  --color-background: #0F172A;
  --color-surface: #1E293B;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
}
```

---

## Tokens de Espaçamento

```json
{
  "xs": "4px",
  "sm": "8px",
  "md": "16px",
  "lg": "24px",
  "xl": "32px"
}
```

### Uso recomendado

- `xs` (`4px`): gap micro (ex: espaçamento entre ícone e texto, padding interno pequeno).
- `sm` (`8px`): detalhes e alinhamentos finos (ex: chips, pequenas margens).
- `md` (`16px`): padrão de `padding`/`gap` entre elementos na maioria das seções.
- `lg` (`24px`): espaçamentos maiores entre blocos.
- `xl` (`32px`): respiros da página e seções completas (especialmente em layouts desktop).

---

## Tokens de Tamanho de Fonte

```json
{
  "xs": "12px",
  "sm": "14px",
  "md": "16px",
  "lg": "20px",
  "xl": "32px"
}
```

### Escala tipográfica (referência)

- `xs` (`12px`): metadados, legendas, texto auxiliar.
- `sm` (`14px`): texto de apoio (ex: itens de lista).
- `md` (`16px`): parágrafos e conteúdo padrão.
- `lg` (`20px`): subtítulos e chamadas de seção.
- `xl` (`32px`): headline principal (hero/títulos de página).

---

## Tokens de Radius (Arredondamento)

```json
{
  "sm": "4px",
  "md": "8px",
  "lg": "16px"
}
```

### Uso recomendado

- `sm` (`4px`): inputs, botões menores, elementos compactos.
- `md` (`8px`): cards, botões padrão, destaques.
- `lg` (`16px`): hero panels e áreas com “cartão grande”.

---

## Componentes e Estilo de UI

### 1) Botão (`Button`)

- Tipos:
  - Primário: fundo `primary`, texto `text.primary`.
  - Secundário: borda/contorno `secondary` com fundo transparente ou `surface` (escolher uma variação consistente).
- Radius: `md` (`8px`).
- Padding sugerido:
  - Vertical: `sm` (`8px`)
  - Horizontal: `lg` (`24px`)
- Hover/Focus:
  - Usar variação de opacidade (ex: aumentar brilho) e manter contraste com `text.primary`.
  - Focus visível (ex: outline/box-shadow) com cor `secondary`.

### 2) Card / Painel (`Card`, `Panel`)

- Fundo: `surface` (`#1E293B`)
- Radius: `lg` (`16px`) para destaque; `md` (`8px`) para cards menores.
- Borda opcional:
  - Quando necessário, usar borda com alpha baixa (consistência visual).
- Padding padrão:
  - `lg` (`24px`) em cards grandes
  - `md` (`16px`) no restante
- Texto:
  - Título: `text.primary`
  - Descrição: `text.secondary`

### 3) Seções (`Section`)

- Fundo:
  - Layout padrão: página em `background`
  - Seção em “destaque”: usar `surface` com cards/containers internos
- Espaçamento externo (top/bottom):
  - Desktop: `xl` (`32px`)
  - Mobile: reduzir para `lg` (`24px`) quando necessário

### 4) Tipos de Texto

- Títulos (headline/subtítulos): `text.primary`
- Conteúdo: `text.primary` com parágrafos usando `md` (`16px`)
- Legendas/descrições: `text.secondary`

### 5) Links

- Restante: cor `primary`
- Em hover: intensificar contraste (ex: opacidade maior) mantendo legibilidade.

---

## Estrutura do Layout (Sugestão de Página)

Abaixo uma estrutura comum para portfolio, usando os tokens acima. Ajuste nomes/ordem conforme o seu conteúdo.

### Header / Navbar

- Fundo: `background` (ou `surface` se quiser destaque)
- Link ativo: `primary`
- Espaçamento interno: `md` (`16px`)
- Altura confortável com padding vertical `sm` (`8px`)

### Hero (apresentação)

- Painel grande:
  - Fundo: `surface`
  - Radius: `lg` (`16px`)
  - Padding: `xl` (`32px`)
- Headline: `xl` (`32px`) e cor `text.primary`
- Descrição: `md` (`16px`) e cor `text.secondary`
- CTA(s):
  - Primário: botão `primary`
  - Secundário (opcional): borda `secondary`

### Seção Sobre

- Container em `surface` (ou card(s) dentro de `background`)
- Texto em duas hierarquias:
  - “Resumo” com `md` (`16px`)
  - “Detalhes” em `sm` (`14px`) com `text.secondary`

### Seção Skills

- Cards ou tags:
  - Fundo: `surface`
  - Radius: `md` (`8px`)
  - Texto: `text.primary`
  - Labels: usar `secondary` em borda/ícone (se aplicável)

### Seção Projetos

- Grid:
  - gap: `lg` (`24px`)
  - cards:
    - Fundo: `surface`
    - Radius: `lg` (`16px`)
    - Título do projeto: `lg` (`20px`)
    - Descrição: `md` (`16px`) em `text.secondary` quando for “resumo”
- Ações (links/botões):
  - Usar `primary` para ação principal por card

### Seção Contato

- Card/painel central com fundo `surface`
- Texto auxiliar em `text.secondary`
- Campos de formulário:
  - Background do input: (pode ser `background` ou `surface` com borda sutil)
  - Radius: `sm` (`4px`)
  - Borda/foco: `secondary`

### Footer

- Fundo: `background`
- Texto: `text.secondary` com tamanho `xs` (`12px`)
- Link: `primary` e hover com contraste

---

## Acessibilidade (Check rápido)

- Garantir contraste suficiente entre `text.secondary` e os fundos (`background`/`surface`).
- Focus state sempre visível (usar `secondary`).
- Font sizes:
  - Preferir `16px` (`md`) para parágrafos legíveis.
  - Evitar reduzir abaixo de `12px` (`xs`) em telas pequenas.

---

## Notas para Implementação

- Manter consistência de:
  - radius (`sm`, `md`, `lg`) por tipo de componente
  - gaps (`xs` a `xl`) por hierarquia visual
  - uso de `primary` para ações e estados ativos
  - uso de `secondary` para ênfase/indicadores


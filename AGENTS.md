# VITAL FIT — Contexto do projeto

Landing page de academia (Itatiba) em React + TypeScript + Vite + Tailwind. Site single-page, dark theme, marca laranja. Idioma da UI e do conteúdo: **pt-BR**.

## Stack

- React 18, TypeScript, Vite 5
- Tailwind CSS 3 (`src/index.css` + `tailwind.config.js`)
- lucide-react (ícones), react-slick (carrossel de depoimentos)
- Sem router, sem backend, sem state global — só composição de seções

## Estrutura

```
src/
├─ assets/                 imagens, vídeos, fotos de perfil
├─ components/
│  ├─ layout/              Navbar, Footer
│  ├─ sections/            Hero, Feature (Sobre), Workflow, Pricing, Testimonials
│  ├─ icons/               SVGs custom (ex.: WhatsApp)
│  └─ ui/                  Button e outros reutilizáveis
├─ constants/              conteúdo tipado (single source of truth)
├─ hooks/                  ex.: useScrollSpy
├─ App.tsx                 composição das seções
├─ main.tsx
└─ index.css               tokens, utilitários de marca, overrides do slick
```

## Convenções obrigatórias

1. **Conteúdo em `src/constants`** — textos, menus, planos, depoimentos, links. Não hardcodar listas/copy nas seções; componentes só apresentam dados.
2. **Seções em `components/sections`** — cada bloco da página é um componente; `App.tsx` só monta a ordem.
3. **UI reutilizável em `components/ui`** — preferir `Button` com `variant` (`primary` | `secondary` | `glass`) em vez de `<a>`/`<button>` soltos com classes duplicadas.
4. **Âncoras** — IDs das seções alinhados a `navItems` (`#inicio`, `#sobre`, `#vantagem`, `#planos`, `#avaliacoes`). Navbar usa `useScrollSpy`.
5. **Imports** — assets via `import` do Vite; ícones Lucide tipados como `LucideIcon` nas constants.
6. **TypeScript** — tipar interfaces de dados em `constants`; componentes funcionais com `export default`.
7. **Não inventar stack** — não adicionar libs, router ou backend sem pedido explícito.

## Design system

| Token | Valor / uso |
| ----- | ----------- |
| Marca | `#f97316` (`brand`), light `#fb923c`, dark `#9a3412` |
| Fundo | preto / neutrals escuros |
| Fontes | Inter (`font-sans` / `font-heading` / `font-display`); Pacifico só no wordmark |
| Destaque de texto | `.text-gradient-brand`, `.text-highlight` |
| CTAs | `Button` (`primary` / `secondary` / `glass`) |

Hero: vídeo full-bleed (`hero_background.mp4`), tipografia display/uppercase, CTAs WhatsApp + Sobre. Preservar atmosfera dark + laranja; evitar temas genéricos (roxo, cream/serif, etc.).

## Scripts

| Comando | Uso |
| ------- | --- |
| `npm run dev` | desenvolvimento |
| `npm run build` | typecheck + build (`dist/`) |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run preview` | preview do build |

## Ao editar

- Mudança de copy/planos/menu → `src/constants/index.ts`
- Mudança visual de seção → arquivo em `components/sections/`
- Tokens/cores/botões globais → `index.css` e/ou `tailwind.config.js`
- Manter responsivo (mobile-first com breakpoints Tailwind já usados)
- Responder e comentar código em português quando fizer sentido para o time; código (nomes de vars/funções) em inglês, como já está no repo

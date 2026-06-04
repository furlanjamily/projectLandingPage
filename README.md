# VITAL FIT — Landing Page

Landing page de uma academia, construída com React, TypeScript, Vite e Tailwind CSS.
O foco do projeto é uma experiência visual moderna, responsiva e com bom desempenho.

## Tecnologias

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) — ícones
- [react-slick](https://react-slick.neostack.com/) — carrossel de depoimentos

## Como rodar

```bash
npm install
npm run dev
```

| Script            | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`       | Inicia o servidor de desenvolvimento |
| `npm run build`     | Type-check + build de produção em `dist/` |
| `npm run preview`   | Pré-visualiza o build de produção    |
| `npm run lint`      | Executa o ESLint                     |
| `npm run typecheck` | Verifica os tipos com o TypeScript   |

## Estrutura do projeto

```
src/
├─ assets/                imagens, vídeos e fotos de perfil
├─ components/
│  ├─ layout/             Navbar, Footer
│  ├─ sections/           seções da página (Hero, Sobre, Vantagens, Planos, Depoimentos)
│  ├─ icons/              ícones SVG customizados
│  └─ ui/                 componentes de UI reutilizáveis (Button)
├─ constants/             dados/conteúdo tipados (single source of truth)
├─ App.tsx                composição das seções
├─ main.tsx               ponto de entrada
└─ index.css             estilos globais e classes de componentes (Tailwind)
```

Todo o conteúdo textual e a lista de itens (menu, planos, depoimentos, etc.)
ficam centralizados em `src/constants`, separando dados da apresentação.

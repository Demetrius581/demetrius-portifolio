// Conteúdo do currículo. Edite aqui para atualizar todas as páginas.

export const profile = {
  name: "Demetrius De Moura Silva Oliveira",
  shortName: "Demetrius Oliveira",
  role: "Estudante de Sistemas para Internet · Desenvolvedor em formação",
  location: "Recife, PE",
  bio: "Estudante de Sistemas para Internet na Unicap, apaixonado por construir interfaces rápidas, acessíveis e bem cuidadas. Gosto de transformar problemas do dia a dia em produtos simples de usar.",
  // Usuário do GitHub usado na integração com a API pública do GitHub.
  githubUser: "Demetrius581",
  links: {
    github: "https://github.com/Demetrius581",
    linkedin: "https://www.linkedin.com/",
    email: "seu.email@exemplo.com",
  },
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  description: string;
  status?: string;
};

export const education: Education[] = [
  {
    title: "Tecnólogo em Sistemas para Internet",
    institution: "Unicap — Universidade Católica de Pernambuco",
    period: "2025 — atual",
    status: "3º período",
    description:
      "Formação voltada ao desenvolvimento web: programação, front-end e back-end, banco de dados, design de interfaces e projetos integradores.",
  },
  {
    title: "Plano de estudos Rocketseat",
    institution: "Rocketseat",
    period: "2025 — atual",
    status: "Em andamento",
    description: "Trilha de estudos complementar em desenvolvimento web moderno com JavaScript, React e ferramentas do ecossistema.",
  },
];

export type Job = {
  role: string;
  company: string;
  area: string;
  description: string;
  highlights: string[];
};

export const jobs: Job[] = [
  {
    role: "Estagiário de TI",
    company: "Mediez Segurança do Trabalho",
    area: "Tecnologia da Informação",
    description: "Suporte à infraestrutura de TI de uma empresa de saúde e segurança ocupacional.",
    highlights: [
      "Atendimento e suporte técnico aos colaboradores",
      "Manutenção de computadores, impressoras e rede interna",
      "Apoio na organização de sistemas e acessos",
    ],
  },
  {
    role: "Estagiário de TI",
    company: "Smile Tecnologia",
    area: "Tecnologia da Informação",
    description: "Rotina de TI em empresa de tecnologia, com contato direto com clientes e sistemas.",
    highlights: [
      "Suporte técnico a usuários e chamados",
      "Instalação e configuração de softwares e equipamentos",
      "Documentação de procedimentos técnicos",
    ],
  },
  {
    role: "Auxiliar de Logística",
    company: "Cobra Rolamentos",
    area: "Logística",
    description: "Operação logística em distribuidora de rolamentos e peças industriais.",
    highlights: [
      "Separação, conferência e expedição de pedidos",
      "Controle de estoque e organização do armazém",
      "Trabalho em equipe com prazos de entrega",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Portfólio Demetrius",
    description:
      "Este site: currículo em React com rotas, CSS caprichado e visual de terminal.",
    tech: ["React", "TypeScript", "TanStack", "Tailwind CSS"],
  },
  {
    name: "Vetores e Matrizes",
    description: "Exercícios de lógica em Java manipulando vetores e matrizes: leitura, busca, somas e ordenação.",
    tech: ["Java", "Lógica de programação"],
  },
  {
    name: "Lista de Matrizes e Vetores",
    description: "Resolução de uma lista de exercícios da faculdade sobre estruturas de dados básicas em Java.",
    tech: ["Java", "Estruturas de dados"],
  },
];

export type Tech = { name: string; purpose: string; category: string };

// Tecnologias e módulos usados para desenvolver este site (página Sobre).
export const siteStack: Tech[] = [
  { name: "React 19", purpose: "Biblioteca de interface, componentes e hooks", category: "Base" },
  { name: "TypeScript", purpose: "Tipagem estática para o código JavaScript", category: "Base" },
  { name: "Vite", purpose: "Servidor de desenvolvimento e build", category: "Base" },
  { name: "TanStack Start", purpose: "Framework React full-stack com renderização no servidor (SSR)", category: "Framework" },
  { name: "TanStack Router", purpose: "Rotas baseadas em arquivos e navegação tipada", category: "Framework" },
  { name: "TanStack Query", purpose: "Cache e estados de carregamento de dados", category: "Dados" },
  { name: "Tailwind CSS v4", purpose: "Estilização com design tokens e utilitários CSS", category: "Estilo" },
  { name: "shadcn/ui + Radix UI", purpose: "Componentes acessíveis (botões, cards, badges)", category: "Estilo" },
  { name: "lucide-react", purpose: "Biblioteca de ícones", category: "Estilo" },
  { name: "Vitest", purpose: "Testes automatizados", category: "Qualidade" },
  { name: "ESLint + Prettier", purpose: "Padronização e formatação do código", category: "Qualidade" },
];

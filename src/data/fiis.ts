export interface FII {
  ticker: string
  nome: string
  apelido: string
  gestora: string
  categoria: string
  funcao: 'Base Defensiva' | 'Proteção / Caixa' | 'Crescimento'
  peso: number
  cor: string
  corBg: string
  durabilityScore: number
  resilienceScore: number
  descricao: string
  destaque: string
  tags: string[]
  preco: number
  variacao: number
  pvp: number
  dy12m: number
  liquidezDiaria: number
}

export const fiis: FII[] = [
  {
    ticker: 'HGLG11',
    nome: 'CSHG Logística',
    apelido: 'O Relógio Suíço',
    gestora: 'CSHG',
    categoria: 'Logística (Tijolo)',
    funcao: 'Base Defensiva',
    peso: 15,
    cor: '#22d3ee',
    corBg: 'rgba(34,211,238,0.1)',
    durabilityScore: 9.4,
    resilienceScore: 9.2,
    descricao: 'Um dos fundos mais antigos e resilientes da bolsa. Patrimônio gigantesco e contratos atípicos longos garantem previsibilidade quase absoluta na renda.',
    destaque: 'Manteve dividendos estáveis durante toda a pandemia.',
    tags: ['Multi-imóvel', 'Multi-inquilino', 'Contratos longos'],
    preco: 162.50,
    variacao: 0.31,
    pvp: 0.94,
    dy12m: 8.6,
    liquidezDiaria: 12,
  },
  {
    ticker: 'BTLG11',
    nome: 'BTG Pactual Logística',
    apelido: 'O Gigante Ativo',
    gestora: 'BTG Pactual',
    categoria: 'Logística (Tijolo)',
    funcao: 'Base Defensiva',
    peso: 15,
    cor: '#22d3ee',
    corBg: 'rgba(34,211,238,0.1)',
    durabilityScore: 9.1,
    resilienceScore: 8.9,
    descricao: 'Galpões de alto padrão (AAA) no raio de 30 km de São Paulo. Demanda constante e vacância baixíssima mesmo em crises, com gestão extremamente ativa.',
    destaque: 'Foco em ativos prime de alta demanda permanente.',
    tags: ['Alto Padrão AAA', 'Próximo a SP', 'Baixa vacância'],
    preco: 102.40,
    variacao: -0.15,
    pvp: 0.97,
    dy12m: 9.1,
    liquidezDiaria: 20,
  },
  {
    ticker: 'HGRU11',
    nome: 'Pátria Renda Urbana',
    apelido: 'O Essencial',
    gestora: 'Pátria',
    categoria: 'Renda Urbana (Tijolo)',
    funcao: 'Base Defensiva',
    peso: 20,
    cor: '#00c896',
    corBg: 'rgba(0,200,150,0.1)',
    durabilityScore: 9.3,
    resilienceScore: 9.5,
    descricao: 'Focado em varejo essencial (supermercados) e educação. Mesmo em crises severas, as pessoas continuam comprando comida e pagando escolas.',
    destaque: 'Histórico excelente de reciclagem de portfólio com ganhos extras.',
    tags: ['Varejo essencial', 'Educação', 'Ganhos extraordinários'],
    preco: 126.80,
    variacao: 0.48,
    pvp: 1.02,
    dy12m: 9.8,
    liquidezDiaria: 8,
  },
  {
    ticker: 'KNCR11',
    nome: 'Kinea Rendimentos',
    apelido: 'O Porto Seguro',
    gestora: 'Kinea',
    categoria: 'Crédito High Grade (Papel)',
    funcao: 'Proteção / Caixa',
    peso: 40,
    cor: '#f5a623',
    corBg: 'rgba(245,166,35,0.1)',
    durabilityScore: 9.6,
    resilienceScore: 9.0,
    descricao: 'Portfólio atrelado ao CDI com devedores de altíssima qualidade (High Grade). Em cenários de juros altos, atua como escudo pagando dividendos elevados e constantes.',
    destaque: 'Escudo perfeito contra a alta da Selic no Brasil.',
    tags: ['CDI+', 'High Grade', 'Proteção Selic'],
    preco: 105.20,
    variacao: 0.10,
    pvp: 1.01,
    dy12m: 13.2,
    liquidezDiaria: 35,
  },
  {
    ticker: 'XPML11',
    nome: 'XP Malls',
    apelido: 'O Antifrágil',
    gestora: 'XP',
    categoria: 'Shoppings (Tijolo)',
    funcao: 'Crescimento',
    peso: 10,
    cor: '#9d71f5',
    corBg: 'rgba(157,113,245,0.1)',
    durabilityScore: 8.7,
    resilienceScore: 8.5,
    descricao: 'Maior fundo de shoppings do Brasil. Diversificação geográfica e foco em shoppings para classes A e B, cujo consumo é menos afetado por crises econômicas.',
    destaque: 'Recuperou-se da pandemia demonstrando antifragilidade real.',
    tags: ['Classes A e B', 'Diversif. geográfica', 'Valorização'],
    preco: 106.50,
    variacao: -0.28,
    pvp: 0.89,
    dy12m: 9.5,
    liquidezDiaria: 45,
  },
]

export const alocacaoPorCategoria = [
  { name: 'Logística',    value: 30, cor: '#22d3ee' },
  { name: 'Renda Urbana', value: 20, cor: '#00c896' },
  { name: 'Crédito HG',   value: 40, cor: '#f5a623' },
  { name: 'Shoppings',    value: 10, cor: '#9d71f5' },
]
